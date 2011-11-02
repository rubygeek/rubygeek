<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Recipes extends CI_Controller {

  public function __construct() {
    parent::__construct();
    $this->load->model('recipe');
    $this->load->library('pagination');
  }

	public function index() {
	  $data['page_title'] = "Index";
	  $this->load->view("header", $data);

    $recipe_list = new Recipe();
    $total_rows = $recipe_list->count();
   
    $recipe_list->order_by('title');

    $data["recipes"] = $recipe_list->get(5, $offset)->all;

    $config['base_url'] = site_url("recipes");
    $config['total_rows'] = $total_rows;
    $config['per_page'] = '5';
    $config['uri_segment'] = 2;
    $this->pagination->initialize($config);

    $this->load->view("recipes/index", $data);
    $this->load->view('footer');
	}
	
	public function new_recipe() {
	  $data['page_title'] = "- Create a Recipe";
	  $this->load->view("header", $data);
	  $this->load->model('tag_model');
	  $data['tags'] = $this->tag_model->get_all();
		$this->load->view('recipes/new_recipe');
		$this->load->view('footer');
	}
	
	function create_recipe() {
		  $this->load->model("recipe_model");
		  $this->recipe_model->insert_recipe();
		  $this->load->view('recipes/show_recipe');
	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
