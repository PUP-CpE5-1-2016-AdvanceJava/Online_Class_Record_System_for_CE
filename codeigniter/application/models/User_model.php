<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class User_model extends CI_Model 
{
	public function __construct()
	{	
		parent::__construct();
		//load database configuration...tignan nyo dun sa config>database.php kung naconfigure nyo (user,pass,dbname) if itetest nyo locally
		$this->load->database();
	}

	public function register_user()
	{
		$username = $this->input->post('Username');
		$dataUser=array(
			'Username'=>$username,
			'Password'=>md5($this->input->post('Password')),
			'UserType'=>$this->input->post('UserType'),
			'UserDept'=>$this->input->post('UserDept')
		);
		$this->db->insert('users',$dataUser);
		//get newly created user id
		$userId = $this->db->insert_id();

		//get the user credentials ... reserve lng baka kailanganin
		$dataFac=array(
			'UserId'=>$userId,
			'Background'=>$this->input->post('PersonalInfo'),
			'Fname'=>$this->input->post('Fname'),
			'Mname'=>$this->input->post('Mname'),
			'Lname'=>$this->input->post('Lname'),
		);
		$this->db->insert('faculty',$dataFac);
		return true;
	}

	function login($Username,$Password)
	{
		$this->db->where("Username",$Username);
		$this->db->where("Password",md5($Password));
		$validate = $this->db->get("users");

		//check if may ganung user or password
		if($validate->num_rows()>0)
		{
			$userRow = $validate->row();
			$userdata = array(
				'Id'  => $userRow->Id,
				'Username' => $userRow->Username,
				'UserType'=> $userRow->UserType,
				'UserDept'=> $userRow->UserDept,
			);
			//after mavalidate kapag tama user/pass isasave nten ung Id,Username sa session
			//pra sa redirection at pra magamit sa header ung name
			$this->session->set_userdata($userdata);
			return TRUE;
		}
		return FALSE;
	}

	function getUserSubjs($userId)
	{
		//select all subjects handled by the faculty
		$this->db->select('*')->from('subjects')->where('UserId',$userId);
		$query = $this->db->get();
		
		if (!$query->num_rows() > 0) {
        	// die("There are no subjects in the database.");
        	return;
    	}
    	$res = $query->row();
    	$subjs = array();
    	$subjs[$res->SubjectTitle]['user_id'] = $userId;
    	foreach ($query->result() as $row) 
    	{
    		//fetch sections based on SubjectId in database
    		$this->db->select('*')->from('class')->where('SubjectId',$row->Id);
    		$queryClass = $this->db->get();
    		$i = 0;
    		$j = 0;
    		$class = array();
    		$modules = array();
    		$ClassId = array();
    		
    		foreach ($queryClass->result() as $rowClass) 
    		{
    			$class[$i] = array(
    				'c_block' => $rowClass->ClassBlock,
    				'c_id' => $rowClass->Id,
    				'c_isUploaded' => $rowClass->IsUploaded,
    				'c_dateUploaded' => $rowClass->DateUploaded
    			);

    			//fetch modules
	    		//if subject on that section is lecture type
	    		if ($rowClass->ModuleType == "Lec")
	    		{
	    			$this->db->select('*')->from('lectmodperc')->where('Id',1);
	    			$queryModules = $this->db->get();
	    			//convert into one dimensional object array using row()
	    			$rowModules = $queryModules->row();
	    			$modules[$j] = array(
	    				'Attendance' => $rowModules->Attendance,
	    				'ClassStanding' => $rowModules->ClassStanding,
	    				'QuizzesLExam	' => $rowModules->QuizzesLExam,
	    				'MajorExam' => $rowModules->MajorExam
	    			);
	    		}
	    		//else get lab modules
	    		else 
	    		{
	    			$this->db->select('*')->from('labmodperc')->where('Id',1);
	    			$queryModules = $this->db->get();
	    			$rowModules = $queryModules->row();
	    			$modules[$j] = array(
	    				'PracExam	' => $rowModules->PracExam,
	    				'Project' => $rowModules->Project,
	    				'Lab_MachineEx' => $rowModules->Lab_MachineEx,
	    			);
	    		}
    			$i++;
    			$j++;
    		}
        	$subjs[$row->SubjectTitle]['title'] = $row->SubjectTitle;
        	$subjs[$row->SubjectTitle]['class'] = $class;
        	$subjs[$row->SubjectTitle]['modules'] = $modules;
    	}
    	return $subjs;
	}

	function get_upload_count($userId)
	{
		$this->db->select('*')->from('subjects')->where('UserId',$userId);
		$query = $this->db->get();
		if (!$query->num_rows() > 0) {
        	// die("There are no subjects in the database.");
        	return;
    	}
    	$cnt = 0;
    	foreach ($query->result() as $row) 
    	{
    		//fetch sections based on SubjectId in database
    		$this->db->select('*')->from('class')->where('SubjectId',$row->Id);
    		$queryClass = $this->db->get();
    		foreach ($queryClass->result() as $rowClass) 
    		{
    			if ($rowClass->IsUploaded == true)
    			{
    				$cnt++;
    			}
    		}
    	}
    	return $cnt;
	}

	function get_upload_status($UserDept)
	{
		if ($UserDept == "none")
		{
			$this->db->where("UserType","Faculty");
			$validate = $this->db->get("users");

			if($validate->num_rows()<=0)
			{
				return null;
			}
			$this->load->model('Faculty_model'); // load the model to be used
			foreach ($validate->result() as $user) 
			{
				$name = $this->Faculty_model->get_fac_name($user->Id);
				$arr[$name] = $this->getUserSubjs($user->Id);
			}
			return $arr;
		}
		else 
		{
			$this->db->where("UserType","Faculty");
			$validate = $this->db->get("users");

			if($validate->num_rows()<=0)
			{
				return null;
			}
			$this->load->model('Faculty_model'); // load the model to be used
			foreach ($validate->result() as $user) 
			{
				$name = $this->Faculty_model->get_fac_name($user->Id);
				$arr[$name] = $this->getUserSubjs($user->Id);
			}
			return $arr;
		}
	}
}