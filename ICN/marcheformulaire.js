var nom;
var prenom;
var adresse;
var num;
var tel;
var boutonradio1;
var civilite;
var boutonradio2;
var activite;


function debut(){
	var bouton1=document.getElementById("valider");
	bouton1.addEventListener("click",formulaire);

}


function formulaire(){
	nom = document.getElementById("nom").value;
	prenom = document.getElementById("prenom").value;
	adresse = document.getElementById("adresse").value;
	num = document.getElementById("num").value;
	tel = document.getElementById("tel").value;
	boutonradio1 = document.getElementsByName("civilite");
	for (var i = 0; i < boutonradio1.lenght;i++){
		if(boutonradio1[i].checked==true){
			civite = boutonradio1[i].value;
		}
	}
	boutonradio2 = document.getElementsByName("activite");
	for (var e = 0; e < boutonradio2.lenght;e++){
		if(boutonradio2[e].checked==true){
			civite = boutonradio2[e].value;
		}
	}
	
	alert(nom+prenom+adresse+num+tel+activite);
}


window.addEventListener("load",debut)
