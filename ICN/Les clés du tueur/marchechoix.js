
function debut(){
var bouton1=document.getElementById("choix1");
 bouton1.addEventListener("click",gagne);
 var bouton2=document.getElementById("choix2");
 bouton2.addEventListener("click",perdu);
 var bouton3=document.getElementById("choix3");
 bouton3.addEventListener("click",perdu);
 var bouton4=document.getElementById("choix4");
 bouton4.addEventListener("click",perdu);
  var bouton5=document.getElementById("choix5");
 bouton5.addEventListener("click",perdu); 
}


function gagne(){
	window.location="gagne.html";
}

function perdu(){
	window.location.href="perdu.html";
}

window.addEventListener("load",debut)

/* Fait par Aodren Roth */