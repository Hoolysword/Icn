function debut(){
var bouton=document.getElementById("bouton");
 bouton.addEventListener("click",changelampe);
 var bouton1=document.getElementById("bouton1");
 bouton.addEventListener("click",changelampe1);
 var bouton2=document.getElementById("bouton2");
 bouton.addEventListener("click",changelampe2);
 var bouton3=document.getElementById("bouton3");
 bouton.addEventListener("click",changelampe3);
}
function changelampe(element)
{
  var x = element.getElementsById("image0");
  var v = x.getAttribute("src");
  if(v == "Redstone_lamp_shutdown.png")
    v = "Redstone_lamp_.jpg");
  else
   v = "Redstone_lamp_shutdown.png");
  x.setAttribute("src", v);	
  var a = element.getElementsById("image1");
  var b = x.getAttribute("src");
  if(b == "Redstone_lamp_shutdown.png")
    b = "Redstone_lamp_.jpg");
  else
   b = "Redstone_lamp_shutdown.png");
  x.setAttribute("src", b);	
}










window.addEventListener("load",debut)
