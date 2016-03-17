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
		$grading_period = array('mt','ft');
		$type = $_POST['tableType'];
		var_dump($_POST);
		switch ($type)
		{
			case 'Lec':
				$format = array(
					'att',
					'cs',
					'qz',
					'exam'
				);
				$tables = array(
					'assignment',
					'seatwork',
					'exercises',
					'recitation',
					'quizzes',
					'long_exam',
					'grades'
				);
				break;
			case 'Lab':
				$format = array(
					'exer',
					'prac',
					'proj'
				);
				$tables = array(
					'lab_act',
					'prac_exam',
					'project',
					'grades'
				);
				break;
			case 'attendance_table':
				$tables = array(
					'attendance'
				);
				$format = array(
					'mt',
					'ft',
				);
				break;
			default:
				exit ('Invalid Input');
		}
		
	}
	
	function clear_table_session()
	{
		unset($_SESSION['table_data']);
	}
}
?>
