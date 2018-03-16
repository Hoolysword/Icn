var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var I=0;
function debut(){
    image1=document.getElementById("image1");
    image2=document.getElementById("image2");
    image3=document.getElementById("image3");
    image4=document.getElementById("image4");
    image5=document.getElementById("image5");
    image6=document.getElementById("image6");
     var bouton=document.getElementById("bouton");
     bouton.addEventListener("click",changelampe);
     var bouton1=document.getElementById("bouton1");
     bouton1.addEventListener("click",changelampe1);
     var bouton2=document.getElementById("bouton2");
     bouton2.addEventListener("click",changelampe2);
     var bouton3=document.getElementById("bouton3");
     bouton3.addEventListener("click",changelampe3);
     
    }
function changelampe(){
   if(image1.style.opacity==1){
       image1.style.opacity=0;
       image4.style.opacity=1;
    
}
    else{
        image1.style.opacity=1;
        image4.style.opacity=0;
       
 }
    if(image2.style.opacity==1){
        image2.style.opacity=0;
        image5.style.opacity=1;
   
     }
        else{
         image2.style.opacity=1;
         image5.style.opacity=0;
       
     }
}
function changelampe1(){
    if(image2.style.opacity==1){
    image2.style.opacity=0;
    image5.style.opacity=1;
    
 }
    else{
     image2.style.opacity=1;
     image5.style.opacity=0;

 }
     if(image3.style.opacity==1){
     image3.style.opacity=0;
     image6.style.opacity=1;
     
  }
     else{
      image3.style.opacity=1;
      image6.style.opacity=0;
 
  }
}
function changelampe2(){
    if(image1.style.opacity==1){
    image1.style.opacity=0;
    image4.style.opacity=1;
    
 }
    else{
     image1.style.opacity=1;
     image4.style.opacity=0;
    
 }
     if(image3.style.opacity==1){
     image3.style.opacity=0;
     image6.style.opacity=1;
     
  }
     else{
      image3.style.opacity=1;
      image6.style.opacity=0;
     
  }
}
function changelampe3(){
    if(image3.style.opacity==1){
    image3.style.opacity=0;
    image6.style.opacity=1;
    I=I+1;
 }
    else{
    image3.style.opacity=1;
    image6.style.opacity=0;
    I--;
 }
 if(I>=1){
    resultat();
 }
} 
function resultat(){
    var d3=document.getElementById("d3");
    d3.style.opacity=1;
}
    window.addEventListener("load",debut);