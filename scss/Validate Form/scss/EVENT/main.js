function countWord(){
	var input=document.getElementById("inputa").value,
	count=input.split(" ").length;
	document.getElementById("count").innerHTML=count;
}
// đếm ký tự thì bỏ split("")đi
function Submit(){
	alert("tah")
}
function getKeydown(){
	// r selected=document.getElementById("item2").value;
	alert("oK!");
}
function setKeyup(){
	//var selected=document.getElementById("meship").value;
	alert("OK!");
}
function getChange(){
	var selected=document.getElementById("item1").value;
	alert(selected)
}
function getMouseover(){
	document.getElementById("item").style.color="green";
}
function setMouseout(){
	document.getElementById("item").style.color="red";
}
function getFocus(){
	document.getElementById("input").style.background="#f0f";
}
function setFocus(){
	document.getElementById("input").style.background="#f00";
}