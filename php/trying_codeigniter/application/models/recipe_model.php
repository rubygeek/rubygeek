class Recipe_model extends CI_Model {

    var $title   = '';
    var $ingredients    = '';
    var $instructions    = '';
    var $serves = 0;

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
    
    function get_last_ten_recipes()
    {
        $query = $this->db->get('recipes', 10);
        return $query->result();
    }

    function insert_entry()
    {
        $this->title   = $_POST['title']; // please read the below note
        $this->date    = time();

        $this->db->insert('tasks', $this);
    }

    function update_entry()
    {
        $this->title   = $_POST['title'];
        $this->date    = time();

        $this->db->update('tasks', $this, array('id' => $_POST['id']));
    }

}
