<?
include_once("MVC_View.class.php");

class MVC_Controller {
    var $model;
    var $action;
    var $view;

    function MVC_Controller() {
        $this->view = new MVC_View();
    }

    function doAction( $params = array() ) {
       $method=$_POST['action'];
       // print "Action: $method<br>";
        if (empty($method)) {
            $this->defaultMethod($params);
        } else if (method_exists($this, $method)) {
            call_user_func(array(&$this, $method), $params);
        } else {
            $this->nonexisting_method($method);
        }
    }

    function defaultMethod() {
        print "This is a default action. <br>";
    }

    function nonexisting_method($method) {
        print "Sorry, that method '$method' does not exist.<br>";
    }

}


?>