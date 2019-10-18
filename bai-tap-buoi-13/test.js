
//BT1
var changeColor = function(){
	document.getElementById("one").style.color="green";
	document.getElementById("two").style.color="yellow";
	document.getElementById("three").style.color="red";
}

//BT2
var changeBgColor = function(color){
	document.body.style.backgroundColor =color;
}

//BT3
var copyContent = function(id1,id2){
	document.getElementById(id1).innerHTML=document.getElementById(id2).textContent;
}

//BT4
var changeFontSize= function(x){
	document.getElementById("page").style.fontSize = `${x}px`;
}

//BT5
var increaseFontSize=function(id){
	let currentFontSize =getComputedStyle(document.getElementById(id)).fontSize;//////lấy fontsize từ id
	let getNumberFontSize=Number(currentFontSize.replace('px',""));//// đưa giá trị dạng px về number
	if(getNumberFontSize<30)										////kiểm tra fontsize <30
	document.getElementById(id).style.fontSize = `${getNumberFontSize+1}px`;
}

//BT6
var decreaseFontSize=function(id){
	let currentFontSize =getComputedStyle(document.getElementById(id)).fontSize;//////lấy fontsize từ id
	let getNumberFontSize=Number(currentFontSize.replace('px',""));//// đưa giá trị dạng px về number
	if(getNumberFontSize>10)										////kiểm tra fontsize >10
	document.getElementById(id).style.fontSize = `${getNumberFontSize-1}px`;
}


