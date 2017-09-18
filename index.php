<?php
  header('content-type:text/html; charset=utf8;');
//include('./01.html');
//echo '<div>主页内容</div>';
//include('02.html');
//echo 123;
//include('./views/main/login.html');
//var_dump($_SERVER);
//定义默认的目录
$dir='main';
//定义默认的页面
$filename='index';
//判断输入的地址栏的信息是否在其中，处理url路径
if(array_key_exists('PATH_INFO',$_SERVER)){
//获取信息
    $path=$_SERVER['PATH_INFO'];
//   从第一个截取
    $str=substr($path,1);
//分割字符串
    $ret=explode('/',$str);
//    判断是否是两层路径
    if(count($ret)==2){
//    是两层路径
//覆盖默认路径
            $dir=$ret[0];
//            覆盖默认文件
        $filename=$ret[1];
    }else{
//    一层路径返回登录页面
        $filename='login';
    }
}
//嵌入子页
include('./views/'.$dir.'/'.$filename.'.html');
?>