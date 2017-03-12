<?php
	$tag = $_POST["tag"];
	$url='https://api.douban.com/v2/book/search?tag='.$tag;
	$html = file_get_contents($url);
	echo $html;
?>