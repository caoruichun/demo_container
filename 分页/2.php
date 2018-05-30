<?php 

$data = [
	["img"=>"images/1.jpg","content"=>"非常不错，我很喜欢1"],
	["img"=>"images/2.jpg","content"=>"太差了，肥肠粉不好2"],
	["img"=>"images/3.jpg","content"=>"不好的用户体验3"],
	["img"=>"images/4.jpg","content"=>"还行，凑合4"],
	["img"=>"images/5.jpg","content"=>"一般吧5"],
	["img"=>"images/6.jpg","content"=>"。。。6"],
	["img"=>"images/1.jpg","content"=>"很差，不评价7"],
	["img"=>"images/2.jpg","content"=>"凑合8"],
	["img"=>"images/3.jpg","content"=>"还行，能用9"],
	["img"=>"images/4.jpg","content"=>"一般般10"]
];

// 接受页码
$page = $_GET['page'];

// 1页： 01
// 2页： 23
// 3页： 45
// 4页： 67
// (当前的页码-1)*每页的数据条数,每页的数据条数
$arr = array_slice($data, $page*2-2, 2);

// 将php的数组转换成json数据
echo json_encode($arr);

