<?
include_once("MVC_Controller.class.php");

include_once("ListModel.class.php");

class ListController extends MVC_Controller {

    function ListController() {
        parent::MVC_Controller();
        $this->model = new ListModel();
        $this->view->setTemplateDir('list');

        $this->doAction();
    }

    function defaultMethod() {
        $this->displayLinks();
    }


    function displayLinks() {

        $linkData = $this->model->getLinks();
        $this->view->assign('linkData', $linkData);
        $this->view->display('displayLinks');
    }

    function showEditForm() {

        $this->view->assign("linkData",  $this->model->getLink() );
        $this->view->display('link_ae');
    }

    function showAddForm() {

        $this->view->display('link_ae');
    }

    function saveLink() {
        $this->model->saveLink();
        $this->displayLinks();
    }

}


?>