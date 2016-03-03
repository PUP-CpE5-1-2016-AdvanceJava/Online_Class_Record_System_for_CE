<?php

class Calendar_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	function addEvent($event_date,$event_name,$UserId)
	{
		$date = date('Y-m-d', strtotime($event_date));
		$dataCalendar = array(
			'UserId' => $UserId,
			'Date' => $date, 
			'Event' => $event_name
		);
		$this->db->insert('calendar',$dataCalendar);
		$mon_dd_yyyy = date('M-d-Y',strtotime($date));
		$arr = explode('-', $mon_dd_yyyy);
		$converted_date = $this->getMonth($arr[0])."-".(int)$arr[1]."-".$arr[2];

		$data = array(
			'status' => "OK", 
			'event_date' => $converted_date,
			'event_name' => $event_name
			);
		return $data;
	}

	function delEvent($event_date,$event_name,$UserId)
	{
		$g = $event_date." GMT +0800";
		$date = date('Y-m-d', strtotime($event_date." GMT +0800"));
		$this->db->delete('calendar',array('Date' => $date,'UserId' => $UserId, 'Event' => $event_name));
		$mon_dd_yyyy = date('M-d-Y',strtotime($date." GMT +0800"));
		$arr = explode('-', $mon_dd_yyyy);
		$converted_date = $this->getMonth($arr[0])."-".(int)$arr[1]."-".$arr[2];
		$data = array(
			'status' => "OK",
			'event_date' => $converted_date,
			'event_name' => $event_name,
			);
		return $data;
	}

	function getEvent()
	{
		$this->db->select('*')->from('users')->where('UserType', "Administrator");
		$query = $this->db->get();
		$row = $query->row();
		// get all event dates and event name
		$this->db->select('*')->from('calendar')->where('UserId',$row->Id);
		$query = $this->db->get();
		
		if (!$query->num_rows() > 0) {
        	// die("There are no subjects in the database.");
        	return;
    	}
    	$data = array();
    	$i = 0;
    	foreach ($query->result() as $row) 
    	{
    		$date = date('M-d-Y',strtotime($row->Date));
    		$arr = explode('-', $date);
    		$converted_date = $this->getMonth($arr[0])."-".(int)$arr[1]."-".$arr[2];
    		$data[$i] = array(
    			'Date' => $converted_date,
    			'Event' => $row->Event 
    		);
    		$i++;
    	}
    	return $data;
	}

	function getMonth($mon)
	{
		if ($mon == "Jan") {
			return "January";
		}
		else if ($mon == "Feb") {
			return "February";
		}
		else if ($mon == "Mar") {
			return "March";
		}
		else if ($mon == "Apr") {
			return "April";
		}
		else if ($mon == "May") {
			return "May";
		}
		else if ($mon == "Jun") {
			return "June";
		}
		else if ($mon == "Jul") {
			return "July";
		}
		else if ($mon == "Aug") {
			return "August";
		}
		else if ($mon == "Sep") {
			return "September";
		}
		else if ($mon == "Oct") {
			return "October";
		}
		else if ($mon == "Nov") {
			return "November";
		}
		else if ($mon == "Dec") {
			return "December";
		}
		return "";
	}
}
?>