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
		return $this->db->insert_id();
	}

	function init_att($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$att = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$att[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$att[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('attendance', $att);
		return true;
	}

	function init_assign($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$assign = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$assign[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$assign[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('assignment', $assign);
		return true;
	}

	function init_sw($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$sw = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$sw[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$sw[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('seatwork', $sw);
		return true;
	}

	function init_ex($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$ex = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$ex[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$ex[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('exercises', $ex);
		return true;
	}

	function init_rec($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$rec = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$rec[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$rec[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('recitation', $rec);
		return true;
	}	

	function init_quiz($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$quiz = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$quiz[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$quiz[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('quizzes', $quiz);
		return true;
	}

	function init_le($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$le = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$le[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$le[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('long_exam', $le);
		return true;
	}

	function init_lab($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$lab = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$lab[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$lab[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('lab_act', $lab);
		return true;
	}

	function init_prac($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$prac = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$prac[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$prac[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('prac_exam', $prac);
		return true;
	}

	function init_proj($grades_id,$num_students)
	{
		$length = $grades_id + $num_students*2;
		$proj = array();
		for ($i = $grades_id; $i < $length; $i+=2)
		{
			$proj[$i] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Midterm'
			);

			$proj[$i+1] = array(
				'StudGradeId' => $grades_id,
				'Score' => 0,
				'Rating' => 0,
				'Sem' => 'Finals'
			);
			$grades_id++;
		}

		$this->db->insert_batch('project', $proj);
		return true;
	}

	function init_mexam($grades_id,$num_students)
	{
		$length = $grades_id + $num_students;
		$mexam = array();
		for ($i = $grades_id; $i < $length; $i++)
		{
			$mexam[$i] = array(
				'StudGradeId' => $i,
				'Score' => 0,
				'Rating' => 0,
			);
		}

		$this->db->insert_batch('midterm_exam', $mexam);
		return true;
	}

	function init_fexam($grades_id,$num_students)
	{
		$length = $grades_id + $num_students;
		$fexam = array();
		for ($i = $grades_id; $i < $length; $i++)
		{
			$fexam[$i] = array(
				'StudGradeId' => $i,
				'Score' => 0,
				'Rating' => 0,
			);
		}

		$this->db->insert_batch('final_exam', $fexam);
		return true;
	}
	
}
?>
