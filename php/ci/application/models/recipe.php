<?php

class Recipe extends Datamapper {

   public $has_many = array('tag'); 

    public function __construct() {
        // Call the Model constructor
        parent::__construct();
    }
/*    
    function get_all()
    {
        $query = $this->db->get('recipes');
        return $query->result();
    }

    function insert_recipe() {
        $recipe = $_POST['recipe'];
        $this->title        = $recipe['title'];
        $this->description  = $recipe['description'];
        $this->instructions = $recipe['instructions'];
        $this->source       = $recipe['source'];
        $this->servings     = $recipe['servings'];
       // $this->date    = time();

        $this->db->insert('recipes', $this);
    }

    function update_entry() {
      $recipe = $_POST['recipe'];
      $this->title       = $recipe['title'];
      $this->description = $recipe['description'];
      $this->instructons = $recipe['instructions'];
      $this->source      = $recipe['source'];
      $this->serves      = $recipe['serves'];

      $this->db->update('recipes', $this, array('id' => $_POST['recipe']['id']));
    }
 */
}
