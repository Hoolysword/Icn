
function debut(){
var bouton1=document.getElementById("appart1");
 bouton1.addEventListener("click",appartement1);
 var bouton2=document.getElementById("appart2");
 bouton2.addEventListener("click",appartement2);
 var bouton3=document.getElementById("appart3");
 bouton3.addEventListener("click",appartement3);
 var bouton4=document.getElementById("appart4");
 bouton4.addEventListener("click",appartement4);
  var bouton5=document.getElementById("appart5");
 bouton5.addEventListener("click",appartement5); 
 var bouton6=document.getElementById("appart6");
 bouton6.addEventListener("click",appartement6);
 var bouton7=document.getElementById("choix");
 bouton7.addEventListener("click",choix);
}


function appartement1(){
	window.location="appart1.html";
}

function appartement2(){
	window.location.href="appart2.html";
}

function appartement3(){
	window.location.href="appart3.html";
}

function appartement4(){
	window.location.href="appart4.html";
}

function appartement5(){
	window.location.href="appart5.html";
}

function appartement6(){
	window.location.href="appart6.html";
}

function choix(){
	window.location.href="choix.html";
}

window.addEventListener("load",debut)

/* Fait par Aodren Roth */