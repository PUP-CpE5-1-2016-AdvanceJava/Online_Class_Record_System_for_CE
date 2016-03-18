<?php

class Table_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
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
			'ClassId' => $block->Id
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
		$query = $this->db->get();

		if (!$query->num_rows() > 0) {
        	// die("There are no students in the database.");
        	return;
    	}

    	$i = 0;
    	foreach ($query->result() as $row) 
    	{	
    		// combine to make full name and to capital first letter of each name
    		$full_name = ucwords($row->LName).', '.ucwords($row->FName).' '.ucwords($row->MName);
    		$stud[$i] = array(
    			'full_name' => $full_name, 
    			'stud_num' => $row->StudentNumber,
    		);
    		$i++;
    	}
    	
    	// justin code
		switch ($block->ModuleType)
		{
			case 'Lec':
				$tables = array( 'assignment', 'seatwork','exercises','recitation','quizzes','long_exam', 'midterm_exam', 'final_exam');
				break;
			case 'Lab':
				$tables = array( 'lab_act', 'prac_exam', 'project', 'midterm_exam', 'final_exam' );
				break;
			case 'attendance_table':
				$tables = array( 'attendance' );
				break;
			default:
				exit ('Invalid Input');
		}
		
		// comment this out when you test the app
		foreach ($tables as $table)
		{
			$sql = "SELECT * FROM $table WHERE StudGradeId IN (SELECT Id from grades WHERE grades.StudId IN (SELECT Id FROM students  WHERE ClassId = ?))"
			$query = $this->db->query($sql, $ClassId);
			
			// do stuff with the result
		}
    	
    	$data = array(
    		'Class' => $class,
    		'Subject' => $subject,
    		'Student' => $stud,
    		'Module' => $module,
    	);
    	return $data;
	}
	
		
	function save_table_data()
	{
		foreach ($_SESSION['table_data'] as $student_grades)
		{
			// collect post data
			$type = $student_grades['tableType'];
			$data = $student_grades['tableData'];
			$class_id = $student_grades['tableId'];
			$table_format = $student_grades['tableFormat'];
			
			// set some variables according to the type of table
			switch ($type)
			{
				case 'Lec':
					$tables = array( 'assignment', 'seatwork','exercises','recitation','quizzes','long_exam', 'midterm_exam', 'final_exam');
					break;
				case 'Lab':
					$tables = array( 'lab_act', 'prac_exam', 'project', 'midterm_exam', 'final_exam' );
					break;
				case 'attendance_table':
					$tables = array( 'attendance' );
					break;
				default:
					exit ('Invalid Input');
			}

			// get id from student table to identify the student on grades table
			$sql = "SELECT Id FROM students WHERE StudentNumber = ? AND ClassId = ?";
			$query = $this->db->query($sql, array($data['id'], $class_id));
			
			if ($query->num_rows() > 0)
			{
			   $row = $query->row();
			   $query->free_result();
			}
			else exit ('No Student');
			
			// get id from grades table that serves as the key on the module tables
			$sql = "SELECT Id FROM grades WHERE StudId = ?";
			$query = $this->db->query($sql, $row->Id);
			
			
			$total_grade = ($data['grades']['mt_mt_rating'] + $data['grades']['ft_ft_rating']) / 2;
			if ($query->num_rows() > 0)
			{
				$row = $query->row();
				$query->free_result();
				
				// delete previous records in the appropriate tables
				foreach ($tables as $table)
				{
					$this->db->query("DELETE FROM $table WHERE StudGradeId = ?", $row->Id);
				}
				
				// update the existing record
				if ($type != 'attendance_table')
				{
					$sql = "UPDATE grades SET MidTermGrade = ?, FinalGrade = ?, TotalGrade = ? WHERE StudId = ?";
					$input_array = array( $data['grades']['mt_mt_rating'], $data['grades']['ft_ft_rating'], $total_grade, $row->Id );
					$this->db->query($sql, $input_array);
				}
			}
			else
			{
				if ($type != 'attendance_table')
				{
					// create the entry
					$sql = "INSERT INTO grades (MidTermGrade, FinalGrade, TotalGrade, StudId) VALUES (?, ?, ?, ?)";
					$input_array = array( $data['grades']['mt_mt_rating'], $data['grades']['ft_ft_rating'], $total_grade, $row->Id );
					$this->db->query($sql, $input_array);
					
					// get the resulting id
					$sql = "SELECT Id FROM grades WHERE StudId = ?";
					$query = $this->db->query($sql, $row->Id);
					$row = $query->row();
				}
			}
			
			
			
			$i = 0;
			$num_of_items = count($table_format);
			$input_array = array();
			$rating = FALSE;
			$do_query = FALSE;
			
			// record each data into the appropriate table
			foreach ($data['grades'] as $grade)	
			{
				if (stripos($table_format[$i], 'mt') !== FALSE)  // MIDTERM GRADES
				{
					if ($type == 'Lec')
					{
						if (stripos($table_format[$i], 'mt_cs_assign') !== FALSE)
						{
							$sql = "INSERT INTO assignment (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_cs_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_cs_sw') !== FALSE)
						{	
							$sql = "INSERT INTO seatwork (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_cs_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_cs_ex') !== FALSE)
						{
							$sql = "INSERT INTO exercises (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_cs_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_cs_rec') !== FALSE)
						{
							$sql = "INSERT INTO recitation (StudGradeId, Recite, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_cs_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_qz_quiz') !== FALSE)
						{
							$sql = "INSERT INTO quizzes (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_qz_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_qz_le') !== FALSE)
						{
							$sql = "INSERT INTO long_exam (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_qz_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_exam') !== FALSE)
						{
							if (stripos($table_format[$i], 'score') !== FALSE)
							{
								$sql = "INSERT INTO midterm_exam (StudGradeId, Score, Rating) VALUES (?, ?, ?)";
								$input_array = array($row->Id, $grade);
							}
							elseif (stripos($table_format[$i], 'per') !== FALSE)
							{
								$input_array[] = $grade;
								$do_query = TRUE;
							}
						}
					}
					elseif ($type == 'Lab')
					{
						if (stripos($table_format[$i], 'mt_exer_lab') !== FALSE)
						{
							$sql = "INSERT INTO lab_act (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_exer_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_prac_practical') !== FALSE)
						{
							$sql = "INSERT INTO prac_exam (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_prac_total'], 'Midterm');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'mt_proj_project') !== FALSE)
						{
							$sql = "INSERT INTO prac_exam (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['mt_proj_total'], 'Midterm');
							$do_query = TRUE;
						}
						
					}
					elseif ($type == 'attendance_table')
					{
						if (stripos($table_format[$i], 'mt_att') !== FALSE)
						{
							$sql = "INSERT INTO attendance (StudGradeId, Status, Score, Rating, Sem) VALUES (?, ?, ?, ?, ?)";
							$input_array = array($row->Id, $grade);
						}
						elseif (stripos($table_format[$i], 'mt_mt_total') === FALSE)
						{
							$input_array[] = $grade;
						}
						elseif (stripos($table_format[$i], 'per') === FALSE)
						{
							$input_array[] = $grade;
							$input_array[] = 'Midterm';
							$do_query = TRUE;
						}
					}
				}
				elseif (stripos($table_format[$i], 'ft') !== FALSE) // FINAL TERM GRADES
				{
					if ($type == 'Lec')
					{
						if (stripos($table_format[$i], 'ft_cs_assign') !== FALSE)
						{
							$sql = "INSERT INTO assignment (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_cs_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_cs_sw') !== FALSE)
						{	
							$sql = "INSERT INTO seatwork (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_cs_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_cs_ex') !== FALSE)
						{
							$sql = "INSERT INTO exercises (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_cs_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_cs_rec') !== FALSE)
						{
							$sql = "INSERT INTO recitation (StudGradeId, Recite, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_cs_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_qz_quiz') !== FALSE)
						{
							$sql = "INSERT INTO quizzes (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_qz_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_qz_le') !== FALSE)
						{
							$sql = "INSERT INTO long_exam (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_qz_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_exam') !== FALSE)
						{
							if (stripos($table_format[$i], 'score') !== FALSE)
							{
								$sql = "INSERT INTO final_exam (StudGradeId, Score, Rating) VALUES (?, ?, ?)";
								$input_array = array($row->Id, $grade);
							}
							elseif (stripos($table_format[$i], 'per') !== FALSE)
							{
								$input_array[] = $grade;
								$do_query = TRUE;
							}
						}
					}
					elseif ($type == 'Lab')
					{
						if (stripos($table_format[$i], 'ft_exer_lab') !== FALSE)
						{
							$sql = "INSERT INTO lab_act (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_exer_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_prac_practical') !== FALSE)
						{
							$sql = "INSERT INTO prac_exam (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_prac_total'], 'Final');
							$do_query = TRUE;
						}
						elseif (stripos($table_format[$i], 'ft_proj_project') !== FALSE)
						{
							$sql = "INSERT INTO prac_exam (StudGradeId, Score, Rating, Sem) VALUES (?, ?, ?, ?)";
							$input_array = array($row->Id, $grade, $data['grades']['ft_proj_total'], 'Final');
							$do_query = TRUE;
						}
					}
					elseif ($type == 'attendance_table')
					{
						if (stripos($table_format[$i], 'ft_att') !== FALSE)
						{
							$sql = "INSERT INTO attendance (StudGradeId, Status, Score, Rating, Sem) VALUES (?, ?, ?, ?, ?)";
							$input_array = array($row->Id, $grade);
						}
						elseif (stripos($table_format[$i], 'ft_ft_total') === FALSE)
						{
							$input_array[] = $grade;
						}
						elseif (stripos($table_format[$i], 'per') === FALSE)
						{
							$input_array[] = $grade;
							$input_array[] = 'Midterm';
							$do_query = TRUE;
						}
					}
				}
				
				// check to see if the sql query is complete and reset values
				if ($do_query)
				{
					// execute
					$this->db->query($sql, $input_array);
					$sql = '';
					$input_array = array();
					$do_query = FALSE;
				}
				
				// reset because new row
				if ($i < $num_of_items) $i++;
				else $i = 0;
			}
		}
	}
}
?>
