<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/7/23
 * Time: 19:04
 */
//header("Content-Type: text/html; charset=UTF-8");
//header('Content-type:text/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("SET NAMES utf8");

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
echo "连接成功";

$sql = "SELECT id , name FROM the_nine_families";
//$sql = 'SELECT id,name FROM aaa';
$result = $conn->query($sql);
//echo $result;
echo "<br>";
print_r($result);
echo "<br>";
$rs = $result->fetch_all();
print_r($rs);
echo json_encode($rs);
echo "<br>";

if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
//        echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
        echo "<br>";
        echo $row['id'];
        echo "<br>";
        print_r($row);
        echo "<br>";
//        print_r(json_encode($row));
//        echo json_encode($row);
    }
} else {
    echo "0 结果";
}

$p = new PDO('mysql:host=127.0.0.1;port=3306;
dbname=aaa;charset=utf8','root');

$sql =
    'SELECT
      id,name
    FROM fen_lei_ul';

$rs = $p->query($sql, PDO::FETCH_OBJ);
//print_r($sql);
echo "<br>";
print_r($rs);
echo "<br>";

$r = $rs->fetchAll();
print_r($r);
//echo json_encode($r);
//print_r(json_encode($r));