var nom;
var prenom;
var classe;
var boutonradio1;
var civilite;
var boutonradio2;
var activite;


function debut(){
	var bouton1=document.getElementById("valider");
	bouton1.addEventListener("click",formulaire);

}


function formulaire(){
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var classe = document.getElementById("classe").value;
	var boutonradio1 = document.getElementsByName('civilite');
	for (var i = 0; i < boutonradio1.lenght;i++){
		if(boutonradio1[i].checked==true){
			civite = boutonradio1[i].value;
		}
	}
	var boutonradio2 = document.getElementsByName('activite');
	for (var e = 0; e < boutonradio2.lenght;e++){
		if(boutonradio2[e].checked==true){
			civite = boutonradio2[e].value;
		}
	}
	
	alert(nom+prenom+classe+civilite+activite);
}


window.addEventListener("load",debut)
