<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Recipe extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index() {
	  $data['page_title'] = "Index";
	  $this->load->view("header", $data);
    $this->load->model("recipe_model");
    $data["recipes"] = $this->recipe_model->get_all();
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