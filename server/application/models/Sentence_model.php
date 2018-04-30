<?php
	use QCloud_WeApp_SDK\Mysql\Mysql as DB;
	class Sentence_model extends CI_Model{
		public function get_list(){
			return DB::select('sentence_table', ['*']);
		}
	}
?>