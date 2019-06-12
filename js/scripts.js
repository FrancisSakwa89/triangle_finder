function triangletracker() {
var AB =document.getElementById('AB').value;
var BC =document.getElementById('BC').value;
var CA =document.getElementById('CA').value;

if(AB.length === 0 && BC.length === 0 && CA.length === 0){
  alert('Please insert values');
   }
else if(AB <= 0 && BC <= 0 && CA <= 0){
  alert("Insert values > 0")
}
else if (AB ===BC && BC===CA){

alert("Equilateral triangle!");
}
else if (BC===AB && AB != CA) {
alert("Isosceles triangle!");
}
else if (AB != BC && AB !=CA && BC !=CA ) {
alert("Scalene triangle!");
}
else if( AB + BC <= CA || CA + BC <= AB){
alert("Not a triangle!");
}
};
