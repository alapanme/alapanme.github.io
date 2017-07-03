//TO Perform Arithmetic decision
function decision(){
if (document.getElementById('add').checked){
  add();
  }
else if (document.getElementById('subtract').checked){
  subtract();
  }
else if (document.getElementById('multiply').checked){
  multiply();
  }
else if (document.getElementById('division').checked){
  division();
  }
  else{
  alert("Select any Option before clicking Submit");
  }
}

//To peform the arithmetic operations
function add(){
var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var addTwoNumber = parseInt(num1) + parseInt(num2);
document.getElementById("result").value = addTwoNumber;
}
 
function subtract(){
var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var subtractTwoNumber = parseInt(num1)-parseInt(num2);
document.getElementById("result").value = subtractTwoNumber;
}
 
function multiply(){
var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var multiplyTwoNumber = parseInt(num1)*parseInt(num2);
document.getElementById("result").value = multiplyTwoNumber;
}
 
function division(num1,num2){
var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var divideTwoNumber = parseInt(num1)/parseInt(num2);
document.getElementById("result").value = divideTwoNumber;
}