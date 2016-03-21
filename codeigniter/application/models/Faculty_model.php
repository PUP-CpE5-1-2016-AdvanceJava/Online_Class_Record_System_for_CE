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
}