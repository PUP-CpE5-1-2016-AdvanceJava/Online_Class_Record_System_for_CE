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
    	$quiz_mid_num = 0;$quiz_mid_items = array();$quiz_mid_score = array();
    	$le_mid_num = 0;$le_mid_items = array();$le_mid_score = array();

    	$mexam_mid_num = 0;$mexam_mid_items = array();$mexam_mid_score = array();

    	$assign_final_num = 0;$assign_final_items = array();$assign_final_score = array();
    	$sw_final_num = 0;$sw_final_items = array();$sw_final_score = array();
    	$ex_final_num = 0;$ex_final_items = array();$ex_final_score = array();
    	$rec_final_num = 0;$rec_final_items = array();$rec_final_score = array();
    	$quiz_final_num = 0;$quiz_final_items = array();$quiz_final_score = array();
    	$le_final_num = 0;$le_final_items = array();$le_final_score = array();

    	$fexam_final_num = 0;$fexam_final_items = array();$fexam_final_score = array();


        $lab_mid_num = 0;$lab_mid_items = array();$lab_mid_score = array();
        $prac_mid_num = 0;$prac_mid_items = array();$prac_mid_score = array();
        $proj_mid_num = 0;$proj_mid_items = array();$proj_mid_score = array();
        $lab_final_num = 0;$lab_final_items = array();$lab_final_score = array();
        $prac_final_num = 0;$prac_final_items = array();$prac_final_score = array();
        $proj_final_num = 0;$proj_final_items = array();$proj_final_score = array();

        $att_mid_num = 0;$att_mid_items = array();$att_mid_score = array();
        $att_final_num = 0;$att_final_items = array();$att_final_score = array();

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

    			//---quiz_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Midterm');
    			$query_module = $this->db->get('mod_quiz');
    			$quiz_mid_num = $query_module->num_rows();
    			if ($quiz_mid_num > 0)
    			{
    				$quiz_items = $query_module->result_array();
	    			for ($x=0; $x < $quiz_mid_num; $x++) 
	    			{ 
	    				$quiz_mid_items[$x] = $quiz_items[$x]["QuizItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Midterm');
    			$query_quiz_score = $this->db->get('quizzes');
    			$quiz_mid_score_num = $query_quiz_score->num_rows();
    			if ($quiz_mid_score_num > 0)
    			{
    				$quiz_score = $query_quiz_score->result_array();
	    			for ($y=0; $y < $quiz_mid_num; $y++) 
	    			{ 
	    				$quiz_mid_score[$i][$y] = $quiz_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $quiz_mid_num; $y++) 
	    			{ 
	    				$quiz_mid_score[$i][$y] = "0.00";
	    			}
    			}

    			//---le_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Midterm');
    			$query_module = $this->db->get('mod_le');
    			$le_mid_num = $query_module->num_rows();
    			if ($le_mid_num > 0)
    			{
    				$le_items = $query_module->result_array();
	    			for ($x=0; $x < $le_mid_num; $x++) 
	    			{ 
	    				$le_mid_items[$x] = $le_items[$x]["LExamItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Midterm');
    			$query_le_score = $this->db->get('long_exam');
    			$le_mid_score_num = $query_le_score->num_rows();
    			if ($le_mid_score_num > 0)
    			{
    				$le_score = $query_le_score->result_array();
	    			for ($y=0; $y < $le_mid_num; $y++) 
	    			{ 
	    				$le_mid_score[$i][$y] = $le_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $le_mid_num; $y++) 
	    			{ 
	    				$le_mid_score[$i][$y] = "0.00";
	    			}
    			}

    			//---mexam_mid ---//
    			$this->db->where('ClassId',$block->Id);
    			$query_module = $this->db->get('mod_me');
    			$mexam_mid_num = $query_module->num_rows();
    			if ($mexam_mid_num > 0)
    			{
    				$mexam_items = $query_module->result_array();
	    			$mexam_mid_items[0] = $mexam_items[0]['MExamItems'];
    			}

    			$this->db->where('StudId',$row->Id);
    			$query_mexam_score = $this->db->get('midterm_exam');
    			$mexam_mid_score_num = $query_mexam_score->num_rows();
    			if ($mexam_mid_score_num > 0)
    			{
    				$mexam_score = $query_mexam_score->result_array();
	    			for ($y=0; $y < $mexam_mid_num; $y++) 
	    			{ 
	    				$mexam_mid_score[$i][$y] = $mexam_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $mexam_mid_num; $y++) 
	    			{ 
	    				$mexam_mid_score[$i][$y] = "0.00";
	    			}
    			}
				




				//---assign_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Finals');
    			$query_module = $this->db->get('mod_assign');
    			$assign_final_num = $query_module->num_rows();
    			if ($assign_final_num > 0)
    			{
    				$assign_items = $query_module->result_array();
	    			for ($x=0; $x < $assign_final_num; $x++) 
	    			{ 
	    				$assign_final_items[$x] = $assign_items[$x]["AssignItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Finals');
    			$query_assign_score = $this->db->get('assignment');
    			$assign_final_score_num = $query_assign_score->num_rows();
    			if ($assign_final_score_num > 0)
    			{
    				$assign_score = $query_assign_score->result_array();
	    			for ($y=0; $y < $assign_final_num; $y++) 
	    			{ 
	    				$assign_final_score[$i][$y] = $assign_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $assign_final_num; $y++) 
	    			{ 
	    				$assign_final_score[$i][$y] = "0.00";
	    			}
    			}

    			//---sw_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Finals');
    			$query_module = $this->db->get('mod_sw');
    			$sw_final_num = $query_module->num_rows();
    			if ($sw_final_num > 0)
    			{
    				$sw_items = $query_module->result_array();
	    			for ($x=0; $x < $sw_final_num; $x++) 
	    			{ 
	    				$sw_final_items[$x] = $sw_items[$x]["SWItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Finals');
    			$query_sw_score = $this->db->get('seatwork');
    			$sw_final_score_num = $query_sw_score->num_rows();
    			if ($sw_final_score_num > 0)
    			{
    				$sw_score = $query_sw_score->result_array();
	    			for ($y=0; $y < $sw_final_num; $y++) 
	    			{ 
	    				$sw_final_score[$i][$y] = $sw_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $sw_final_num; $y++) 
	    			{ 
	    				$sw_final_score[$i][$y] = "0.00";
	    			}
    			}

    			//---ex_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Finals');
    			$query_module = $this->db->get('mod_ex');
    			$ex_final_num = $query_module->num_rows();
    			if ($ex_final_num > 0)
    			{
    				$ex_items = $query_module->result_array();
	    			for ($x=0; $x < $ex_final_num; $x++) 
	    			{ 
	    				$ex_final_items[$x] = $ex_items[$x]["ExItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Finals');
    			$query_ex_score = $this->db->get('exercises');
    			$ex_final_score_num = $query_ex_score->num_rows();
    			if ($ex_final_score_num > 0)
    			{
    				$ex_score = $query_ex_score->result_array();
	    			for ($y=0; $y < $ex_final_num; $y++) 
	    			{ 
	    				$ex_final_score[$i][$y] = $ex_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $ex_final_num; $y++) 
	    			{ 
	    				$ex_final_score[$i][$y] = "0.00";
	    			}
    			}

    			//---rec_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Finals');
    			$query_module = $this->db->get('mod_rec');
    			$rec_final_num = $query_module->num_rows();
    			if ($rec_final_num > 0)
    			{
    				$rec_items = $query_module->result_array();
	    			for ($x=0; $x < $rec_final_num; $x++) 
	    			{ 
	    				$rec_final_items[$x] = $rec_items[$x]["RecItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Finals');
    			$query_rec_score = $this->db->get('recitation');
    			$rec_final_score_num = $query_rec_score->num_rows();
    			if ($rec_final_score_num > 0)
    			{
    				$rec_score = $query_rec_score->result_array();
	    			for ($y=0; $y < $rec_final_num; $y++) 
	    			{ 
	    				$rec_final_score[$i][$y] = $rec_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $rec_final_num; $y++) 
	    			{ 
	    				$rec_final_score[$i][$y] = "0.00";
	    			}
    			}

    			//---quiz_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Finals');
    			$query_module = $this->db->get('mod_quiz');
    			$quiz_final_num = $query_module->num_rows();
    			if ($quiz_final_num > 0)
    			{
    				$quiz_items = $query_module->result_array();
	    			for ($x=0; $x < $quiz_final_num; $x++) 
	    			{ 
	    				$quiz_final_items[$x] = $quiz_items[$x]["QuizItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Finals');
    			$query_quiz_score = $this->db->get('quizzes');
    			$quiz_final_score_num = $query_quiz_score->num_rows();
    			if ($quiz_final_score_num > 0)
    			{
    				$quiz_score = $query_quiz_score->result_array();
	    			for ($y=0; $y < $quiz_final_num; $y++) 
	    			{ 
	    				$quiz_final_score[$i][$y] = $quiz_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $quiz_final_num; $y++) 
	    			{ 
	    				$quiz_final_score[$i][$y] = "0.00";
	    			}
    			}

    			//---le_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$this->db->where('Sem','Finals');
    			$query_module = $this->db->get('mod_le');
    			$le_final_num = $query_module->num_rows();
    			if ($le_final_num > 0)
    			{
    				$le_items = $query_module->result_array();
	    			for ($x=0; $x < $le_final_num; $x++) 
	    			{ 
	    				$le_final_items[$x] = $le_items[$x]["LExamItems"];
	    			}
    			}

    			$this->db->where('StudId',$row->Id);
    			$this->db->where('Sem','Finals');
    			$query_le_score = $this->db->get('long_exam');
    			$le_final_score_num = $query_le_score->num_rows();
    			if ($le_final_score_num > 0)
    			{
    				$le_score = $query_le_score->result_array();
	    			for ($y=0; $y < $le_final_num; $y++) 
	    			{ 
	    				$le_final_score[$i][$y] = $le_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $le_final_num; $y++) 
	    			{ 
	    				$le_final_score[$i][$y] = "0.00";
	    			}
    			}

    			//---fexam_final ---//
    			$this->db->where('ClassId',$block->Id);
    			$query_module = $this->db->get('mod_fe');
    			$fexam_final_num = $query_module->num_rows();
    			if ($fexam_final_num > 0)
    			{
    				$fexam_items = $query_module->result_array();
	    			$fexam_final_items[0] = $fexam_items[0]['FExamItems'];
    			}

    			$this->db->where('StudId',$row->Id);
    			$query_fexam_score = $this->db->get('final_exam');
    			$fexam_final_score_num = $query_fexam_score->num_rows();
    			if ($fexam_final_score_num > 0)
    			{
    				$fexam_score = $query_fexam_score->result_array();
	    			for ($y=0; $y < $fexam_final_num; $y++) 
	    			{ 
	    				$fexam_final_score[$i][$y] = $fexam_score[$y]["Score"];
	    			}
    			}
    			else
    			{
    				for ($y=0; $y < $fexam_final_num; $y++) 
	    			{ 
	    				$fexam_final_score[$i][$y] = "0.00";
	    			}
    			}


                 //---att_mid ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Midterm');
                $query_module = $this->db->get('mod_att');
                $att_mid_num = $query_module->num_rows();
                if ($att_mid_num > 0)
                {
                    $att_items = $query_module->result_array();
                    for ($x=0; $x < $att_mid_num; $x++) 
                    { 
                        $date = date('M-d-Y',strtotime($att_items[$x]["AttDate"]));
                        $arr = explode('-', $date);
                        $converted_date = $this->getMonth($arr[0])." ".(int)$arr[1].", ".$arr[2];
                        $att_mid_items[$x] = $converted_date;
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Midterm');
                $query_att_score = $this->db->get('attendance');
                $att_mid_score_num = $query_att_score->num_rows();
                if ($att_mid_score_num > 0)
                {
                    $att_score = $query_att_score->result_array();
                    for ($y=0; $y < $att_mid_num; $y++) 
                    { 
                        $att_mid_score[$i][$y] = $att_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $att_mid_num; $y++) 
                    { 
                        $att_mid_score[$i][$y] = "0.00";
                    }
                }

                //---att_final ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Finals');
                $query_module = $this->db->get('mod_att');
                $att_final_num = $query_module->num_rows();
                if ($att_final_num > 0)
                {
                    $att_items = $query_module->result_array();
                    for ($x=0; $x < $att_final_num; $x++) 
                    { 
                        $date = date('M-d-Y',strtotime($att_items[$x]["AttDate"]));
                        $arr = explode('-', $date);
                        $converted_date = $this->getMonth($arr[0])." ".(int)$arr[1].", ".$arr[2];
                        $att_final_items[$x] = $converted_date;
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Finals');
                $query_att_score = $this->db->get('attendance');
                $att_final_score_num = $query_att_score->num_rows();
                if ($att_final_score_num > 0)
                {
                    $att_score = $query_att_score->result_array();
                    for ($y=0; $y < $att_final_num; $y++) 
                    { 
                        $att_final_score[$i][$y] = $att_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $att_final_num; $y++) 
                    { 
                        $att_final_score[$i][$y] = "0.00";
                    }
                }
    		}
            else if ($block->ModuleType == 'Lab')
            {
                //---lab_mid ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Midterm');
                $query_module = $this->db->get('mod_lab');
                $lab_mid_num = $query_module->num_rows();
                if ($lab_mid_num > 0)
                {
                    $lab_items = $query_module->result_array();
                    for ($x=0; $x < $lab_mid_num; $x++) 
                    { 
                        $lab_mid_items[$x] = $lab_items[$x]["LabItems"];
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Midterm');
                $query_lab_score = $this->db->get('lab_act');
                $lab_mid_score_num = $query_lab_score->num_rows();
                if ($lab_mid_score_num > 0)
                {
                    $lab_score = $query_lab_score->result_array();
                    for ($y=0; $y < $lab_mid_num; $y++) 
                    { 
                        $lab_mid_score[$i][$y] = $lab_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $lab_mid_num; $y++) 
                    { 
                        $lab_mid_score[$i][$y] = "0.00";
                    }
                }

                //---prac_mid ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Midterm');
                $query_module = $this->db->get('mod_prac');
                $prac_mid_num = $query_module->num_rows();
                if ($prac_mid_num > 0)
                {
                    $prac_items = $query_module->result_array();
                    for ($x=0; $x < $prac_mid_num; $x++) 
                    { 
                        $prac_mid_items[$x] = $prac_items[$x]["PracExamItems"];
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Midterm');
                $query_prac_score = $this->db->get('prac_exam');
                $prac_mid_score_num = $query_prac_score->num_rows();
                if ($prac_mid_score_num > 0)
                {
                    $prac_score = $query_prac_score->result_array();
                    for ($y=0; $y < $prac_mid_num; $y++) 
                    { 
                        $prac_mid_score[$i][$y] = $prac_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $prac_mid_num; $y++) 
                    { 
                        $prac_mid_score[$i][$y] = "0.00";
                    }
                }

                 //---proj_mid ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Midterm');
                $query_module = $this->db->get('mod_proj');
                $proj_mid_num = $query_module->num_rows();
                if ($proj_mid_num > 0)
                {
                    $proj_items = $query_module->result_array();
                    for ($x=0; $x < $proj_mid_num; $x++) 
                    { 
                        $proj_mid_items[$x] = $proj_items[$x]["ProjItems"];
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Midterm');
                $query_proj_score = $this->db->get('project');
                $proj_mid_score_num = $query_proj_score->num_rows();
                if ($proj_mid_score_num > 0)
                {
                    $proj_score = $query_proj_score->result_array();
                    for ($y=0; $y < $proj_mid_num; $y++) 
                    { 
                        $proj_mid_score[$i][$y] = $proj_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $proj_mid_num; $y++) 
                    { 
                        $proj_mid_score[$i][$y] = "0.00";
                    }
                }


                //---lab_final ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Finals');
                $query_module = $this->db->get('mod_lab');
                $lab_final_num = $query_module->num_rows();
                if ($lab_final_num > 0)
                {
                    $lab_items = $query_module->result_array();
                    for ($x=0; $x < $lab_final_num; $x++) 
                    { 
                        $lab_final_items[$x] = $lab_items[$x]["LabItems"];
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Finals');
                $query_lab_score = $this->db->get('lab_act');
                $lab_final_score_num = $query_lab_score->num_rows();
                if ($lab_final_score_num > 0)
                {
                    $lab_score = $query_lab_score->result_array();
                    for ($y=0; $y < $lab_final_num; $y++) 
                    { 
                        $lab_final_score[$i][$y] = $lab_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $lab_final_num; $y++) 
                    { 
                        $lab_final_score[$i][$y] = "0.00";
                    }
                }

                //---prac_final ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Finals');
                $query_module = $this->db->get('mod_prac');
                $prac_final_num = $query_module->num_rows();
                if ($prac_final_num > 0)
                {
                    $prac_items = $query_module->result_array();
                    for ($x=0; $x < $prac_final_num; $x++) 
                    { 
                        $prac_final_items[$x] = $prac_items[$x]["PracExamItems"];
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Finals');
                $query_prac_score = $this->db->get('prac_exam');
                $prac_final_score_num = $query_prac_score->num_rows();
                if ($prac_final_score_num > 0)
                {
                    $prac_score = $query_prac_score->result_array();
                    for ($y=0; $y < $prac_final_num; $y++) 
                    { 
                        $prac_final_score[$i][$y] = $prac_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $prac_final_num; $y++) 
                    { 
                        $prac_final_score[$i][$y] = "0.00";
                    }
                }

                 //---proj_final ---//
                $this->db->where('ClassId',$block->Id);
                $this->db->where('Sem','Finals');
                $query_module = $this->db->get('mod_proj');
                $proj_final_num = $query_module->num_rows();
                if ($proj_final_num > 0)
                {
                    $proj_items = $query_module->result_array();
                    for ($x=0; $x < $proj_final_num; $x++) 
                    { 
                        $proj_final_items[$x] = $proj_items[$x]["ProjItems"];
                    }
                }

                $this->db->where('StudId',$row->Id);
                $this->db->where('Sem','Finals');
                $query_proj_score = $this->db->get('project');
                $proj_final_score_num = $query_proj_score->num_rows();
                if ($proj_final_score_num > 0)
                {
                    $proj_score = $query_proj_score->result_array();
                    for ($y=0; $y < $proj_final_num; $y++) 
                    { 
                        $proj_final_score[$i][$y] = $proj_score[$y]["Score"];
                    }
                }
                else
                {
                    for ($y=0; $y < $proj_final_num; $y++) 
                    { 
                        $proj_final_score[$i][$y] = "0.00";
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
    		'quiz_mid_num' => $quiz_mid_num,
    		'quiz_mid_items' => $quiz_mid_items,
    		'quiz_mid_score' => $quiz_mid_score,
    		'le_mid_num' => $le_mid_num,
    		'le_mid_items' => $le_mid_items,
    		'le_mid_score' => $le_mid_score,
    		'mexam_mid_items' => $mexam_mid_items,
    		'mexam_mid_score' => $mexam_mid_score,
    		'assign_final_num' => $assign_final_num,
    		'assign_final_items' => $assign_final_items,
    		'assign_final_score' => $assign_final_score,
    		'sw_final_num' => $sw_final_num,
    		'sw_final_items' => $sw_final_items,
    		'sw_final_score' => $sw_final_score,
    		'ex_final_num' => $ex_final_num,
    		'ex_final_items' => $ex_final_items,
    		'ex_final_score' => $ex_final_score,
    		'rec_final_num' => $rec_final_num,
    		'rec_final_items' => $rec_final_items,
    		'rec_final_score' => $rec_final_score,
    		'quiz_final_num' => $quiz_final_num,
    		'quiz_final_items' => $quiz_final_items,
    		'quiz_final_score' => $quiz_final_score,
    		'le_final_num' => $le_final_num,
    		'le_final_items' => $le_final_items,
    		'le_final_score' => $le_final_score,
    		'fexam_final_items' => $fexam_final_items,
    		'fexam_final_score' => $fexam_final_score,
            'lab_mid_num' => $lab_mid_num,
            'lab_mid_items' => $lab_mid_items,
            'lab_mid_score' => $lab_mid_score,
            'prac_mid_num' => $prac_mid_num,
            'prac_mid_items' => $prac_mid_items,
            'prac_mid_score' => $prac_mid_score,
            'proj_mid_num' => $proj_mid_num,
            'proj_mid_items' => $proj_mid_items,
            'proj_mid_score' => $proj_mid_score,
            'lab_final_num' => $lab_final_num,
            'lab_final_items' => $lab_final_items,
            'lab_final_score' => $lab_final_score,
            'prac_final_num' => $prac_final_num,
            'prac_final_items' => $prac_final_items,
            'prac_final_score' => $prac_final_score,
            'proj_final_num' => $proj_final_num,
            'proj_final_items' => $proj_final_items,
            'proj_final_score' => $proj_final_score,
            'att_mid_num' => $att_mid_num,
            'att_mid_items' => $att_mid_items,
            'att_mid_score' => $att_mid_score,
            'att_final_num' => $att_final_num,
            'att_final_items' => $att_final_items,
            'att_final_score' => $att_final_score,
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
			for ($i=0; $i <$data['rec_mid_num'] ; $i++) { $arr[$i] = $rec_mid_data[$i]; } 
			$mid_final_len = sizeof($arr)+$data['rec_final_num'];
			for ($j=sizeof($arr),$k=0; $j < $mid_final_len; $j++,$k++) { $arr[$j] = $rec_final_data[$k];}
			$this->ModuleItems_model->ins_mod_rec($data['classId'],$arr,$data['rec_mid_num'],$data['rec_final_num'],$stud_id,$rec_mid_data,$rec_final_data);
			
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
		else if ($data['module'] == 'attendance')
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

    function export_class_table($ClassId,$filename)
    {
        // check if isuploaded = true;
        $this->db->where('Id',$ClassId);
        $qry = $this->db->get('class');
        $class = $qry->row();

        if ($class->IsUploaded)
        {

            return "You have already uploaded this file.";
        }
        else
        {
            // make isUploaded = true
            $date = getdate();
            $d = $date['year']."-".$date['mon']."-".$date['mday'];
            $obj = array(
        		'Filename' => $filename,
                'IsUploaded' => true,
                'DateUploaded' => $d, // get date today
                    
            );
            $this->db->where('Id', $ClassId);
            $this->db->update('class', $obj); 
            
            return "Class entry has been successfully recorded.";
        }

    }
	function get_stud_id($ClassId)
	{
		$this->db->select('Id')->from('students')->where('ClassId',$ClassId);
		$this->db->order_by('LName','asc');
		$query = $this->db->get();
		return $query->result_array();
	}

    function getMonth($mon)
    {
        if ($mon == "Jan") {
            return "January";
        }
        else if ($mon == "Feb") {
            return "February";
        }
        else if ($mon == "Mar") {
            return "March";
        }
        else if ($mon == "Apr") {
            return "April";
        }
        else if ($mon == "May") {
            return "May";
        }
        else if ($mon == "Jun") {
            return "June";
        }
        else if ($mon == "Jul") {
            return "July";
        }
        else if ($mon == "Aug") {
            return "August";
        }
        else if ($mon == "Sep") {
            return "September";
        }
        else if ($mon == "Oct") {
            return "October";
        }
        else if ($mon == "Nov") {
            return "November";
        }
        else if ($mon == "Dec") {
            return "December";
        }
        return "";
    }
}
?>
