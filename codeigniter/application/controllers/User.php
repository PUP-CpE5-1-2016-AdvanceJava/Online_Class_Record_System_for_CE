<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class User extends CI_Controller 
{
	public function __construct() 
	{	
		parent::__construct(); //calling initial function
		//calling pre-defined libraries
		//kailangan ng libraries para magamit ung ibang function
		ini_set('max_execution_time', 0); 
		$this->load->library('form_validation'); 
		$this->load->library('session');
		$this->load->model('User_model');
		$this->load->helper('url');
	}

	public function index()
	{

		if (($this->session->userdata('Id')!=""))
		{
			//if user already and login and session is taken
			redirect(site_url('user/home'));
		}
		else
		{
			$this->load->view('pages/login_view');
		}
	}

	public function home()
	{
		if ($this->session->userdata('Id')!="")
    	{
			//get user id
    		$userId = $this->session->userdata('Id');
			$this->load->model('Faculty_model'); // load the model to be used
			//get the username and usertype
			$type = $this->session->userdata('UserType');
			$user['user'] = array(
				'Username' => $this->session->userdata('Username'),
				'type' => $type,
				'Fullname' => $this->Faculty_model->get_fac_name($userId),
				'ActiveHeader' => "home"
			);	
    		if ($this->session->userdata('UserType') == "Faculty")
    		{
				//get the subjects taken

				$data['subj'] = $this->User_model->getUserSubjs($userId);
				//call the pages and include variables
				$this->load->view('templates/header',$user);
				$this->load->view('pages/faculty_page',$data);
				$this->load->view('templates/footer');
    		}
    		else if ($this->session->userdata('UserType') == "Chairperson" || $this->session->userdata('UserType') == "Administrator")
    		{
    			if ($this->session->userdata('UserType') == "Chairperson")
    			{
    				$data['info'] = $this->User_model->get_upload_status($this->session->userdata('UserDept'));
    			}
    			else if ($this->session->userdata('UserType') == "Administrator")
    			{
    				$data['info'] = $this->User_model->get_upload_status("none");
    			}
    			if (isset($data['info']))
    			{
    				$i = 0;
    				$arr = array();
    				foreach ($data['info'] as $key)
    				{
    					if (isset($key))
    					{
    						foreach ($key as $key2)
	    					{
	    						if (isset($key2['user_id']))
	    						{
	    							$arr[$i] = $this->User_model->get_upload_count($key2['user_id']);
	    							$i++;
	    						}
	    					}
    					}
    					
    				}
    				$data['upload_count'] = $arr;
    			}
    			$this->load->view('templates/header',$user);
				$this->load->view('pages/chairperson_page',$data);
				$this->load->view('templates/footer');
    		}
		}
		else
		{
			// redirection for unecessary url skipping
			redirect(site_url('user'));
		}
	}

    public function settings()
    {
    	if ($this->session->userdata('Id')!="")
    	{
    		$this->load->model('Faculty_model'); // load the model to be used
    		$type = $this->session->userdata('UserType');
    		$user['user'] = array(
				'Username' => $this->session->userdata('Username'),
				'type' => $type,
				'Fullname' => $this->Faculty_model->get_fac_name($this->session->userdata('Id')),
				'ActiveHeader' => "settings"
			);
    		if ($this->session->userdata('UserType') == "Faculty")
    		{
	    		//to go in the settings tab of faculty
	    		$data['subjs'] = $this->Faculty_model->get_all_subjs();
	    		$data['sections'] = $this->Faculty_model->get_all_section();

				$this->load->view('templates/header',$user);
				$this->load->view('pages/faculty_settings_page',$data);
			}
			else if ($this->session->userdata('UserType') == "Administrator")
			{
				//get faculty usernames for reset pass dropdown
				$this->load->model('Admin_model');
				$names['users'] = $this->Admin_model->get_usernames();
				$this->load->view('templates/header',$user);
				$this->load->view('pages/admin_settings_page',$names);
			}
			else 
			{
				//to go in the settings tab of chairperson
				$this->load->view('templates/header',$user);
				$this->load->view('pages/chairperson_settings_page');
			}
			// $this->load->view('pages/chairperson_settings_page');
		}
		else 
		{
			$this->load->view("pages/login_view");
		}
    }

    public function archives()
    {
    	if ($this->session->userdata('Id')!="")
    	{
    		$this->load->model('Faculty_model'); // load the model to be used
    		// to go in the archives tab
    		$type = $this->session->userdata('UserType');;
			$user['user'] = array(
				'Username' => $this->session->userdata('Username'),
				'type' => $type,
				'Fullname' => $this->Faculty_model->get_fac_name($this->session->userdata('Id')),
				'ActiveHeader' => "archives",
			);
			// if chairperson
			if ($this->session->userdata('UserType') == 'Chairperson')
			{
				// fetch all class with IsUploaded = true
				$dept = $this->session->userdata('UserDept'); 
				$data['info'] = $this->Faculty_model->get_archive($dept);
			}
			else if ($this->session->userdata('UserType') == 'Administrator')
			{
				// fetch all class with IsUploaded = true
				$dept = false;
				$data['info'] = $this->Faculty_model->get_archive($dept);
			}
			else $data = null;

			$this->load->view('templates/header',$user);
			$this->load->view('pages/archives',$data);
			$this->load->view('templates/footer');
		}
		else 
		{
			$this->load->view("pages/login_view");
		}
    }

    public function calendar()
    {
    	if ($this->session->userdata('Id')!="")
    	{
    		$this->load->model('Faculty_model'); // load the model to be used
    		// to go in the archives tab
			$type = $this->session->userdata('UserType');
			$user['user'] = array(
				'Username' => $this->session->userdata('Username'),
				'type' => $type,
				'UserType' => $this->session->userdata('UserType'),
				'Fullname' => $this->Faculty_model->get_fac_name($this->session->userdata('Id')),
				'ActiveHeader' => "calendar"
			);
			$this->load->model('Calendar_model');
			$data['info'] = $this->Calendar_model->getEvent();

			$this->load->view('templates/header',$user);
			$this->load->view('pages/calendar',$data);
		}
		else 
		{
			$this->load->view("pages/login_view");
		}
    }

    public function regView($page = 'register_view')
    {
    	// just use this to register dummy users
	    $data['Username']  = $this->session->userdata('Username');
	    $this->load->view('templates/header', $data);
	    $this->load->view('pages/'.$page);
	    $this->load->view('templates/footer', $data);
    }

	public function login()
	{
		// rules for validation
		$rules = array(
			array('field'=>'login_username','rules'=>'required'),
			array('field'=>'login_password','rules'=>'required')
		);
		$this->form_validation->set_rules($rules);
		if($this->form_validation->run() == FALSE)
		{
			// if validation is incorrect
			$this->index();
		}
		else if($this->form_validation->run() == TRUE)
		{
			// check if user is registered
			$auth = $this->User_model->login($this->input->post('login_username'),$this->input->post('login_password'));
			if($auth == TRUE)
			{
				// authentication is correct
				redirect(site_url('user'));
				return;
			}
			else
			{
				// make error message
				$data['error'] ="Invalid Username or Password";
				$this->load->view('pages/login_view',$data);
				return;
			}
		}
	}

	public function calendar_add_event()
	{
		if ($this->session->userdata('UserType') == "Administrator")
		{
		$event_name = $this->input->post('event_name');
		$event_date = $this->input->post('event_date');
		$UserId = $this->session->userdata('Id');
		$this->load->model('Calendar_model');
		$data = $this->Calendar_model->addEvent($event_date,$event_name,$UserId);
		header('Content-Type: application/json');
    	echo json_encode($data);
    	}
	}

	public function calendar_delete_event()
	{
		if ($this->session->userdata('UserType') == "Administrator")
		{
			$UserId = $this->session->userdata('Id');
			$event_date = $this->input->post('event_date');
			$event_name = $this->input->post('event_name');
			$this->load->model('Calendar_model');
			$data = $this->Calendar_model->delEvent($event_date,$event_name,$UserId);
			header('Content-Type: application/json');
    		echo json_encode($data);
		}
	}

	public function upload_pdf()
	{
		$file = array('classlist' => $_FILES['classlist']);
		$this->load->model('Upload_model');
		$this->load->model('Faculty_model');
		// $name = $_FILES["classlist"]["name"];
		// $temp = $_FILES["classlist"]["tmp_name"];
		$module = $this->input->post('module_type');
		// move_uploaded_file($temp, "resources/uploads/".$name);
		$data['status'] = $this->Upload_model->save_data($file,$module,$this->session->userdata('Id'));
		$type = $this->session->userdata('UserType');
		$user['user'] = array(
			'Username' => $this->session->userdata('Username'),
			'Fullname' => $this->Faculty_model->get_fac_name($this->session->userdata('Id')),
			'ActiveHeader' => "settings",
			'UserType' => $this->session->userdata('UserType')
		);
		if ($this->session->userdata('Id')!="")
    	{
			$this->load->view('templates/header',$user);
			$this->load->view('pages/faculty_settings_page',$data);
			$this->load->view('templates/footer');
		}
		else 
		{
			$this->load->view("pages/login_view");
		}
	}

	public function get_class_table($table_type,$ClassId = 0)
	{
		$this->load->model('Table_model');
		// this function in the model will return object containing info about student,subject,class,module
		$data = $this->Table_model->get_class_table($table_type,$ClassId);
		// for status checking
		$data['status'] = "OK";
		$data['table_type'] = $table_type;
		// need to use json to response to the ajax request
		header('Content-Type: application/json');
    	echo json_encode($data);
    	return;
	}

	public function register()
	{
		$this->load->view('login_view'); //loads the login_view.php file in views folder
	}

	public function do_register()
	{
		$rules = array(
			array('field'=>'Username','label'=>'User Name','rules'=>'trim|required'),
			array('field'=>'Password','label'=>'Password','rules'=>'trim|required'),
			array('field'=>'PersonalInfo','label'=>'Personal Info','rules'=>'required'),
			array('field'=>'Fname','label'=>'First Name','rules'=>'required'),
			array('field'=>'Mname','label'=>'Middle Name','rules'=>'required'),
			array('field'=>'Lname','label'=>'Last Name','rules'=>'required'),
		);
		$this->form_validation->set_rules($rules);
		if($this->form_validation->run() == FALSE)
		{
			$this->load->view('pages/login_view');
		}
		else
		{
			$this->User_model->register_user();
			$this->load->view('pages/success');
		}
	}

	public function view_fac_page()
	{
		$rules = array(
			array('field'=>'subject_title[]','rules'=>'required'),
		);

		$this->form_validation->set_rules($rules);
		if($this->form_validation->run() == FALSE)
		{
			redirect(site_url('user'));
		}
		else
		{
			$this->User_model->save_settings($this->session->userdata('Id'));
			redirect(site_url('user/home'));
		}
	}	

	public function admin_settings($todo)
	{
		if ($todo == "change_pw")
		{
			$old_pw = $this->input->post('old_pw');
			$new_pw = $this->input->post('new_pw');
			$this->load->model('Admin_model');
			$data["status"] = $this->Admin_model->admin_change_pw($old_pw,$new_pw,$this->session->userdata('Id'));
			header('Content-Type: application/json');
	    	echo json_encode($data);
	    }
		else if ($todo == "change_un")
		{
			$old_un = $this->input->post('old_un');
			$new_un = $this->input->post('new_un');
			$this->load->model('Admin_model');
			$data["status"] = $this->Admin_model->admin_change_un($old_un,$new_un,$this->session->userdata('Id'));
			header('Content-Type: application/json');
	    	echo json_encode($data);
		}
		else if ($todo == "create_acc")
		{
			$this->User_model->register_user();
			$data["status"] = "OK";
			header('Content-Type: application/json');
	    	echo json_encode($data);
		}
		else if ($todo == "fac_reset_pass")
		{
			$user = $this->input->post('data');
			$this->load->model('Admin_model');
			$data["pass"] = $this->Admin_model->acc_reset_pass($user);
			$data["status"] = "OK";
			header('Content-Type: application/json');
	    	echo json_encode($data);
		}
	}

	public function add_student()
	{
		// $fname = $this->input->post('fname');
		// $mname = $this->input->post('mname');
		// $lname = $this->input->post('mname');
		// $stud_num = $this->input->post('stud_num');
		// $subject = $this->input->post('subject');
		// $section = $this->input->post('section');
		$this->load->model('Faculty_model');
		$data["status"] = $this->Faculty_model->insert_student($this->input->post());
		header('Content-Type: application/json');
	    echo json_encode($data);
	}

	public function save_table()
	{
		// $before = memory_get_usage();
		$this->load->model('Table_model');
		$data["info"] = $this->Table_model->save_table_data($this->input->post());
		// $after = memory_get_usage();
		// $data["memory"] = ($after - $before);
		$data["status"] = "OK";
		header('Content-Type: application/json');
	    echo json_encode($data);
	}

	public function upload_class()
	{
		$file = array('excel_file' => $_FILES['excel_file']);
		$this->load->model('Upload_model');
		$this->load->model('Faculty_model');
		// $name = $_FILES["excel_file"]["name"];
		// $temp = $_FILES["excel_file"]["tmp_name"];
		// move_uploaded_file($temp, "resources/uploads/".$name);
		$data['status'] = $this->Upload_model->upload_class($file);
		$type = $this->session->userdata('UserType');
		$user['user'] = array(
			'Username' => $this->session->userdata('Username'),
			'Fullname' => $this->Faculty_model->get_fac_name($this->session->userdata('Id')),
			'ActiveHeader' => "settings",
			'type' => $this->session->userdata('UserType')
		);
		if ($this->session->userdata('Id')!="")
    	{
			$this->load->view('templates/header',$user);
			$this->load->view('pages/faculty_settings_page',$data);
			$this->load->view('templates/footer');
		}
		else 
		{
			$this->load->view("pages/login_view");
		}
	}

	public function logout()
	{
		// destroy session if user logout
		$this->session->sess_destroy();
		redirect(site_url());
	}
}