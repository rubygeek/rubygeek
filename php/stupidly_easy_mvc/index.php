<?

include_once('ListController.class.php');


//dump($_POST['linksList_action']);

$params = array();

$params['linkKey'] =  $linksList_key;

$c = new ListController($linksList_action, $params);


?>