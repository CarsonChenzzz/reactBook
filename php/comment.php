<?php  
$host = 'bdm267573256.my3w.com';
$database = 'bdm267573256_db';
$username = 'bdm267573256';
$password = '0510ming';
$id = $_GET["id"];//要查找的用户名，一般是用户输入的信息
// $insertAuthor = $_POST("author");
// $insertText = $_POST("text");

$connection = mysql_connect($host, $username, $password);//连接到数据库
mysql_query("set names 'utf8'");//编码转化
if (!$connection) {
    die("could not connect to the database.\n" . mysql_error());//诊断连接错误
}
$selectedDb = mysql_select_db($database);//选择数据库
if (!$selectedDb) {
    die("could not to the database\n" . mysql_error());
}
$id = mysql_real_escape_string($id);//防止SQL注入
$query = "select * from bookComment where book='$id'";//构建查询语句
$result = mysql_query($query);//执行查询
if (!$result) {
    die("could not to the database\n" . mysql_error());
}

$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);

// //添加记录
// $insertAuthor = mysql_real_escape_string($insertAuthor);//防止SQL注入
// $insertText = mysql_real_escape_string($insertText);//防止SQL注入
// $insertSql = "insert into comment(id, author, age) values('$book', '$insertName', '$insertText')";
// $result = mysql_query($insertSql);
// echo $result . "\n";

// //更新记录
// $updateSql = "update user set age = 19 where name='$insertName'";
// $result = mysql_query($updateSql);
// echo $result . "\n";

// //删除记录
// $deleteSql = "delete from user where age = 19";
// $result = mysql_query($deleteSql);
// echo $result . "\n";

mysql_close($connection);//关闭连接
?>