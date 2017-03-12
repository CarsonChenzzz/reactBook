<?php
	header('Access-Control-Allow-Origin: *');
	$url='https://api.douban.com/v2/book/search?tag=中国&count=100';
	$html = file_get_contents($url);
	echo $html;
?>