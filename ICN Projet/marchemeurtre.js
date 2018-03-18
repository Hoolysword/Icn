function debut(){
 var bouton1=document.getElementById("choix");
 bouton1.addEventListener("click",choix); 
}


function choix(){
	window.location.href="choix.html";
}

window.addEventListener("load",debut)

<!-- Fait par Aodren Roth -->