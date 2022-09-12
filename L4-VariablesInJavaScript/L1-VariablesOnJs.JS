/*
** Variables On JavaScript
** On JavaSript we will use "var" funtion to define a variable
** Syntax : var VariableName = VariableValue
** Notes : Variable starts with letters or underscore or $
** ( = ) : This is a AssignmentOperetor
*/

// 1 - Way One To define a Var
var h1 = 10 ,
    h2 = 20;

var h6 = 60 , h7 = 70;

    // 2 - Way Two To define a var
var h3 ;
h3 = 30;

// 3 - Way Three to define a Var
var h4 = 40;
var h5 = 50;

var $Discount = h5 / h1

document.getElementById("h1").innerHTML = h1;
document.getElementById("h2").innerHTML = h2-h1;
document.getElementById("h3").innerHTML = h3-h1;
document.getElementById("h4").innerHTML = h4+h2;
document.getElementById("h5").innerHTML = h5;
document.getElementById("h6").innerHTML = h6;
document.getElementById("h7").innerHTML = $Discount;
