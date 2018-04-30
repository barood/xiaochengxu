<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Sentencedata extends CI_Controller {
  public function get_sentence_list()
  {
    $this->load->model('sentence_model');
    $result=$this->sentence_model->get_list();
    echo json_encode($result);
  }
}
?>