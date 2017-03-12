<?php 
	$id = $_POST["id"];
	$url='https://api.douban.com/v2/book/'.$id;
	$html = file_get_contents($url);
	echo $html;
?>