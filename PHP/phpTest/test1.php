<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/7/23
 * Time: 2:10
 */
echo"<p>hello php</p>";
$x = 1;
$y = 4;
echo $x;

function a(){
    global $y;
    echo $y;
    $GLOBALS['y'] = $GLOBALS['y'] +$GLOBALS['x'];
}
a();

echo $y;

echo "<br>";
function b(){
    static$c = 1;
    echo $c;
    $c++;
}
b();
b();

print "<br>php很有趣";

$arr = array("奔驰","宝马");
print "<br>$arr[1]" ;
//print $arr;
//echo $arr;
print_r($arr);

var_dump($y);
$str = "abc";
var_dump($str);
print_r("$str<br>");
print($str);