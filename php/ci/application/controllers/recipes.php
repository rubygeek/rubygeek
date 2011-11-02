<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Recipes extends CI_Controller {

  public function __construct() {
    parent::__construct();
    $this->load->model('recipe');
    $this->load->model('tag');
    $this->load->library('pagination');
  }

	public function index($offset=0) {
    // Header
	  $data['page_title'] = "Index";
	  $this->load->view("header", $data);

    // Get recipe data
    $recipe_list = new Recipe();
    $total_rows = $recipe_list->count();
    $recipe_list->order_by('title');
    $data["recipes"] = $recipe_list->get(5, $offset)->all;

    // Pagination
    $config['base_url'] = site_url("recipes");
    $config['total_rows'] = $total_rows;
    $config['per_page'] = '5';
    $config['uri_segment'] = 2;
    $this->pagination->initialize($config);
    $data['pagination'] = $this->pagination->create_links();

    // Body of page
    $this->load->view("recipes/index", $data);

    // Footer
    $this->load->view('footer');
	}
	
	public function new_recipe() {
    // Get data
    $tag = new Tag();
    $data['page_title'] = "- Create a Recipe";
    $data['tags'] = $tag->get()->all;

    // Header
    $this->load->view("header", $data);

    // Body of page
    $this->load->view('recipes/new_recipe');

    // Footer
    $this->load->view('footer');
  }
	
	function create_recipe() {
      $recipe = new Recipe();
      $this->db->insert('recipes', $_POST['recipe']);
      $recipe = $recipe->where('title', $_POST['recipe']['title'])->get();

      $tags = explode(" ",$_POST['tags']);
      // create tag entries in db, save relationship
      // would be nice to put in a model method maybe?
      foreach($tags as $tag) {
        echo "now creating $tag";
        $t = new Tag();
        $t->where('name', $tag)->get();
        if (!$t->exists()) {
          // save only if new
          $t->name = $tag;
          $t->save();
        }
        $recipe->save($t);
      }

		  $this->load->view('recipes/thankyou');
	}

  function show_recipe() {

    $id = $this->uri->segment(3, NULL);
    $recipe = new Recipe();
    $data['page_title'] = "- View a Recipe";
    $data['recipe'] = $recipe->get_by_id($id);
    $data['tags'] = $recipe->tag->all;
    // Header
    $this->load->view("header", $data);

    // Body of page
		$this->load->view('recipes/show_recipe');

    // Footer
    $this->load->view('footer');

  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
