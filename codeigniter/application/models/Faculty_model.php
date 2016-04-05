<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Faculty_model extends CI_Model 
{
	public function __construct()
	{	
		parent::__construct();
		//load database configuration...tignan nyo dun sa config>database.php kung naconfigure nyo (user,pass,dbname) if itetest nyo locally
		$this->load->database();
	}

	function get_fac_name($UserId)
	{
		$this->db->where("UserId",$UserId);
		$validate = $this->db->get("faculty");

		if($validate->num_rows()>0)
		{
			$facRow = $validate->row();
			$fname = ucfirst($facRow->FName);
			$mname = ucfirst(substr($facRow->MName, 0,1));
			$lname = ucfirst($facRow->LName);
			$title = "Engr. ";
			$full_name = $title . $fname . " " . $mname . ". " . $lname;
			return $full_name;
		}
		return false;
	}

	function get_all_subjs()
	{
		$this->db->select('SubjectTitle')->from('subjects');
		$query = $this->db->get();
		return $query->result_array();
	}
	function get_all_section()
	{
		$this->db->select('ClassBlock')->from('class');
		$query = $this->db->get();
		return $query->result_array();
	}

	function insert_student($arr)
	{
		//get subject Id
		$this->db->where('SubjectTitle',$arr['subject']);
		$query = $this->db->get('subjects');
		if($query->num_rows() <= 0)
		{
			return "Cannot find subject or cannot establish connection with database.";
		}
		$subj = $query->row();
		//get class Id
		$this->db->where('ClassBlock', $arr['section']);
		$this->db->where('SubjectId',$subj->Id);
		$query_class = $this->db->get('class');
		if($query_class->num_rows() <= 0)
		{
			return "This class block is not registered under this subject or connection error.";
		}
		$class = $query_class->row();
		
		$dataStudent = array(
			'ClassId' => $class->Id,
			'FName' => $arr['fname'],
			'MName' => $arr['mname'],
			'LName' => $arr['lname'],
			'StudentNumber' => $arr['stud_num'],
		);
		$this->db->insert('students',$dataStudent);
		//update num of students in that class
		$this->update_class_population($class->Id,$class->NumOfStudents);
		return "OK";
	}

	function update_class_population($classId,$current_population)
	{
		$object = array(
				'NumOfStudents' => $current_population+1, 
		);
		$this->db->where('Id', $classId);
		$this->db->update('class', $object);
		return;
	}

	function get_archive($dept)
	{
		$this->db->select('*')->from('class')->where('IsUploaded',TRUE);
		$query = $this->db->get();
		if (!$query->num_rows() > 0) return null;
		$i = 0;
		$base = base_url();
		$path = $base.'resources/reports/';
		foreach ($query->result_array() as $class) {
			if ($dept)
			{
				//check if same department
				$subj_id = $class["SubjectId"];
				$this->db->where('Id',$subj_id);
				$query_subj = $this->db->get('subjects');

				$subj = $query_subj->row();

				$user_id = $subj->UserId;
				$this->db->where('Id',$user_id);
				$query_users = $this->db->get('users');

				$user = $query_users->row();

				if ($dept == $user->UserDept)
				{
					$data[$class["Filename"]] = $path.$class["Filename"];
				}
			}
			else
			{
				$data[$class["Filename"]] = $path.$class["Filename"];
			}
			
		}
		return $data;
	}
}
