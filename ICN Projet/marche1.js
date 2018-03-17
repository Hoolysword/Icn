function debut(){
    var div=document.getElementById("div2");
    div.addEventListener("click",marche);
    var div1=document.getElementById("div3");
    div1.addEventListener("click",marche1);
}
function marche(){
   var X=window.prompt("Entrer le Mot de Passe");
    if(X=="FIND ME"){
        document.location.href="Icn doc4.html";
    }
}
function marche1(){
    var X=window.prompt("Entrer le Mot de Passe");
     if(X=="FIND ME"){
         document.location.href="Icn doc6.html";
     }
 }
window.addEventListener("load",debut);