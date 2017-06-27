// function add(a,b){
// 	return a+b;

// }

//定义模块
define(['b'],function(isArray){

function  sortArray(arr){
	if(isArray(arr)){
		return arr.sort(function(a,b){
		return a-b;//从小到大排
	});

	}else{
		return '不是数组';
	}
}
return sortArray;




})