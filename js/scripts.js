function triangletracker() {
var AB =document.getElementById('AB').value;
var BC =document.getElementById('BC').value;
var CA =document.getElementById('CA').value;

  if (AB < 0 && BC < 0 || CA < 0) {
       alert ("No triangle")
}
 else if (AB ===BC && BC===CA || CA === AB){

alert("Equilateral triangle!");
}
else if (BC===AB && BC === CA || CA === AB && CA != BC) {
alert("Isosceles triangle!");
}
else if (AB > BC && AB > CA || BC > CA) {
alert("Scalene triangle!");
}
// else if( AB + BC <= CA || CA + BC <= AB){
// alert("Not a triangle!");
// }
 else{
      alert("please be keen and try again")
}
