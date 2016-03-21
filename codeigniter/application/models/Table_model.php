<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Table_model extends CI_Model
{

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

    	foreach ($query->result() as $row) 
    	{	
    		// combine to make full name and to capital first letter of each name
    		$full_name = ucwords($row->LName).', '.ucwords($row->FName).' '.ucwords($row->MName);   		
    		$students[$row->Id]['full_name'] = $full_name;
    		$students[$row->Id]['stud_num'] =  $row->StudentNumber;
    	}
    	
		$sql = "SELECT students.Id, MidtermGrade, FinalGrade, TotalGrade 
				FROM grades 
				JOIN students ON grades.StudId = students.Id 
				WHERE StudId IN (SELECT Id FROM students WHERE ClassId = ?)";
		$query = $this->db->query($sql, $ClassId);
		foreach ($query->result() as $row)
		{
			array_push($students[$row->Id], $row->MidtermGrade.'MG');
			array_push($students[$row->Id], $row->FinalGrade.'FG');
			array_push($students[$row->Id], $row->TotalGrade.'TG');
		}
    	
    	// justin code from here below
    	$type = $block->ModuleType;
		switch ($block->ModuleType)
		{
			case 'Lec':
				$tables = array( 'assignment', 'seatwork','exercises','recitation','quizzes','long_exam', 'midterm_exam', 'final_exam');
				break;
			case 'Lab':
				$tables = array( 'lab_act', 'prac_exam', 'project', 'midterm_exam', 'final_exam' );
				break;
			default:
				exit ('Invalid Input');
		}
		
		// for attendance table, override switch block result
		if ($table_type == 'attendance_table')
		{
			$tables = array( 'attendance' );
			$type = $table_type;
		}
				
		$first_attendance = TRUE;
		$grades = array();
		foreach ($tables as $table)
		{
			$statement = ",$table.Sem";
			if ($table == 'midterm_exam' OR $table == 'final_exam')
			{
				$statement = " ";
			}
			
			$sql = "SELECT students.Id, $table.Score, $table.Rating".$statement."
					FROM $table 
					JOIN grades ON grades.Id = $table.StudGradeId 
					JOIN students ON students.Id = grades.StudId 
					WHERE StudGradeId IN (SELECT Id from grades WHERE grades.StudId IN (SELECT Id FROM students WHERE ClassId = ?))";
			$query = $this->db->query($sql, $ClassId);

			
			foreach ($query->result() as $row)
			{
				if ($table == 'midterm_exam')
				{
					$semester = 'Midterm';
				}
				elseif ( $table == 'final_exam' )
				{
					$semester = 'Final';
				}
				else $semester = $row->Sem;
				
				array_push($students[$row->Id], $row->Score.$table.$semester);
				
				if ($table == 'assignment' OR $table == 'quizzes' OR $first_attendance )
				{
					array_push($students[$row->Id], $row->Rating.'rating');
					$first_attendance = FALSE;
				}
			}
		}
		
		// to fit the original JSON pattern
		$grades = array();
		foreach ($students as $student)
		{
			$grades[] = $student;
		}
		
		// module items
		$sql = "SELECT Module, Items FROM module_items WHERE ClassId = ? AND TableType = ?";
		$query = $this->db->query($sql, array($ClassId, $type));
		$items = array();
		$i = 0;
		foreach ($query->result() as $row)
		{
			$items[$i] = array(
				'header' => $row->Module,
				'items' => $row->Items
			);
			$i++;
		}
		
		
    	$data = array(
    		'Class' => $class,
    		'Subject' => $subject,
    		'Student' => $grades,
    		'Module' => $module,
    		'Items' => $items
    	);
    	return $data;
	}
		
	function save_table_data()
	{
		if ( ! isset($_SESSION['table_format'])) exit ('Cannot find format, please try again');
		
		$class_id = $_SESSION['table_format']['tableId'];
		
		// simple check to see if all students are going to be recorded
		$sql = "SELECT Id FROM class WHERE NumOfStudents = ? AND Id = ?";
		$query = $this->db->query($sql, array($_SESSION['table_format']['numOfStudents'], $class_id));
		
		if ($query->num_rows() ==  0) exit ('Recording failed, please try again'.$_SESSION['table_format']['numOfStudents']);
		
		
		$type = $_SESSION['table_format']['tableType'];
		$table_format = $_SESSION['table_format']['tableFormat'];
		$num_of_items = $_SESSION['table_format']['tableItems'];
		if ( ! isset($_SESSION['table_data'])) exit ('Cannot find data, please try again');
		$table_data = $_SESSION['table_data'];
		
		// create stuff for the SQL insert loop
		switch ($type)
		{
			case 'Lec':
				$tables_to_delete = array( 'assignment','seatwork','exercises','recitation','quizzes','long_exam','midterm_exam','final_exam');
				$tables_to_record = array( 'assignment','seatwork','exercises','recitation','quizzes','long_exam','assignment','seatwork','exercises','recitation','quizzes','long_exam');
				$name_formats = array( 'mt_cs_assign','mt_cs_sw','mt_cs_ex','mt_cs_rec','mt_qz_quiz','mt_qz_le',
									'ft_cs_assign','ft_cs_sw','ft_cs_ex','ft_cs_rec','ft_qz_quiz','ft_qz_le' );
				$rating_formats = array( 'mt_cs_per','mt_cs_per','mt_cs_per','mt_cs_per','mt_qz_per','mt_qz_per',
									'ft_cs_per','ft_cs_per','ft_cs_per','ft_cs_per','ft_qz_per','ft_qz_per' );
				$halfterm = array( 'Midterm','Midterm','Midterm','Midterm','Midterm','Midterm',
									'Final','Final','Final','Final','Final','Final' );
				$exam_tables = array('midterm_exam','final_exam');
				$exam_format = array('mt_exam_','ft_exam_');
				break;
			case 'Lab':
				$tables_to_delete = array( 'lab_act', 'prac_exam', 'project', 'midterm_exam', 'final_exam' );
				$tables_to_record = array( 'lab_act', 'prac_exam', 'project','lab_act', 'prac_exam', 'project' );
				$name_formats = array( 'mt_exer_lab','mt_prac_practical','mt_proj_project','ft_exer_lab','ft_prac_practical','ft_proj_project' );
				$rating_formats = array( 'mt_exer_per','mt_prac_per','mt_proj_per','ft_exer_per','ft_prac_per','ft_proj_per' );
				$halfterm = array( 'Midterm','Midterm','Midterm','Final','Final','Final' );
				break;
			case 'attendance_table':
				$tables_to_delete = array( 'attendance' );
				$tables_to_record = array( 'attendance' );
				$name_formats = array( 'mt_att','ft_att' );
				$rating_formats = array( 'mt_mt_per','ft_ft_per' );
				$halfterm = array( 'Midterm','Final' );
				break;
			default:
				exit ('Invalid Input');
		}
		
		// destroy previous records
		foreach ($tables_to_delete as $table)
		{
			$sql = "DELETE FROM $table 
					WHERE StudGradeId IN (SELECT Id from grades WHERE grades.StudId IN (SELECT Id FROM students WHERE ClassId = ?))";
			$this->db->query($sql, $class_id);
		}
		
		$b = 0;
		$c = 0;
		$first_student = TRUE;
		$first_item = TRUE;
		$format_count = count($table_format);
		$name_count = count($name_formats);

		// record all non midterm/final exams
		// loop of the column header array
		for ($a = 0 ; $a < $format_count; $a++)
		{
			// loop of the header format array
			for ($i = $b; $i < $name_count; $i++)
			{
				// check to see if the header at position of $b is equal. If equal break after query, otherwise iterate
				if (stripos($table_format[$a], $name_formats[$i]) !== FALSE)
				{
					// reset variables
					$sql = "INSERT INTO ".$tables_to_record[$i]." (StudGradeId, Score, Rating, Sem) VALUES ";
					$input_array = array();
					
					
					
					foreach ($table_data as $student)
					{
						array_push($input_array, $class_id, $student['number'], $student['grades'][$table_format[$a]], $student['grades'][$rating_formats[$i]], $halfterm[$i]);
						if ($first_student)
						{
							$sql .= "((SELECT Id FROM grades WHERE StudId = (SELECT Id FROM students WHERE ClassId = ? AND StudentNumber = ?)), ?, ?, ?)";
							$first_student = FALSE;
						}
						else 
							$sql .= ",((SELECT Id FROM grades WHERE StudId = (SELECT Id FROM students WHERE ClassId = ? AND StudentNumber = ?)), ?, ?, ?)";
					}
					
					$this->db->query($sql, $input_array);
					$first_student = TRUE;
					$b = $i;
					break;
				}
			}
		}
		
		
		if ($type == 'Lec' OR $type == 'Lab')
		{
			// save module items
			$first_header = TRUE;
			$sql = "REPLACE module_items (Id, ClassId, Module, Items, TableType) VALUES ";
			$input_array = array();
			$count = 0;
			foreach ($table_format as $header)
			{
				array_push($input_array, $class_id, $header, $class_id, $header, $num_of_items[$count], $type);
				if ($first_header)
				{
					$sql .= "((SELECT Id FROM module_items_id WHERE `ClassId` = ? AND `Module` = ? ) , ?, ?, ?, ? )";
					$first_header = FALSE;
				}
				else 
					$sql .= " ,((SELECT Id FROM module_items_id WHERE `ClassId`= ? AND `Module` = ? ) , ?, ?, ?, ? )";
				$count++;
			}
			$this->db->query($sql, $input_array);

			$sql = "INSERT INTO module_items_id SELECT Id, ClassId, Module FROM module_items ON DUPLICATE KEY UPDATE ClassId = VALUES (ClassId), Module = VALUES (Module)";
			$this->db->query($sql);
			
			// for lecture tables
			if ($type == 'Lec')
			{
				$first_student = TRUE;
				for ($i = 0; $i < count($exam_tables); $i++)
				{
					$sql = "INSERT INTO ".$exam_tables[$i]." (StudGradeId, Score, Rating) VALUES ";
					$input_array = array();
					foreach ($table_data as $student)
					{
						array_push($input_array, $class_id, $student['number'], $student['grades'][$exam_format[$i].'score'], $student['grades'][$exam_format[$i].'per']);
						if ($first_student)
						{
							$sql .= "((SELECT Id FROM grades WHERE StudId = (SELECT Id FROM students WHERE ClassId = ? AND StudentNumber = ?)), ?, ?)";
							$first_student = FALSE;
						}
						else 
							$sql .= " ,((SELECT Id FROM grades WHERE StudId = (SELECT Id FROM students WHERE ClassId = ? AND StudentNumber = ?)), ?, ?)";
					}
					$this->db->query($sql, $input_array);
					$first_student = TRUE;
				}
			}
			
			// update grades table
			$sql = "INSERT INTO grades (Id, MidTermGrade, FinalGrade, TotalGrade) VALUES ";
			
			$first_student = TRUE;
			$input_array = array();
			foreach ($table_data as $student)
			{
				$total_grade = ($student['grades']['mt_mt_rating'] + $student['grades']['ft_ft_rating']) / 2;
				array_push($input_array, $class_id, $student['number'], $student['grades']['mt_mt_rating'], $student['grades']['ft_ft_rating'], $total_grade);
				if ($first_student)
				{
					$sql .= "((SELECT Id FROM grades_id WHERE `StudId` = (SELECT `Id` FROM students WHERE `ClassId` = ? AND `StudentNumber` = ? )), ?, ?, ?)";
					$first_student = FALSE;
				}
				else 
					$sql .= " ,((SELECT Id FROM grades_id WHERE `StudId` = (SELECT `Id` FROM students WHERE `ClassId` = ? AND `StudentNumber` = ? )), ?, ?, ?)";
			}
			$sql .= " ON DUPLICATE KEY UPDATE MidTermGrade= VALUES (MidTermGrade), FinalGrade= VALUES (FinalGrade), TotalGrade= VALUES (TotalGrade)";
			$this->db->query($sql, $input_array);

			$sql = "INSERT INTO grades_id SELECT Id, StudId FROM grades ON DUPLICATE KEY UPDATE StudId = VALUES (StudId)";
			$this->db->query($sql);
		}
	}
}


/* END OF FILE */
