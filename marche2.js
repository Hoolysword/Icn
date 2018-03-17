var contenue;
function debut(){
	var bouton0=document.getElementById('bouton0');
	bouton0.addEventListener("click",random);
	var bouton1=document.getElementById('bouton1');
	bouton1.addEventListener("click",random1);
	var bouton2=document.getElementById('bouton2');
	bouton2.addEventListener("click",random2);
	var bouton3=document.getElementById('bouton3');
	bouton3.addEventListener("click",random3);
	var bouton4=document.getElementById('bouton4');
	bouton4.addEventListener("click",random4);
	var bouton5=document.getElementById('bouton5');
	bouton5.addEventListener("click",random5);
	var bouton6=document.getElementById('bouton6');
	bouton6.addEventListener("click",random6);
	var bouton7=document.getElementById('bouton7');
	bouton7.addEventListener("click",random7);
	var bouton8=document.getElementById('bouton8');
	bouton8.addEventListener("click",random8);
	var bouton9=document.getElementById('bouton9');
	bouton9.addEventListener("click",random9);
	var boutonvalide=document.getElementById('boutonvalide');
	boutonvalide.addEventListener("click",random10);
}
function random(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="0";
}
function random1(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="1";
}
function random2(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="2";
}
function random3(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="3";
}
function random4(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="4";
}
function random5(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="5";
}
function random6(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="6";
}
function random7(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="7";
}
function random8(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="8";
}
function random9(){
contenue=document.getElementById("contenue")
contenue.innerHTML+="9";
}
function random10(){
if (contenue.innerHTML==548){
	document.location.href="mur.html";
}
else{
	contenue=document.getElementById("contenue")
	contenue.innerHTML=" ";
}
}
window.addEventListener("load",debut);