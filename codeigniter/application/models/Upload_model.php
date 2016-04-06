<?php

class Upload_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('Grades_model');
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

		$init_att = false; $init_assign = false; $init_sw = false; $init_ex= false; $init_rec = false; $init_quiz = false; $init_le = false; $init_mexam = false; $init_fexam = false;
		$init_lab = false; $init_prac = false; $init_proj = false;
	
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
			$stud_id = $this->db->insert_id();
			$this->Grades_model->init_grades($stud_id);
			//know the module to be used 'Lec' or 'Lab'
			//if 'Lec'
			if ($module == 'Lec')
			{
				if ($init_att == false)
					//insert att
					$init_att = $this->Grades_model->init_att($stud_id,$num_students);
				if ($init_assign == false)
					//insert assign
					$init_assign = $this->Grades_model->init_assign($stud_id,$num_students);
				if ($init_sw == false)
					//insert sw
					$init_sw = $this->Grades_model->init_sw($stud_id,$num_students);
				if ($init_ex == false)
					//insert ex
					$init_ex = $this->Grades_model->init_ex($stud_id,$num_students);
				if ($init_rec == false)
					//insert rec
					$init_rec = $this->Grades_model->init_rec($stud_id,$num_students);
				if ($init_quiz == false)
					//insert quiz
					$init_quiz = $this->Grades_model->init_quiz($stud_id,$num_students);
				if ($init_le == false)
					//insert le
					$init_le = $this->Grades_model->init_le($stud_id,$num_students);
				if ($init_mexam == false)
					//insert midterm exam
					$init_mexam = $this->Grades_model->init_mexam($stud_id,$num_students);
				if ($init_fexam == false)
					//insert final exam
					$init_fexam = $this->Grades_model->init_fexam($stud_id,$num_students);
			}
			//else 'Lab'
			else
			{
				if ($init_lab == false)
					//insert lab/machine ex
					$init_lab = $this->Grades_model->init_lab($stud_id,$num_students);
				if ($init_prac == false)
					//insert prac exam
					$init_prac = $this->Grades_model->init_prac($stud_id,$num_students);
				if ($init_proj == false)
					//insert proj
					$init_proj = $this->Grades_model->init_proj($stud_id,$num_students);
			}
				
		}
		return "PDF has been successfully uploaded.";
	}

	function upload_class($file)
	{
		$name = $file["excel_file"]["name"];
		$temp = $file["excel_file"]["tmp_name"];
		if ($file["excel_file"]["type"] != "application/vnd.ms-excel")
		{
			return "Excel has not been uploaded. Invalid file type.";
		}
		$arr = explode('__',$name);
		$class_id = $arr[2];
		$this->db->where('Id',$class_id);
		$query = $this->db->get('class');
		if (!$query->num_rows() > 0)
		{
			return "Invalid file name";
		}
		$this->load->model('Table_model');
		$msg = $this->Table_model->export_class_table($class_id,$name);

		if ($msg == "You have already uploaded this file.") return $msg;
		else move_uploaded_file($temp, "resources/reports/".$name);
		return $msg;
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
