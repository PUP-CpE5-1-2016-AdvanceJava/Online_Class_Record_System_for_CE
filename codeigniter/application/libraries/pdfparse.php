<?php
class PDFparse {
	var $filename = '';
	var $decodedtext = array();
	var $decodedstud = array();

	function setFilename($filename) {
		// Reset
		$this->decodedtext = '';
		$this->filename = $filename;
	}
	
	function output($echo = false) {
		$data = array(
			'info' => $this->decodedtext,
			'studs' => $this->decodedStud
		);
		// var_dump($this->decodedStud);
		if($echo) echo $this->decodedtext;
		else return $data;
	}
	
	function decodePDF() {
		// Read the data from pdf file
		$infile = @file_get_contents($this->filename, FILE_BINARY);
		if (empty($infile))
			return "";
			
		$texts = array();
		// Read all objects from pdf contents
		preg_match_all("#obj[\n|\r](.*)endobj[\n|\r]#ismU", $infile . "endobj\r", $objects);
		$objects = @$objects[1];
		
		// Select the object that contains the table array
		foreach ($objects as $object) {
			if (preg_match("#stream[\n|\r](.*)endstream[\n|\r]#ismU", $object . "endstream\r", $stream )) {
				$stream = ltrim($stream[1]);
				
				// Check object parameters and look for text data.
				$options = $this->getObjectOptions($object);
				
				if (!(empty($options["Length1"]) && empty($options["Type"]) && empty($options["Subtype"])) )
					// NO IDEA WHAT THE HELL THIS DOES.
					// if ( $options["Image"] && $options["Subtype"] )
					// if (!(empty($options["Length1"]) &&  empty($options["Subtype"])) )
					continue;
				
				// Hack, length doesnt always seem to be correct
				unset($options["Length"]);

				// So, we have text data. Decode it.
				$data = $this->getDecodedStream($stream, $options);
				
				if (strlen($data)) {
					if (preg_match_all("#BT (.*) ET#ismU", $data, $textContainers)) {
				
						$textContainers = @$textContainers[1];
						
						$this->getDirtyTexts($texts, $textContainers);
						
						// $this->decodedtext = $texts;
						// for displaying classlist info(subj,prof,section,sched)
						for ($i = 0; $i < 17; $i++) {
							$this->decodedtext[]=$texts[$i];
						}
						// for displaying students only
						for ($a = 17; $a < count($texts); $a+=5) {
							$this->decodedStud[]=$texts[$a];
							$this->decodedStud[]=$texts[$a+1];
						}
						// var_dump($this->decodedtext);
					} else 
						echo "Error in PDF Format";
				}
			}
		}
	}
	
	function getObjectOptions($object) {
			$options = array();

			if (preg_match("#<<(.*)>>#ismU", $object, $options)) {
				$options = explode("/", $options[1]);
				@array_shift($options);

				$o = array();
				for ($j = 0; $j < @count($options); $j++) {
					$options[$j] = preg_replace("#\s+#", " ", trim($options[$j]));
					if (strpos($options[$j], " ") !== false) {
						$parts = explode(" ", $options[$j]);
						$o[$parts[0]] = $parts[1];
					} else
						$o[$options[$j]] = true;
				}
				$options = $o;
				unset($o);
			}

			return $options;
		}
		
	function getDecodedStream($stream, $options) {
		$data = "";
		if (empty($options["Filter"]))
			$data = $stream;
		else {
			$length = !empty($options["Length"]) ? $options["Length"] : strlen($stream);
			$_stream = substr($stream, 0, $length);

			foreach ($options as $key => $value) {
				if ($key == "ASCIIHexDecode")
					$_stream = $this->decodeAsciiHex($_stream);
				elseif ($key == "ASCII85Decode")
					$_stream = $this->decodeAscii85($_stream);
				elseif ($key == "FlateDecode")
					$_stream = $this->decodeFlate($_stream);
				elseif ($key == "Crypt") { // TO DO
					}
			}
			$data = $_stream;
		}
		return $data;
	}


	function decodeAsciiHex($input) {
		$output = "";

		$isOdd = true;
		$isComment = false;

		for($i = 0, $codeHigh = -1; $i < strlen($input) && $input[$i] != '>'; $i++) {
			$c = $input[$i];

			if($isComment) {
				if ($c == '\r' || $c == '\n')
					$isComment = false;
				continue;
			}

			switch($c) {
				case '\0': case '\t': case '\r': case '\f': case '\n': case ' ': break;
				case '%':
					$isComment = true;
					break;

				default:
					$code = hexdec($c);
					if($code === 0 && $c != '0')
						return "";

						if($isOdd)
							$codeHigh = $code;
						else
							$output .= chr($codeHigh * 16 + $code);

						$isOdd = !$isOdd;
					break;
			}
		}

		if($input[$i] != '>')
			return "";

		if($isOdd)
			$output .= chr($codeHigh * 16);

		return $output;
	}

	function decodeAscii85($input) {
		$output = "";

		$isComment = false;
		$ords = array();

		for($i = 0, $state = 0; $i < strlen($input) && $input[$i] != '~'; $i++) {
			$c = $input[$i];

			if($isComment) {
				if ($c == '\r' || $c == '\n')
					$isComment = false;
					continue;
				}

			if ($c == '\0' || $c == '\t' || $c == '\r' || $c == '\f' || $c == '\n' || $c == ' ')
				continue;
			if ($c == '%') {
				$isComment = true;
				continue;
			}
			if ($c == 'z' && $state === 0) {
				$output .= str_repeat(chr(0), 4);
				continue;
			}
			if ($c < '!' || $c > 'u')
				return "";

			$code = ord($input[$i]) & 0xff;
			$ords[$state++] = $code - ord('!');

			if ($state == 5) {
				$state = 0;
				for ($sum = 0, $j = 0; $j < 5; $j++)
					$sum = $sum * 85 + $ords[$j];
				for ($j = 3; $j >= 0; $j--)
					$output .= chr($sum >> ($j * 8));
			}
		}
		if ($state === 1)
			return "";
		elseif ($state > 1) {
			for ($i = 0, $sum = 0; $i < $state; $i++)
				$sum += ($ords[$i] + ($i == $state - 1)) * pow(85, 4 - $i);
			for ($i = 0; $i < $state - 1; $i++) {
				try {
					if(false == ($o = chr($sum >> ((3 - $i) * 8)))) {
						throw new Exception('Error');
					}
					$output .= $o;
				} catch (Exception $e) { /*Dont do anything*/ }
			}
		}

		return $output;
	}

	function decodeFlate($data) {
		return @gzuncompress($data);
	}

	function getDirtyTexts(&$texts, $textContainers) {
		for ($j = 0; $j < count($textContainers); $j++) {
			if (preg_match_all("#\((.*)\)#ismU", $textContainers[$j], $parts))
				$texts = array_merge($texts, array(@implode('', $parts[1])));
		}
	}
}
?>
