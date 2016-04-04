<?php
class ModuleScores_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	function save_mid_assign_score($assign_mid_num,$assign_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $assign_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $assign_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for assign1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('AssignNum',$x+1);
				$validate = $this->db->get('assignment');
				$score_ref_counter += $assign_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'AssignNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowAssign = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowAssign->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $assign_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for assign1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('AssignNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('assignment');
				$score_ref_counter += $assign_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'AssignNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowAssign = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowAssign->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('assignment', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('assignment', $obj_score_up,'Id');
		return true;
	}

	function save_mid_sw_score($sw_mid_num,$sw_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $sw_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $sw_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for sw1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('SWNum',$x+1);
				$validate = $this->db->get('seatwork');
				$score_ref_counter += $sw_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'SWNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowsw = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowsw->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $sw_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for sw1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('SWNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('seatwork');
				$score_ref_counter += $sw_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'SWNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowsw = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowsw->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('seatwork', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('seatwork', $obj_score_up,'Id');
		return true;
	}

	function save_mid_ex_score($ex_mid_num,$ex_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $ex_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $ex_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for ex1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('ExNum',$x+1);
				$validate = $this->db->get('exercises');
				$score_ref_counter += $ex_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'ExNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowex = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowex->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $ex_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for ex1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('ExNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('exercises');
				$score_ref_counter += $ex_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'ExNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowex = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowex->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('exercises', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('exercises', $obj_score_up,'Id');
		return true;
	}

	function save_mid_rec_score($rec_mid_num,$rec_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $rec_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $rec_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for rec1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('RecNum',$x+1);
				$validate = $this->db->get('recitation');
				$score_ref_counter += $rec_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'RecNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowrec = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowrec->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $rec_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for rec1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('RecNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('recitation');
				$score_ref_counter += $rec_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'RecNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowrec = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowrec->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('recitation', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('recitation', $obj_score_up,'Id');
		return true;
	}

	function save_mid_quiz_score($quiz_mid_num,$quiz_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $quiz_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $quiz_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for quiz1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('QuizNum',$x+1);
				$validate = $this->db->get('quizzes');
				$score_ref_counter += $quiz_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'QuizNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowquiz = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowquiz->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $quiz_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for quiz1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('QuizNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('quizzes');
				$score_ref_counter += $quiz_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'QuizNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowquiz = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowquiz->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('quizzes', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('quizzes', $obj_score_up,'Id');
		return true;
	}

	function save_mid_le_score($le_mid_num,$le_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $le_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $le_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for le1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('LExamNum',$x+1);
				$validate = $this->db->get('long_exam');
				$score_ref_counter += $le_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'LExamNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowle = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowle->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $le_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for le1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('LExamNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('long_exam');
				$score_ref_counter += $le_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'LExamNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowle = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowle->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('long_exam', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('long_exam', $obj_score_up,'Id');
		return true;
	}

	function save_mid_lab_score($lab_mid_num,$lab_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $lab_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $lab_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for lab1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('LabNum',$x+1);
				$validate = $this->db->get('lab_act');
				$score_ref_counter += $lab_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'LabNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowlab = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowlab->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $lab_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for lab1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('LabNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('lab_act');
				$score_ref_counter += $lab_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'LabNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowlab = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowlab->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('lab_act', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('lab_act', $obj_score_up,'Id');
		return true;
	}

	function save_mid_prac_score($prac_mid_num,$prac_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $prac_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $prac_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for prac1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('PracNum',$x+1);
				$validate = $this->db->get('prac_exam');
				$score_ref_counter += $prac_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'PracNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowprac = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowprac->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $prac_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for prac1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('PracNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('prac_exam');
				$score_ref_counter += $prac_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'PracNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowprac = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowprac->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('prac_exam', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('prac_exam', $obj_score_up,'Id');
		return true;
	}

	function save_mid_proj_score($proj_mid_num,$proj_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $proj_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $proj_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for proj1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('ProjNum',$x+1);
				$validate = $this->db->get('project');
				$score_ref_counter += $proj_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'ProjNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowproj = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowproj->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $proj_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for proj1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('ProjNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('project');
				$score_ref_counter += $proj_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'ProjNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowproj = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowproj->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('project', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('project', $obj_score_up,'Id');
		return true;
	}

	function save_mid_att_score($att_mid_num,$att_final_num,$stud_id,$data_mid,$data_final)
	{
		/* GET THE SCORES*/
		// for loop < $att_mid_num
		$obj_score_ins = array();
		$obj_score_up = array();
		$index = 0;
		for ($x = 0; $x < $att_mid_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for att1 to insert_batch or update
			$index = $x*sizeof($stud_id);
			for ($y = 0; $y < sizeof($stud_id); $y++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('Sem','Midterm');
				$this->db->where('AttNum',$x+1);
				$validate = $this->db->get('attendance');
				$score_ref_counter += $att_mid_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$y+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'AttNum' => $x+1,
						'Score' => floatval($data_mid[$score_ref_counter]),	
						'Sem' => 'Midterm',
					);	
				}
				else
				{
					$rowatt = $validate->row();
					$obj_score_up[$y+$index] = array(
						'Id' => $rowatt->Id,
						'Score' => floatval($data_mid[$score_ref_counter]),
					);
				}
			}
		}
		for ($x = 0; $x < $att_final_num; $x++)
		{
			$score_ref_counter = $x;
			// for loop for att1 to insert_batch or update
			$index = ($x*sizeof($stud_id)) + (sizeof($obj_score_ins)+sizeof($obj_score_up));
			for ($y = 0,$k = sizeof($obj_score_up) + sizeof($obj_score_ins); $y < sizeof($stud_id); $y++,$k++)
			{
				$this->db->where('StudId',$stud_id[$y]['Id']);
				$this->db->where('AttNum',$x+1);
				$this->db->where('Sem','Finals');
				$validate = $this->db->get('attendance');
				$score_ref_counter += $att_final_num;
				// if condition Num(i) no entry then insert to array scores else update
				if ($validate->num_rows()<=0)
				{
					$obj_score_ins[$k+$index] = array(
						'StudId' => $stud_id[$y]['Id'],
						'AttNum' => $x+1,
						'Score' => floatval($data_final[$score_ref_counter]),	
						'Sem' => 'Finals',
					);	
				}
				else
				{
					$rowatt = $validate->row();
					$obj_score_up[$k+$index] = array(
						'Id' => $rowatt->Id,
						'Score' => floatval($data_final[$score_ref_counter]),
					);
				}
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('attendance', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('attendance', $obj_score_up,'Id');
		return true;
	}

	function save_mid_major_score($stud_id,$data_mid,$data_final)
	{
		/*---SAVING MIDTERM SCORES OF STUDENTS---*/
		$obj_score_ins = array();
		$obj_score_up = array();
		// for loop for att1 to insert_batch or update
		for ($y = 0; $y < sizeof($stud_id); $y++)
		{
			$this->db->where('StudId',$stud_id[$y]['Id']);
			$validate = $this->db->get('midterm_exam');
			if ($validate->num_rows()<=0)
			{
				$obj_score_ins[$y] = array(
					'StudId' => $stud_id[$y]['Id'],
					'Score' => floatval($data_mid[$y+1]),	
				);
			}
			else
			{
				$rowMid = $validate->row();
				$obj_score_up[$y] = array(
					'Id' => $rowMid->Id,
					'Score' => floatval($data_mid[$y+1]),
				);
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('midterm_exam', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('midterm_exam', $obj_score_up,'Id');

		/*---SAVING FINALS SCORES OF STUDENTS---*/
		$obj_score_ins = array();
		$obj_score_up = array();
		// for loop for att1 to insert_batch or update
		for ($z = 0; $z < sizeof($stud_id); $z++)
		{
			$this->db->where('StudId',$stud_id[$z]['Id']);
			$validate = $this->db->get('final_exam');
			if ($validate->num_rows()<=0)
			{
				$obj_score_ins[$z] = array(
					'StudId' => $stud_id[$z]['Id'],
					'Score' => floatval($data_final[$z+1]),	
				);
			}
			else
			{
				$rowMid = $validate->row();
				$obj_score_up[$z] = array(
					'Id' => $rowMid->Id,
					'Score' => floatval($data_final[$z+1]),
				);
			}
		}
		if (sizeof($obj_score_ins) > 0) $this->db->insert_batch('final_exam', $obj_score_ins);
		if (sizeof($obj_score_up) > 0) $this->db->update_batch('final_exam', $obj_score_up,'Id');

		return true;
	}
}
?>
