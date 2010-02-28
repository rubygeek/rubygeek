<?
include_once("DB.php");

class MVC_Model {
    var $result;
    var $db;

    function MVC_Model() {
        // db connection here
        // db name: links,
        // user: links
        // pass:links
        $dsn = "mysql://links:links@localhost/links";
        $this->db = DB::connect($dsn);
        $this->result = null;
    }

    function fetchToArray() {
        $result_array = array();
        while($row = $this->result->fetchRow(DB_FETCHMODE_ASSOC) ) {
            $result_array[] = $row;
        }
        return $result_array;
    }


}


?>