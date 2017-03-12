<?php  
$host = 'bdm267573256.my3w.com';
$database = 'bdm267573256_db';
$username = 'bdm267573256';
$password = '0510ming';
$book = $_POST["id"];
$insertAuthor = $_POST["author"];
$insertText = $_POST["text"];


$connection = mysql_connect($host, $username, $password);//连接到数据库
mysql_query("set names 'utf8'");//编码转化
if (!$connection) {
    die("could not connect to the database.\n" . mysql_error());//诊断连接错误
}
$selectedDb = mysql_select_db($database);//选择数据库
if (!$selectedDb) {
    die("could not to the database\n" . mysql_error());
}

$insertAuthor = mysql_real_escape_string($insertAuthor);//防止SQL注入
$insertText = mysql_real_escape_string($insertText);//防止SQL注入
$insertSql = "insert into bookComment(book,author,text) values('$book', '$insertAuthor', '$insertText')";
$result = mysql_query($insertSql);
echo $result . "\n";

?>