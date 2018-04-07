
var nouveaugraphique = Highcharts.chart(maps);
var compteur=0;
var nomtableau=[];
var nom;
var prenom;
var adresse;
var num;
var tel;
var boutonradio;
var civilite;
var caseacocher;
var appli;



function debut(){
	var bouton1=document.getElementById("valider");
	bouton1.addEventListener("click",formulaire);

}

function formulaire(){
	appli="";
	nom = document.getElementById("nom").value;
	prenom = document.getElementById("prenom").value;
	adresse = document.getElementById("adresse").value;
	num = document.getElementById("num").value;
	tel = document.getElementById("tel").value;
	boutonradio = document.getElementsByName("civilite")
	for (var i = 0; i < boutonradio.length;i++){
		if(boutonradio[i].checked==true){
			civilite = boutonradio[i].value;
		}
	}
	caseacocher = document.getElementsByName("appli");
	for (var e = 0; e < caseacocher.length;e++){
		if(caseacocher[e].checked==true){
			appli = appli+caseacocher[e].value;
		}
	}
	
	
	
	stockage(compteur,nom,prenom,adresse,num,tel,civilite,appli);
}

function stockage(k,a,b,c,d,e,f,g){
	nomtableau[k]={};
	nomtableau[k].nom=a;
	nomtableau[k].prenom=b;
	nomtableau[k].adresse=c;
	nomtableau[k].num=d;
	nomtableau[k].tel=e;
	nomtableau[k].civilite=f;
	nomtableau[k].appli=g;
	compteur=compteur+1;
}




window.addEventListener("load",debut)
