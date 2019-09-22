<?php


$login = $_GET['login'];
$pass = $_GET['pass'];

if($login == '' || $pass == '') {
  echo 'error, enter all the field';
  return;
}elseif ($login != 'login' || $pass != '123') {
  echo 'this user not found';
  return;
}else {
  echo 'welcome';
}

//if($login != 'login' || $pass != '123') {
//  echo 'this user not found';
//  return;
//}else {
//  echo 'welcome';
//}