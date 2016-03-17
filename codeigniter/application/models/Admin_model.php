<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Admin_model extends CI_Model 
{
	public function __construct()
	{	
		parent::__construct();
		$this->load->database();
	}

	//---admin_settings_change_pw---//
	public function admin_change_pw($old,$new,$UserId)
	{
		$this->db->where("Password",md5($old));
		$validate = $this->db->get("users");
		//check if true ung old pw
		if($validate->num_rows()>0)
		{
			$object = array(
				'Password' => md5($new), 
				);
			$this->db->where('Id', $UserId);
			$this->db->update('users', $object);
			return "OK";
		}
		else 
		{
			return "Invalid old password";
		}
	}

	//---admin_settings_change_un---//
	public function admin_change_un($old,$new,$UserId)
	{
		$this->db->where("Username",$old);
		$validate = $this->db->get("users");
		//check if true ung old un
		if($validate->num_rows()>0)
		{
			$object = array(
				'Username' => $new, 
				);
			$this->db->where('Id', $UserId);
			$this->db->update('users', $object);
			return "OK";
		}
		else 
		{
			return "Invalid old username";
		}
	}

	//---get all usernames---//
	public function get_usernames()
	{
		$this->db->select('Username')->from('users')->where('UserType !=','Administrator');
		$data = $this->db->get();
		if (!$data->num_rows() > 0) {
        	// die("There are no subjects in the database.");
        	return;
    	}
    	return $data->result_array();
	}

	//---account reset pass---//
	public function acc_reset_pass($user)
	{
		$pass = "poisonreverse";
		$object = array(
			'Password' => md5($pass),
			);
		$this->db->where('Username', $user);
		$this->db->update('users', $object);
		return $pass;
	}

	//---random pass generator if decided to make random pass---//
	function generateRandomString($length = 10) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}
}
?>