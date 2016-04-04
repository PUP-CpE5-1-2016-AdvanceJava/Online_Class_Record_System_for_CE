<?php
class ModuleItems_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('ModuleScores_model');
	}

	function ins_mod_assign($ClassId,$data,$assign_mid_num,$assign_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_assign_ins = array();
		$mod_assign_up = array();
		$update_counter = 0;
		for ($i=0; $i < $assign_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'AssignNum' => $i+1,
				'AssignItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('AssignNum',$i+1);
			$validate = $this->db->get('mod_assign');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_assign_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowAssign = $validate->row();
				$obj = array(
					'Id' => $rowAssign->Id,
					'AssignItems' => $data[$i],
				);
				$mod_assign_up[$i] = $obj;
				// $this->db->where('Id', $rowAssign->Id);
				// $this->db->update('mod_assign', $obj);
				$update_counter++;
			}
		}
		$mid_final_len = sizeof($mod_assign_ins)+$assign_final_num+$update_counter;
		for ($j=sizeof($mod_assign_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'AssignNum' => $k+1,
				'AssignItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('AssignNum',$k+1);
			$validate = $this->db->get('mod_assign');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_assign_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowAssign = $validate->row();
				$obj = array(
					'Id' => $rowAssign->Id,
					'AssignItems' => $data[$j],
				);
				$mod_assign_up[$j] = $obj;
				// $this->db->where('Id', $rowAssign->Id);
				// $this->db->update('mod_assign', $obj);
			}
		}
		if (sizeof($mod_assign_ins) > 0) $this->db->insert_batch('mod_assign', $mod_assign_ins);
		if (sizeof($mod_assign_up) > 0) $this->db->update_batch('mod_assign', $mod_assign_up,'Id');
		$this->ModuleScores_model->save_mid_assign_score($assign_mid_num,$assign_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_sw($ClassId,$data,$sw_mid_num,$sw_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_sw_ins = array();
		$mod_sw_up = array();
		$update_counter = 0;
		for ($i=0; $i < $sw_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'SWNum' => $i+1,
				'SWItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('SWNum',$i+1);
			$validate = $this->db->get('mod_sw');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_sw_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowsw = $validate->row();
				$obj = array(
					'Id' => $rowsw->Id,
					'SWItems' => $data[$i],
				);
				$mod_sw_up[$i] = $obj;
				// $this->db->where('Id', $rowsw->Id);
				// $this->db->update('mod_sw', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $sw_mid_num
				// for loop for sw1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for sw2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on sw num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_sw_ins)+$sw_final_num+$update_counter;
		for ($j=sizeof($mod_sw_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'SWNum' => $k+1,
				'SWItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('SWNum',$k+1);
			$validate = $this->db->get('mod_sw');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_sw_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowsw = $validate->row();
				$obj = array(
					'Id' => $rowsw->Id,
					'SWItems' => $data[$j],
				);
				$mod_sw_up[$j] = $obj;
				// $this->db->where('Id', $rowsw->Id);
				// $this->db->update('mod_sw', $obj);
			}
		}
		if (sizeof($mod_sw_ins) > 0) $this->db->insert_batch('mod_sw', $mod_sw_ins);
		if (sizeof($mod_sw_up) > 0) $this->db->update_batch('mod_sw', $mod_sw_up,'Id');
		$this->ModuleScores_model->save_mid_sw_score($sw_mid_num,$sw_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_ex($ClassId,$data,$ex_mid_num,$ex_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_ex_ins = array();
		$mod_ex_up = array();
		$update_counter = 0;
		for ($i=0; $i < $ex_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'ExNum' => $i+1,
				'ExItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('ExNum',$i+1);
			$validate = $this->db->get('mod_ex');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_ex_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowex = $validate->row();
				$obj = array(
					'Id' => $rowex->Id,
					'ExItems' => $data[$i],
				);
				$mod_ex_up[$i] = $obj;
				// $this->db->where('Id', $rowex->Id);
				// $this->db->update('mod_ex', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $ex_mid_num
				// for loop for ex1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for ex2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on ex num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_ex_ins)+$ex_final_num+$update_counter;
		for ($j=sizeof($mod_ex_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'ExNum' => $k+1,
				'ExItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('ExNum',$k+1);
			$validate = $this->db->get('mod_ex');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_ex_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowex = $validate->row();
				$obj = array(
					'Id' => $rowex->Id,
					'ExItems' => $data[$j],
				);
				$mod_ex_up[$j] = $obj;
				// $this->db->where('Id', $rowex->Id);
				// $this->db->update('mod_ex', $obj);
			}
		}
		if (sizeof($mod_ex_ins) > 0) $this->db->insert_batch('mod_ex', $mod_ex_ins);
		if (sizeof($mod_ex_up) > 0) $this->db->update_batch('mod_ex', $mod_ex_up,'Id');
		$this->ModuleScores_model->save_mid_ex_score($ex_mid_num,$ex_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_rec($ClassId,$data,$rec_mid_num,$rec_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_rec_ins = array();
		$mod_rec_up = array();
		$update_counter = 0;
		for ($i=0; $i < $rec_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'RecNum' => $i+1,
				'RecItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('RecNum',$i+1);
			$validate = $this->db->get('mod_rec');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_rec_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowrec = $validate->row();
				$obj = array(
					'Id' => $rowrec->Id,
					'RecItems' => $data[$i],
				);
				$mod_rec_up[$i] = $obj;
				// $this->db->where('Id', $rowrec->Id);
				// $this->db->update('mod_rec', $obj);
				$update_counter++;
			}
		}
		$mid_final_len = sizeof($mod_rec_ins)+$rec_final_num+$update_counter;
		for ($j=sizeof($mod_rec_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'RecNum' => $k+1,
				'RecItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('RecNum',$k+1);
			$validate = $this->db->get('mod_rec');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_rec_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowrec = $validate->row();
				$obj = array(
					'Id' => $rowrec->Id,
					'RecItems' => $data[$j],
				);
				$mod_rec_up[$j] = $obj;
				// $this->db->where('Id', $rowrec->Id);
				// $this->db->update('mod_rec', $obj);
			}
		}
		if (sizeof($mod_rec_ins) > 0) $this->db->insert_batch('mod_rec', $mod_rec_ins);
		if (sizeof($mod_rec_up) > 0) $this->db->update_batch('mod_rec', $mod_rec_up,'Id');
		$this->ModuleScores_model->save_mid_rec_score($rec_mid_num,$rec_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_quiz($ClassId,$data,$quiz_mid_num,$quiz_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_quiz_ins = array();
		$mod_quiz_up = array();
		$update_counter = 0;
		for ($i=0; $i < $quiz_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'QuizNum' => $i+1,
				'QuizItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('QuizNum',$i+1);
			$validate = $this->db->get('mod_quiz');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_quiz_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowquiz = $validate->row();
				$obj = array(
					'Id' => $rowquiz->Id,
					'QuizItems' => $data[$i],
				);
				$mod_quiz_up[$i] = $obj;
				// $this->db->where('Id', $rowquiz->Id);
				// $this->db->update('mod_quiz', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $quiz_mid_num
				// for loop for quiz1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for quiz2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on quiz num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_quiz_ins)+$quiz_final_num+$update_counter;
		for ($j=sizeof($mod_quiz_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'QuizNum' => $k+1,
				'QuizItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('QuizNum',$k+1);
			$validate = $this->db->get('mod_quiz');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_quiz_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowquiz = $validate->row();
				$obj = array(
					'Id' => $rowquiz->Id,
					'QuizItems' => $data[$j],
				);
				$mod_quiz_up[$j] = $obj;
				// $this->db->where('Id', $rowquiz->Id);
				// $this->db->update('mod_quiz', $obj);
			}
		}
		if (sizeof($mod_quiz_ins) > 0) $this->db->insert_batch('mod_quiz', $mod_quiz_ins);
		if (sizeof($mod_quiz_up) > 0) $this->db->update_batch('mod_quiz', $mod_quiz_up,'Id');
		$this->ModuleScores_model->save_mid_quiz_score($quiz_mid_num,$quiz_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_le($ClassId,$data,$le_mid_num,$le_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_le_ins = array();
		$mod_le_up = array();
		$update_counter = 0;
		for ($i=0; $i < $le_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'LExamNum' => $i+1,
				'LExamItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('LExamNum',$i+1);
			$validate = $this->db->get('mod_le');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_le_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowle = $validate->row();
				$obj = array(
					'Id' => $rowle->Id,
					'LExamItems' => $data[$i],
				);
				$mod_le_up[$i] = $obj;
				// $this->db->where('Id', $rowle->Id);
				// $this->db->update('mod_le', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $le_mid_num
				// for loop for le1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for le2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on le num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_le_ins)+$le_final_num+$update_counter;
		for ($j=sizeof($mod_le_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'LExamNum' => $k+1,
				'LExamItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('LExamNum',$k+1);
			$validate = $this->db->get('mod_le');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_le_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowle = $validate->row();
				$obj = array(
					'Id' => $rowle->Id,
					'LExamItems' => $data[$j],
				);
				$mod_le_up[$j] = $obj;
				// $this->db->where('Id', $rowle->Id);
				// $this->db->update('mod_le', $obj);
			}
		}
		if (sizeof($mod_le_ins) > 0) $this->db->insert_batch('mod_le', $mod_le_ins);
		if (sizeof($mod_le_up) > 0) $this->db->update_batch('mod_le', $mod_le_up,'Id');
		$this->ModuleScores_model->save_mid_le_score($le_mid_num,$le_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_major($ClassId,$mid_items,$final_items,$stud_id,$data_mid,$data_final)
	{
		$obj_mid = array(
			'ClassId' => $ClassId,
			'MExamItems' => $mid_items,
		);
		$this->db->where('ClassId',$ClassId);
		$validate = $this->db->get('mod_me');
		if ($validate->num_rows()<=0)
		{
			$this->db->insert('mod_me',$obj_mid);
		}
		else 
		{
			$rowme = $validate->row();
			$this->db->where('Id', $rowme->Id);
			$this->db->update('mod_me', $obj_mid);
		}

		$obj_final = array(
			'ClassId' => $ClassId,
			'FExamItems' => $final_items,
		);
		$this->db->where('ClassId',$ClassId);
		$validate = $this->db->get('mod_fe');
		if ($validate->num_rows()<=0)
		{
			$this->db->insert('mod_fe',$obj_final);
		}
		else 
		{
			$rowfe = $validate->row();
			$this->db->where('Id', $rowfe->Id);
			$this->db->update('mod_fe', $obj_final);
		}
		$this->ModuleScores_model->save_mid_major_score($stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_lab($ClassId,$data,$lab_mid_num,$lab_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_lab_ins = array();
		$mod_lab_up = array();
		$update_counter = 0;
		for ($i=0; $i < $lab_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'LabNum' => $i+1,
				'LabItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('LabNum',$i+1);
			$validate = $this->db->get('mod_lab');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_lab_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowlab = $validate->row();
				$obj = array(
					'Id' => $rowlab->Id,
					'LabItems' => $data[$i],
				);
				$mod_lab_up[$i] = $obj;
				// $this->db->where('Id', $rowlab->Id);
				// $this->db->update('mod_lab', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $lab_mid_num
				// for loop for lab1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for lab2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on lab num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_lab_ins)+$lab_final_num+$update_counter;
		for ($j=sizeof($mod_lab_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'LabNum' => $k+1,
				'LabItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('LabNum',$k+1);
			$validate = $this->db->get('mod_lab');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_lab_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowlab = $validate->row();
				$obj = array(
					'Id' => $rowlab->Id,
					'LabItems' => $data[$j],
				);
				$mod_lab_up[$j] = $obj;
				// $this->db->where('Id', $rowlab->Id);
				// $this->db->update('mod_lab', $obj);
			}
		}
		if (sizeof($mod_lab_ins) > 0) $this->db->insert_batch('mod_lab', $mod_lab_ins);
		if (sizeof($mod_lab_up) > 0) $this->db->update_batch('mod_lab', $mod_lab_up,'Id');
		$this->ModuleScores_model->save_mid_lab_score($lab_mid_num,$lab_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_prac($ClassId,$data,$prac_mid_num,$prac_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_prac_ins = array();
		$mod_prac_up = array();
		$update_counter = 0;
		for ($i=0; $i < $prac_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'PracExamNum' => $i+1,
				'PracExamItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('PracExamNum',$i+1);
			$validate = $this->db->get('mod_prac');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_prac_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowprac = $validate->row();
				$obj = array(
					'Id' => $rowprac->Id,
					'PracExamItems' => $data[$i],
				);
				$mod_prac_up[$i] = $obj;
				// $this->db->where('Id', $rowprac->Id);
				// $this->db->update('mod_prac', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $prac_mid_num
				// for loop for prac1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for prac2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on prac num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_prac_ins)+$prac_final_num+$update_counter;
		for ($j=sizeof($mod_prac_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'PracExamNum' => $k+1,
				'PracExamItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('PracExamNum',$k+1);
			$validate = $this->db->get('mod_prac');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_prac_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowprac = $validate->row();
				$obj = array(
					'Id' => $rowprac->Id,
					'PracExamItems' => $data[$j],
				);
				$mod_prac_up[$j] = $obj;
				// $this->db->where('Id', $rowprac->Id);
				// $this->db->update('mod_prac', $obj);
			}
		}
		if (sizeof($mod_prac_ins) > 0) $this->db->insert_batch('mod_prac', $mod_prac_ins);
		if (sizeof($mod_prac_up) > 0) $this->db->update_batch('mod_prac', $mod_prac_up,'Id');
		$this->ModuleScores_model->save_mid_prac_score($prac_mid_num,$prac_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_proj($ClassId,$data,$proj_mid_num,$proj_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_proj_ins = array();
		$mod_proj_up = array();
		$update_counter = 0;
		for ($i=0; $i < $proj_mid_num; $i++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'ProjNum' => $i+1,
				'ProjItems' => $data[$i],
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('ProjNum',$i+1);
			$validate = $this->db->get('mod_proj');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_proj_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowproj = $validate->row();
				$obj = array(
					'Id' => $rowproj->Id,
					'ProjItems' => $data[$i],
				);
				$mod_proj_up[$i] = $obj;
				// $this->db->where('Id', $rowproj->Id);
				// $this->db->update('mod_proj', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $proj_mid_num
				// for loop for proj1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for proj2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on proj num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_proj_ins)+$proj_final_num+$update_counter;
		for ($j=sizeof($mod_proj_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$obj = array(
				'ClassId' => $ClassId,
				'ProjNum' => $k+1,
				'ProjItems' => $data[$j],
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('ProjNum',$k+1);
			$validate = $this->db->get('mod_proj');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_proj_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowproj = $validate->row();
				$obj = array(
					'Id' => $rowproj->Id,
					'ProjItems' => $data[$j],
				);
				$mod_proj_up[$j] = $obj;
				// $this->db->where('Id', $rowproj->Id);
				// $this->db->update('mod_proj', $obj);
			}
		}
		if (sizeof($mod_proj_ins) > 0) $this->db->insert_batch('mod_proj', $mod_proj_ins);
		if (sizeof($mod_proj_up) > 0) $this->db->update_batch('mod_proj', $mod_proj_up,'Id');
		$this->ModuleScores_model->save_mid_proj_score($proj_mid_num,$proj_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}

	function ins_mod_att($ClassId,$data,$att_mid_num,$att_final_num,$stud_id,$data_mid,$data_final)
	{
		$mod_att_ins = array();
		$mod_att_up = array();
		$update_counter = 0;
		for ($i=0; $i < $att_mid_num; $i++) 
		{ 
			$date = date('Y-m-d', strtotime($data[$i]));
			$obj = array(
				'ClassId' => $ClassId,
				'AttNum' => $i+1,
				'AttDate' => $date,
				'Sem' => 'Midterm',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Midterm');
			$this->db->where('AttNum',$i+1);
			$validate = $this->db->get('mod_att');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_att_ins[$i] = $obj;
			}
			else 
			{
				// else if already have entry just update (we will use update_batch)
				$rowatt = $validate->row();
				$obj = array(
					'Id' => $rowatt->Id,
					'AttDate' => $date,
				);
				$mod_att_up[$i] = $obj;
				// $this->db->where('Id', $rowatt->Id);
				// $this->db->update('mod_att', $obj);
				$update_counter++;
			}
			/* GET THE SCORES*/
			// for loop < $att_mid_num
				// for loop for att1 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// for loop for att2 to insert_batch or update
					// if condition Num(i) no entry then insert to array scores else update
					// needs StudNum(to get StudId)
				// ... until all entry based on att num has already inserted or updated
		}
		$mid_final_len = sizeof($mod_att_ins)+$att_final_num+$update_counter;
		for ($j=sizeof($mod_att_ins)+$update_counter,$k=0; $j < $mid_final_len; $j++,$k++) 
		{ 
			$date = date('Y-m-d', strtotime($data[$j]));
			$obj = array(
				'ClassId' => $ClassId,
				'AttNum' => $k+1,
				'AttDate' => $date,
				'Sem' => 'Finals',
			);

			$this->db->where('ClassId',$ClassId);
			$this->db->where('Sem','Finals');
			$this->db->where('AttNum',$k+1);
			$validate = $this->db->get('mod_att');
			if ($validate->num_rows()<=0)
			{
				// if none add to array to be inserted
				$mod_att_ins[$j] = $obj;
			}
			else 
			{
				// else if already have entry just update
				$rowatt = $validate->row();
				$obj = array(
					'Id' => $rowatt->Id,
					'AttDate' => $date,
				);
				$mod_att_up[$j] = $obj;
				// $this->db->where('Id', $rowatt->Id);
				// $this->db->update('mod_att', $obj);
			}
		}
		if (sizeof($mod_att_ins) > 0) $this->db->insert_batch('mod_att', $mod_att_ins);
		if (sizeof($mod_att_up) > 0) $this->db->update_batch('mod_att', $mod_att_up,'Id');
		$this->ModuleScores_model->save_mid_att_score($att_mid_num,$att_final_num,$stud_id,$data_mid,$data_final);
		return true;
	}
}
?>
