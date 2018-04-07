var nom;
var prénom;

function debut(){
	var bouton1=document.getElementById("valider");
	bouton1.addEventListener("click",formulaire);

}


function formulaire(){
	var nom = document.getElementById("nom").value;
	var prénom = document.getElementById("prénom").value;
	alert(nom+prénom)
}


window.addEventListener("load",debut)
