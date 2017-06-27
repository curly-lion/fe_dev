// var arr = [1,5,20,40,11];


// // arr.sort(function(a,b){
// // 	//return a-b;//从小到大排序  b-a大到小排序
// // 	//return Math.random()-0.5;

// // })
// console.log(sortArray(arr));


//a代表要引入的模块 sortArray表示要引入的参数
require(['a'],function(sortArray){
	var arr = [1,5,20,40,11];
	console.log(sortArray(arr));

})


//用require定义时要必须引入一个模块
// define(function(require){
// 	console.log('aaa');
// 	var sortArray = require('a');

// }

//seaJS  都是进行模块化加载 
define(function(require){
	var sortArray = require('a');//用的时候再引用

})