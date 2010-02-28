<?
include_once("MVC_Model.class.php");


class ListModel extends MVC_Model {

    function ListModel() {
         parent::MVC_Model();
    }

    function getLinks() {
        $sql = "SELECT * from links";
        $this->result = $this->db->query($sql);
        return $this->fetchToArray();
    }


    function getlink() {

        $linkKey = $_POST['id'];

        $sql = "SELECT * FROM links WHERE id=".$this->db->quote($linkKey);
        $this->result = $this->db->query($sql);

        return $this->result->fetchRow();
    }

    function saveLink() {

        $link_id = $_POST['id'];
        if ($link_id == null) {
            $sql = "INSERT INTO links SET link=".$this->db->quote($_POST['link']).
                                        ", description=".$this->db->quote($_POST['description']);
        } else {
            $sql = "UPDATE links SET link=".$this->db->quote($_POST['link']).
                                    ", description=".$this->db->quote($_POST['description']) .
                                    " WHERE id=".$this->db->quote($_POST['id']);
        }

        $this->db->query($sql);

    }



} // end of ListModel


?>