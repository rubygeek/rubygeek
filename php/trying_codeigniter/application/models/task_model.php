class Task_model extends CI_Model {

    var $title   = '';
    var $date    = '';

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
    
    function get_last_ten_entries()
    {
        $query = $this->db->get('tasks', 10);
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
