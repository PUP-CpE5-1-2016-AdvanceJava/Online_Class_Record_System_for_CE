<?php

class Upload_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
		// $this->load->model('Grades_model');
	}
	
	function save_data($file,$module,$UserId)
	{
		$name = $file["classlist"]["name"];
		$temp = $file["classlist"]["tmp_name"];

		if (file_exists('resources/uploads/'. $name) || $file["classlist"]["type"] != "application/pdf")
		{
			return "PDF has not been uploaded. Invalid file type or file already exists.";
		}
		move_uploaded_file($temp, "resources/uploads/".$name);

		include(APPPATH.'libraries/pdfparse.php');
		//create new instance of class pdfparse
		$pdfdata = new PDFparse();
		//just set the path of the file
		$pdfdata->setFilename('resources/uploads/'. $name);
		//it will get the infos like subj,sect,schedule and stud number/name
		$pdfdata->decodePDF();
		//convert into array
		$data = $pdfdata->output();
		//get max count for the loop later
		$count = count($data["studs"]);
		$num_students = $count/2;

		//---get subj title---//
		$s = $this->slugify($data["info"][5]);
		$subj = explode('-', $s);
		$subj[0] = strtoupper($subj[0]);
		$s = implode(" ", $subj);
		$t = ucwords($s);
		$subj_title = $t;

		//---get subj title---//
		$class_block = $data["info"][3]; //class block
		$class_yr_sem = $data["info"][1]; //yr and sem
		$class_schedule = $data["info"][7]; // schedule

		//save each information consecutively
		//---save subject---//
		$subject = array(
			'UserId' => $UserId,
			'SubjectTitle' => $subj_title, 
		);
		$this->db->insert('subjects',$subject);
		//get newly created subj id
		$SubjectId = $this->db->insert_id();
		//--save class--//

		$class = array(
			'SubjectId' => $SubjectId,
			'ClassBlock' => $class_block,
			'ModuleType' => $module,
			'NumOfStudents' => $num_students,
			'YrSem' => $class_yr_sem,
			'Schedule' => $class_schedule,
		);
		$this->db->insert('class',$class);
		$ClassId = $this->db->insert_id();
	
		for ($c=0; $c < $count; $c+=2) 
		{ 	
			//---block of code for getting first;middle and last name---//
			$text = strtolower($data["studs"][$c+1]);
			$text = utf8_encode($text); // to read special characters ñ
			$name = explode(',',$text);
			$first_middle_name = explode(' ', $name[1]);
			$first_name = "";
			$last_name = $name[0];
			//get last item on array
			$middle_name = end($first_middle_name);
			//convert string to array
			$fname = explode(' ', substr($name[1],1));
			$cnt = count($fname);
			for ($d=0; $d < $cnt-1; $d++) { 
				$first_name = $first_name.$fname[$d] . " ";
			}
			//remove last space
			substr($first_name, -1);
			//---block of code for getting first,middle and last name---//
			$stud_num = $data["studs"][$c]; //stud number
			// now save each student
			$student = array(
				'ClassId' => $ClassId,
				'FName' => $first_name, 
				'MName' => $middle_name, 
				'LName' => $last_name, 
				'StudentNumber' => $stud_num, 
			);
			$this->db->insert('students',$student);
			//get student id and insert to 'grades table'
		}
		return "PDF has been successfully uploaded.";
	}

	function slugify($text)
	{ 
	  // replace non letter or digits by -
	  $text = preg_replace('~[^\\pL\d]+~u', '-', $text);

	  // trim
	  $text = trim($text, '-');

	  // transliterate
	  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

	  // lowercase
	  $text = strtolower($text);

	  // remove unwanted characters
	  $text = preg_replace('~[^-\w]+~', '', $text);

	  if (empty($text))
	  {
	    return 'n-a';
	  }

	  return $text;
	}
}
?>
