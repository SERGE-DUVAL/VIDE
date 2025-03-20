
function addition(){
    var Nombre1=document.getElementById("n1").value;
var Nombre2=document.getElementById("n2").value;
var cadre=document.getElementById("cadre");
var s=parseInt(Nombre1)+parseInt(Nombre2);
 var i=10;
     cadre.innerHTML="";
     cadre.innerHTML+=s;
        
}
function multiplication(){
var Nombre1=document.getElementById("n3").value;
var Nombre2=document.getElementById("n4").value;

var s=parseInt(Nombre1)*parseInt(Nombre2);
document.getElementById("n5").value=s;
        
}
function bonjour(){
    alert(Nombre1);
}
function choix(){
    var Nombre1=document.getElementById("no1").value;
    var Nombre2=document.getElementById("no2").value;
    let valeur=document.getElementById("se").value;  
    switch(valeur){
      case "a":
          var s=parseInt(Nombre1)+parseInt(Nombre2);
       break;
       case "m":
          var s=parseInt(Nombre1)*parseInt(Nombre2);
        break;
          default:
            alert("not");
    }
    document.getElementById("n03").value=s;
}
function convertir(){
  var Nombre1=document.getElementById("n01").value;
  let valeur=document.getElementById("sel").value;
  switch(valeur){
    case "m1":
      var s= parseInt(Nombre1);
    case "m2":
      var s=parseFloat(Nombre1)/600;
    case "m3":
      var s=parseFloat(Nombre1)/650;
  }
  document.getElementById("n13").value=s;
}
