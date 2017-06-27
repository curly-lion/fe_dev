var oTabBox = document.getElementById('tab-box'),
	 aLi = oTabBox.getElementsByTagName('li');
	 aDiv = getClass('tab-item',oTabBox);

	 for(var i=0;i<aLi.length;i++){
	 	aLi[i].index = i;
	 	aLi[i].onclick = function(){
	 		//console.log('jshhs');

	 		//把所有classname display 清空
	 		for(var j=0; j<aDiv.length;j++){
	 			aDiv[j].style.display = 'none';
	 			aLi.classsName = '';

	 		}
	 		this.classsName = 'active';
	 		aDiv[this.index].style.display = 'block';
	 	}
	 }