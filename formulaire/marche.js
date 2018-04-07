var nom;
var prenom;
var adresse;
var classe;
var boutonradios;
var civilité;
var activité;
var activités="";
var app;
var apple
var applee="";
var compteur=0;
var nomtableau=[]
var graphique=Highcharts.chart("graph",{
	chart: {
	type:"bar"},
	title:{
	text:"Premier test"},
	xAxis:{
	categories:["Apples","Bananas","Orange"]},
	yAxis:{
		title:{
		texr:"fruit eaten"}
	},
	series:[{
		name:"Jane",
		data:[1,0,4]
	},{
		name:"john",
		data: [5,7,3]
	}]
})
function debut(){
	var bouton=document.getElementById("bouton");
bouton.addEventListener("click",forme);
var bouton1=document.getElementById("bouton1");
bouton1.addEventListener("click",graph);}
var bouton2=document.getElementById("submit");
bouton2.



function forme (){
activités="";

 nom=document.getElementById("nom").value;
 numero=document.getElementById("num").value;
 prenom=document.getElementById("prenom").value;
adresse=document.getElementById("adresse").value;	
classe=document.getElementById("classe").value;
boutonradios=document.getElementsByName("civilité")
for(var i=0;i<boutonradios.length;i++){
if(boutonradios[i].checked==true)
civilité=boutonradios[i].value;}
activité=document.getElementsByName("activité extérieur");
for(var e=0;e<activité.length;e++){
if(activité[e].checked==true)
activités=activités+activité[e].value;}
stockage(compteur,nom,prenom,numero,adresse,classe,activités,civilité);
}	


function stockage(k,a,b,c,d,e,f,g){
	nomtableau[k]={};
	nomtableau[k].nom=a;
	nomtableau[k].prenom=b;
	nomtableau[k].numero=c;
	nomtableau[k].adresse=d;
	nomtableau[k].classe=e;
	nomtableau[k].activité=f;
	nomtableau[k].civilité=g;
	compteur=compteur+1;
	
	
}

function graph (){
	graph=document.getElementById("graph");
graph.innerHTML=graphique;}








window.addEventListener("load",debut);