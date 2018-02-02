var somme=100;


function debut(){
	var bouton1	=document.getElementById('bouton');
bouton1.addEventListener("click",random);
	
}
function random(){
	if (somme<10){
	document.getElementById('button').disabled = true; }
	somme=somme-10;
	x=Math.round(Math.random()*9);
	y=Math.round(Math.random()*9);
	z=Math.round(Math.random()*9);
document.getElementById('nombrea').innerHTML = x;
document.getElementById('nombreb').innerHTML = y;// les document.getElementById ce mettent toujours dans une fonction et avec des simple quote(') et pas des double quote (")
document.getElementById('nombrec').innerHTML = z;
 if (x==y && y==z){
somme=somme+200
alert("vous avez trois nombre identiques vous gagnez 200")
}

else if (x==y || x==z){
somme=somme+40 
alert("vous avez deux nombre identiques vous gagnez 40")
}
else if (y==z){
somme=somme+40
alert("vous avez deux nombre identiques vous gagnez 40")
}



document.getElementById('somme').innerHTML = somme;
}


window.addEventListener("load",debut);