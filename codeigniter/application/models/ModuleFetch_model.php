<?php
class ModuleFetch_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('ModuleScores_model');
	}

	function get_assign_mid()
	{
		//---assign_mid ---//
		$this->db->where('ClassId',$block->Id);
		$this->db->where('Sem','Midterm');
		$query_module = $this->db->get('mod_assign');
		$assign_mid_num = $query_module->num_rows();
		$assign_items = $query_module->result_array();

		for ($x=0; $x < $assign_mid_num; $x++) 
		{ 
			$assign_mid_items[$x] = $assign_items[$x]["AssignItems"];
		}

		$this->db->where('StudId',$row->Id);
		$this->db->where('Sem','Midterm');
		$query_assign_score = $this->db->get('assignment');
		$assign_score = $query_assign_score->result_array();

		for ($y=0; $y < $query_assign_score->num_rows(); $y++) 
		{ 
			$assign_mid_score[$row->Id][$y] = $assign_score[$y]["Score"];
		}

		$assign = array(
			'assign_mid_num' => $assign_mid_num,
			'assign_mid_items' => $assign_mid_items, 
			'assign_mid_score' => $assign_mid_score, 
		);
		return $assign;
	}
}
?>
