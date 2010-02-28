<?
include_once( 'smarty/Smarty.class.php' );

class MVC_View {
    var $template;
    var $template_dir;

    function MVC_View() {
        $this->template = new Smarty();


        $smarty_dir = "smarty"; //NO trailing slash!
        $smarty_template_dir = "$smarty_dir/templates/"; //NO trailing slash!
        $smarty_compile_dir = "$smarty_dir/templates_c"; //NO trailing slash!


        $smarty = new Smarty;
        $this->template->compile_check = TRUE;
        $this->template->template_dir = $smarty_template_dir;
        $this->template->compile_dir =  $smarty_compile_dir;

        $this->setTemplateDir();
    }

    function setTemplateDir($dir = "") {
        $this->template_dir = $dir;
    }

    function assign($name, $data) {
        $this->template->assign($name, $data);
    }

    function display($template = "") {


        print $this->fetch($template);
    }

    function fetch($template = "") {
        if (empty($template)) {
            exit("No template assigned");
        }
        $this->template->caching = 0;
        return $this->template->fetch(  $this->template_dir . "/" . $template . '.tpl');
    }

}
?>