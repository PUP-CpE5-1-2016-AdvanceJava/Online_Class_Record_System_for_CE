<?php
class Grades_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	function init_grades($stud_id)
	{
		$grades = array(
				'StudId' => $stud_id,
				'MidTermGrade' => 0,
				'FinalGrade' => 0,
				'TotalGrade' => 0,
		);
		$this->db->insert('grades',$grades);
	}

	function init_att($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$att = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$att[$i] = array(
				'StudId' => $stud_id,
				'AttNum' => 1,
				'Score' => '',
				'Sem' => 'Midterm'
			);

			$att[$i+1] = array(
				'StudId' => $stud_id,
				'AttNum' => 1,
				'Score' => '',
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('attendance', $att);
		return true;
	}

	function init_mod_att($ClassId)
	{
		
		$att[0] = array(
			'ClassId' => $ClassId,
			'AttNum' => 1,
			'Sem' => 'Midterm' 
		);
		$att[1] = array(
			'ClassId' => $ClassId,
			'AttNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_att', $att);
		return true;
	}

	function init_assign($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$assign = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$assign[$i] = array(
				'StudId' => $stud_id,
				'AssignNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$assign[$i+1] = array(
				'StudId' => $stud_id,
				'AssignNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('assignment', $assign);
		return true;
	}

	function init_mod_assign($ClassId)
	{
		
		$assign[0] = array(
			'ClassId' => $ClassId,
			'AssignNum' => 1,
			'Sem' => 'Midterm' 
		);
		$assign[1] = array(
			'ClassId' => $ClassId,
			'AssignNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_assign', $assign);
		return true;
	}

	function init_sw($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$sw = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$sw[$i] = array(
				'StudId' => $stud_id,
				'SWNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$sw[$i+1] = array(
				'StudId' => $stud_id,
				'SWNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('seatwork', $sw);
		return true;
	}

	function init_mod_sw($ClassId)
	{
		
		$sw[0] = array(
			'ClassId' => $ClassId,
			'SWNum' => 1,
			'Sem' => 'Midterm' 
		);
		$sw[1] = array(
			'ClassId' => $ClassId,
			'SWNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_sw', $sw);
		return true;
	}

	function init_ex($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$ex = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$ex[$i] = array(
				'StudId' => $stud_id,
				'ExNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$ex[$i+1] = array(
				'StudId' => $stud_id,
				'ExNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('exercises', $ex);
		return true;
	}

	function init_mod_ex($ClassId)
	{
		
		$ex[0] = array(
			'ClassId' => $ClassId,
			'ExNum' => 1,
			'Sem' => 'Midterm' 
		);
		$ex[1] = array(
			'ClassId' => $ClassId,
			'ExNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_ex', $ex);
		return true;
	}

	function init_rec($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$rec = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$rec[$i] = array(
				'StudId' => $stud_id,
				'RecNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$rec[$i+1] = array(
				'StudId' => $stud_id,
				'RecNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('recitation', $rec);
		return true;
	}

	function init_mod_rec($ClassId)
	{
		
		$rec[0] = array(
			'ClassId' => $ClassId,
			'RecNum' => 1,
			'Sem' => 'Midterm' 
		);
		$rec[1] = array(
			'ClassId' => $ClassId,
			'RecNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_rec', $rec);
		return true;
	}

	function init_quiz($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$quiz = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$quiz[$i] = array(
				'StudId' => $stud_id,
				'QuizNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$quiz[$i+1] = array(
				'StudId' => $stud_id,
				'QuizNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('quizzes', $quiz);
		return true;
	}

	function init_mod_quiz($ClassId)
	{
		
		$quiz[0] = array(
			'ClassId' => $ClassId,
			'QuizNum' => 1,
			'Sem' => 'Midterm' 
		);
		$quiz[1] = array(
			'ClassId' => $ClassId,
			'QuizNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_quiz', $quiz);
		return true;
	}

	function init_le($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$le = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$le[$i] = array(
				'StudId' => $stud_id,
				'LExamNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$le[$i+1] = array(
				'StudId' => $stud_id,
				'LExamNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('long_exam', $le);
		return true;
	}

	function init_mod_le($ClassId)
	{
		
		$le[0] = array(
			'ClassId' => $ClassId,
			'LExamNum' => 1,
			'Sem' => 'Midterm' 
		);
		$le[1] = array(
			'ClassId' => $ClassId,
			'LExamNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_le', $le);
		return true;
	}

	function init_lab($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$lab = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$lab[$i] = array(
				'StudId' => $stud_id,
				'LabNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$lab[$i+1] = array(
				'StudId' => $stud_id,
				'LabNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('lab_act', $lab);
		return true;
	}

	function init_mod_lab($ClassId)
	{
		
		$lab[0] = array(
			'ClassId' => $ClassId,
			'LabNum' => 1,
			'Sem' => 'Midterm' 
		);
		$lab[1] = array(
			'ClassId' => $ClassId,
			'LabNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_lab', $lab);
		return true;
	}

	function init_prac($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$prac = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$prac[$i] = array(
				'StudId' => $stud_id,
				'PracNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$prac[$i+1] = array(
				'StudId' => $stud_id,
				'PracNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('prac_exam', $prac);
		return true;
	}

	function init_mod_prac($ClassId)
	{
		
		$prac[0] = array(
			'ClassId' => $ClassId,
			'PracExamNum' => 1,
			'Sem' => 'Midterm' 
		);
		$prac[1] = array(
			'ClassId' => $ClassId,
			'PracExamNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_prac', $prac);
		return true;
	}

	function init_proj($stud_id,$num_students)
	{
		$length = $stud_id + $num_students*2;
		$proj = array();
		for ($i = $stud_id; $i < $length; $i+=2)
		{
			$proj[$i] = array(
				'StudId' => $stud_id,
				'ProjNum' => 1,
				'Score' => 0,
				'Sem' => 'Midterm'
			);

			$proj[$i+1] = array(
				'StudId' => $stud_id,
				'ProjNum' => 1,
				'Score' => 0,
				'Sem' => 'Finals'
			);
			$stud_id++;
		}

		$this->db->insert_batch('project', $proj);
		return true;
	}

	function init_mod_proj($ClassId)
	{
		
		$proj[0] = array(
			'ClassId' => $ClassId,
			'ProjNum' => 1,
			'Sem' => 'Midterm' 
		);
		$proj[1] = array(
			'ClassId' => $ClassId,
			'ProjNum' => 1,
			'Sem' => 'Finals' 
		);
		$this->db->insert_batch('mod_proj', $proj);
		return true;
	}

	function init_mexam($stud_id,$num_students)
	{
		$length = $stud_id + $num_students;
		$mexam = array();
		for ($i = $stud_id; $i < $length; $i++)
		{
			$mexam[$i] = array(
				'StudId' => $i,
				'Score' => 0,
			);
		}

		$this->db->insert_batch('midterm_exam', $mexam);
		return true;
	}

	function init_mod_me($ClassId)
	{
		
		$me = array(
			'ClassId' => $ClassId,
		);
		$this->db->insert('mod_me', $me);
		return true;
	}

	function init_fexam($stud_id,$num_students)
	{
		$length = $stud_id + $num_students;
		$fexam = array();
		for ($i = $stud_id; $i < $length; $i++)
		{
			$fexam[$i] = array(
				'StudId' => $i,
				'Score' => 0,
			);
		}

		$this->db->insert_batch('final_exam', $fexam);
		return true;
	}

	function init_mod_fe($ClassId)
	{
		
		$fe = array(
			'ClassId' => $ClassId,
		);
		$this->db->insert('mod_fe', $fe);
		return true;
	}
	
}
?>
