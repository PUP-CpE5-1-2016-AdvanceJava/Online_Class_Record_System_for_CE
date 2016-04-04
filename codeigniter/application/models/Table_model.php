<?php

class Table_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('ModuleItems_model');
	}
	
	function get_class_table($table_type,$ClassId)
	{
		//--get Class Block and schedule--//
		$this->db->select('*')->from('class')->where('Id',$ClassId);
		$q = $this->db->get();
		$block = $q->row();
		$class = array(
			'ClassBlock' => $block->ClassBlock,
			'Schedule' => $block->Schedule,
			'ModuleType' => $block->ModuleType,
			'ClassId' => $block->Id,
		);
		//--get module--//
		if ($block->ModuleType == "Lec") 
			{
				$this->db->select('*')->from('lectmodperc')->where('Id',1);
				$m = $this->db->get();
				$mod = $m->row();
				$module = array(
					'Attendance' => $mod->Attendance,
					'ClassStanding' => $mod->ClassStanding, 
					'QuizzesLExam' => $mod->QuizzesLExam, 
					'MajorExam' => $mod->MajorExam, 
				);
			}
		else 
			{
				$this->db->select('*')->from('labmodperc')->where('Id',1);
				$m = $this->db->get();
				$mod = $m->row();
				$module = array(
    				'PracExam' => $mod->PracExam,
    				'Project' => $mod->Project,
    				'Lab_MachineEx' => $mod->Lab_MachineEx,
	    		);
			}
		

		//--get subj title--//
		$this->db->select('SubjectTitle')->from('subjects')->where('Id',$block->SubjectId);
		$s = $this->db->get();
		$subj = $s->row();
		$subject = $subj->SubjectTitle;
		//--get studentes--//
		$this->db->select('*')->from('students')->where('ClassId',$ClassId);
		$this->db->order_by('LName','asc');
		$query = $this->db->get();

		if (!$query->num_rows() > 0) {
        	// die("There are no students in the database.");
        	return;
    	}

    	$i = 0;
    	$assign_mid_num = 0;$assign_mid_items = array();$assign_mid_score = array();
    	$sw_mid_num = 0;$sw_mid_items = array();$sw_mid_score = array();
    	$ex_mid_num = 0;$ex_mid_items = array();$ex_mid_score = array();
    	$rec_mid_num = 0;$rec_mid_items = array();$rec_mid_score = array();

    	foreach ($query->result() as $row) 
    	{	
    		// combine to make full name and to capital first letter of each name
    		$full_name = ucwords($row->LName).', '.ucwords($row->FName).' '.ucwords($row->MName);
    		$stud[$i] = array(
    			'full_name' => $full_name, 
    			'stud_num' => $row->StudentNumber,
    		);
    		if ($block->ModuleType == 'Lec')
    		{
    			//---assign_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Midterm');
    			$query_module = $this->db->get('mod_assign');
    			$assign_mid_num = $query_module->num_rows();
    			if ($assign_mid_num > 0)
    			{
    				$assign_items = $query_module->result_array();
	    			for ($x=0; $x < $assign_mid_num; $x++) 
	    			{ 
	    				$assign_mid_items[$x] = $assign_items[$x]["AssignItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Midterm');
    			$query_assign_score = $this->db->get('assignment');
    			$assign_mid_score_num = $query_assign_score->num_rows();
    			if ($assign_mid_score_num > 0)
    			{
    				$assign_score = $query_assign_score->result_array();
	    			for ($y=0; $y < $assign_mid_num; $y++) 
	    			{ 
	    				$assign_mid_score[$i][$y] = $assign_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $assign_mid_num; $y++) 
	    			{ 
	    				$assign_mid_score[$i][$y] = "0.00";
	    			}
    			}

    			//---sw_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Midterm');
    			$query_module = $this->db->get('mod_sw');
    			$sw_mid_num = $query_module->num_rows();
    			if ($sw_mid_num > 0)
    			{
    				$sw_items = $query_module->result_array();
	    			for ($x=0; $x < $sw_mid_num; $x++) 
	    			{ 
	    				$sw_mid_items[$x] = $sw_items[$x]["SWItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Midterm');
    			$query_sw_score = $this->db->get('seatwork');
    			$sw_mid_score_num = $query_sw_score->num_rows();
    			if ($sw_mid_score_num > 0)
    			{
    				$sw_score = $query_sw_score->result_array();
	    			for ($y=0; $y < $sw_mid_num; $y++) 
	    			{ 
	    				$sw_mid_score[$i][$y] = $sw_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $sw_mid_num; $y++) 
	    			{ 
	    				$sw_mid_score[$i][$y] = "0.00";
	    			}
    			}

    			//---ex_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Midterm');
    			$query_module = $this->db->get('mod_ex');
    			$ex_mid_num = $query_module->num_rows();
    			if ($ex_mid_num > 0)
    			{
    				$ex_items = $query_module->result_array();
	    			for ($x=0; $x < $ex_mid_num; $x++) 
	    			{ 
	    				$ex_mid_items[$x] = $ex_items[$x]["ExItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Midterm');
    			$query_ex_score = $this->db->get('exercises');
    			$ex_mid_score_num = $query_ex_score->num_rows();
    			if ($ex_mid_score_num > 0)
    			{
    				$ex_score = $query_ex_score->result_array();
	    			for ($y=0; $y < $ex_mid_num; $y++) 
	    			{ 
	    				$ex_mid_score[$i][$y] = $ex_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $ex_mid_num; $y++) 
	    			{ 
	    				$ex_mid_score[$i][$y] = "0.00";
	    			}
    			}

    			//---rec_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Midterm');
    			$query_module = $this->db->get('mod_rec');
    			$rec_mid_num = $query_module->num_rows();
    			if ($rec_mid_num > 0)
    			{
    				$rec_items = $query_module->result_array();
	    			for ($x=0; $x < $rec_mid_num; $x++) 
	    			{ 
	    				$rec_mid_items[$x] = $rec_items[$x]["RecItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Midterm');
    			$query_rec_score = $this->db->get('recitation');
    			$rec_mid_score_num = $query_rec_score->num_rows();
    			if ($rec_mid_score_num > 0)
    			{
    				$rec_score = $query_rec_score->result_array();
	    			for ($y=0; $y < $rec_mid_num; $y++) 
	    			{ 
	    				$rec_mid_score[$i][$y] = $rec_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $rec_mid_num; $y++) 
	    			{ 
	    				$rec_mid_score[$i][$y] = "0.00";
	    			}
    			}
				
    		}
    		$i++;
    	}
    	$data = array(
    		'Class' => $class,
    		'Subject' => $subject,
    		'Student' => $stud,
    		'Module' => $module,
    		'assign_mid_num' => $assign_mid_num,
    		'assign_mid_items' => $assign_mid_items,
    		'assign_mid_score' => $assign_mid_score,
    		'sw_mid_num' => $sw_mid_num,
    		'sw_mid_items' => $sw_mid_items,
    		'sw_mid_score' => $sw_mid_score,
    		'ex_mid_num' => $ex_mid_num,
    		'ex_mid_items' => $ex_mid_items,
    		'ex_mid_score' => $ex_mid_score,
    		'rec_mid_num' => $rec_mid_num,
    		'rec_mid_items' => $rec_mid_items,
    		'rec_mid_score' => $rec_mid_score,
    	);
    	return $data;
	}

	function save_table_data($data)
	{
		// determine module(Lec/Lab/Attendance data)
		$stud_id = $this->get_stud_id($data['classId']);
		if ($data['module'] == 'Lec')
		{
			$assign_mid_data = explode('-', $data['assign_mid_data']);
			$assign_final_data = explode('-', $data['assign_final_data']);
			$sw_mid_data = explode('-', $data['sw_mid_data']);
			$sw_final_data = explode('-', $data['sw_final_data']);
			$ex_mid_data = explode('-', $data['ex_mid_data']);
			$ex_final_data = explode('-', $data['ex_final_data']);
			$rec_mid_data = explode('-', $data['rec_mid_data']);
			$rec_final_data = explode('-', $data['rec_final_data']);
			$quiz_mid_data = explode('-', $data['quiz_mid_data']);
			$quiz_final_data = explode('-', $data['quiz_final_data']);
			$le_mid_data = explode('-', $data['le_mid_data']);
			$le_final_data = explode('-', $data['le_final_data']);
			$mexam_mid_data = explode('-', $data['mexam_mid_data']);
			$fexam_final_data = explode('-', $data['fexam_final_data']);

			//get each total items based on module number
			
			/*assign_num (midterm and final)*/
			for ($i=0; $i <$data['assign_mid_num'] ; $i++) { $arr[$i] = $assign_mid_data[$i]; } 
			$mid_final_len = sizeof($arr)+$data['assign_final_num'];
			for ($j=sizeof($arr),$k=0; $j < $mid_final_len; $j++,$k++) { $arr[$j] = $assign_final_data[$k];}
			$this->ModuleItems_model->ins_mod_assign($data['classId'],$arr,$data['assign_mid_num'],$data['assign_final_num'],$stud_id,$assign_mid_data,$assign_final_data);
			
			/*sw_num (midterm and final)*/
			for ($i=0; $i <$data['sw_mid_num'] ; $i++) { $arr2[$i] = $sw_mid_data[$i]; } 
			$mid_final_len = sizeof($arr2)+$data['sw_final_num'];
			for ($j=sizeof($arr2),$k=0; $j < $mid_final_len; $j++,$k++) { $arr2[$j] = $sw_final_data[$k];}
			$this->ModuleItems_model->ins_mod_sw($data['classId'],$arr2,$data['sw_mid_num'],$data['sw_final_num'],$stud_id,$sw_mid_data,$sw_final_data);
			
			/*ex_num (midterm and final)*/
			for ($i=0; $i <$data['ex_mid_num'] ; $i++) { $arr3[$i] = $ex_mid_data[$i]; } 
			$mid_final_len = sizeof($arr3)+$data['ex_final_num'];
			for ($j=sizeof($arr3),$k=0; $j < $mid_final_len; $j++,$k++) { $arr3[$j] = $ex_final_data[$k];}
			$this->ModuleItems_model->ins_mod_ex($data['classId'],$arr3,$data['ex_mid_num'],$data['ex_final_num'],$stud_id,$ex_mid_data,$ex_final_data);
			
			/*rec_num (midterm and final)*/
			for ($i=0; $i <$data['rec_mid_num'] ; $i++) { $arr4[$i] = $rec_mid_data[$i]; } 
			$mid_final_len = sizeof($arr4)+$data['rec_final_num'];
			for ($j=sizeof($arr4),$k=0; $j < $mid_final_len; $j++,$k++) { $arr4[$j] = $rec_final_data[$k];}
			$this->ModuleItems_model->ins_mod_rec($data['classId'],$arr4,$data['rec_mid_num'],$data['rec_final_num'],$stud_id,$rec_mid_data,$rec_final_data);
			
			/*quiz_num (midterm and final)*/
			for ($i=0; $i <$data['quiz_mid_num'] ; $i++) { $arr5[$i] = $quiz_mid_data[$i]; } 
			$mid_final_len = sizeof($arr5)+$data['quiz_final_num'];
			for ($j=sizeof($arr5),$k=0; $j < $mid_final_len; $j++,$k++) { $arr5[$j] = $quiz_final_data[$k];}
			$this->ModuleItems_model->ins_mod_quiz($data['classId'],$arr5,$data['quiz_mid_num'],$data['quiz_final_num'],$stud_id,$quiz_mid_data,$quiz_final_data);
			
			/*le_num (midterm and final)*/
			for ($i=0; $i <$data['le_mid_num'] ; $i++) { $arr6[$i] = $le_mid_data[$i]; } 
			$mid_final_len = sizeof($arr6)+$data['le_final_num'];
			for ($j=sizeof($arr6),$k=0; $j < $mid_final_len; $j++,$k++) { $arr6[$j] = $le_final_data[$k];}
			$this->ModuleItems_model->ins_mod_le($data['classId'],$arr6,$data['le_mid_num'],$data['le_final_num'],$stud_id,$le_mid_data,$le_final_data);

			$this->ModuleItems_model->ins_mod_major($data['classId'],$mexam_mid_data[0],$fexam_final_data[0],$stud_id,$mexam_mid_data,$fexam_final_data);
			// save module numbers and total items
			return $stud_id;
		}
		else if ($data['module'] == 'Lab')
		{
			$lab_mid_data = explode('-', $data['lab_mid_data']);
			$lab_final_data = explode('-', $data['lab_final_data']);
			$prac_mid_data = explode('-', $data['prac_mid_data']);
			$prac_final_data = explode('-', $data['prac_final_data']);
			$proj_mid_data = explode('-', $data['proj_mid_data']);
			$proj_final_data = explode('-', $data['proj_final_data']);

			/*lab_num (midterm and final)*/
			for ($i=0; $i <$data['lab_mid_num'] ; $i++) { $arr[$i] = $lab_mid_data[$i]; } 
			$mid_final_len = sizeof($arr)+$data['lab_final_num'];
			for ($j=sizeof($arr),$k=0; $j < $mid_final_len; $j++,$k++) { $arr[$j] = $lab_final_data[$k];}
			$this->ModuleItems_model->ins_mod_lab($data['classId'],$arr,$data['lab_mid_num'],$data['lab_final_num'],$stud_id,$lab_mid_data,$lab_final_data);

			/*prac_num (midterm and final)*/
			for ($i=0; $i <$data['prac_mid_num'] ; $i++) { $arr2[$i] = $prac_mid_data[$i]; } 
			$mid_final_len = sizeof($arr2)+$data['prac_final_num'];
			for ($j=sizeof($arr2),$k=0; $j < $mid_final_len; $j++,$k++) { $arr2[$j] = $prac_final_data[$k];}
			$this->ModuleItems_model->ins_mod_prac($data['classId'],$arr2,$data['prac_mid_num'],$data['prac_final_num'],$stud_id,$prac_mid_data,$prac_final_data);

			/*proj_num (midterm and final)*/
			for ($i=0; $i <$data['proj_mid_num'] ; $i++) { $arr3[$i] = $proj_mid_data[$i]; } 
			$mid_final_len = sizeof($arr3)+$data['proj_final_num'];
			for ($j=sizeof($arr3),$k=0; $j < $mid_final_len; $j++,$k++) { $arr3[$j] = $proj_final_data[$k];}
			$this->ModuleItems_model->ins_mod_proj($data['classId'],$arr3,$data['proj_mid_num'],$data['proj_final_num'],$stud_id,$proj_mid_data,$proj_final_data);

			return "lab saved";
		}
		else
		{
			//else attendance
			$att_mid_data = explode('-', $data['att_mid_data']);
			$att_final_data = explode('-', $data['att_final_data']);

			/*att_num (midterm and final)*/
			for ($i=0; $i <$data['att_mid_num'] ; $i++) { $arr[$i] = $att_mid_data[$i]; } 
			$mid_final_len = sizeof($arr)+$data['att_final_num'];
			for ($j=sizeof($arr),$k=0; $j < $mid_final_len; $j++,$k++) { $arr[$j] = $att_final_data[$k];}
			$this->ModuleItems_model->ins_mod_att($data['classId'],$arr,$data['att_mid_num'],$data['att_final_num'],$stud_id,$att_mid_data,$att_final_data);

			return "att saved";
		}	
	}

	function get_stud_id($ClassId)
	{
		$this->db->select('Id')->from('students')->where('ClassId',$ClassId);
		$this->db->order_by('LName','asc');
		$query = $this->db->get();
		return $query->result_array();
	}
}
?>
