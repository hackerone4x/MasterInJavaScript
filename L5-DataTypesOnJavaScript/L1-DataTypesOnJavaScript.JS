/*
** Data Types :
** --------------------------------------------**
** Boolean : true or false
** Array   : ["hello",33,"hi"]
** Object  : {"age":16,"name":"Abdo"}
** Number  : ....-1,0,1,2,3 ... like : 166
** String  : "Hello World"
** Undefined 
** Null
** NoN
** Symbol
** ---------------------------------------------**
*/
// Boolean Type : 
var BooleanVar = true;
if (BooleanVar === true){
    document.write("This is bolean variable ");
}

// Array
var arr = ["Facebook",45,"Youtube"];
document.getElementById("div1").innerHTML = arr[0];
// You Call Array By index arr[index]

// object
var Obj = {"name":"Abdo","age":16};
document.getElementById("div2").innerHTML = Obj.name + Obj.age;

// Numbers :
var Num = 16;
document.getElementById("div3").innerHTML = Num;
// Numbers type without double coutes

// Strings :
var Str = "JavaScript Says Hello ";
document.getElementById("div4").innerHTML = Str;
// Strings type in double coutes 
// "17" dont eqal 17 because "17" is a string , 17 is a number

// Undefined :
var UndefinedVar ;
document.getElementById("div5").innerHTML = UndefinedVar;
// undefined means the variable dont have a Value

// Null Type :
var Nl = null;
document.getElementById("div6").innerHTML = null;
// Null means No Thing

//-----------------------------------------------------------//
/*
** typeof  funtion
** Syntax : typeof (var)
** typeof funtion gets the type of the var
*/
document.write("<br>--------------------------<br>");
document.write(typeof(BooleanVar)+"<br>");
document.write(typeof(arr)+"<br>");
document.write(typeof(Obj)+"<br>");
document.write(typeof(Num)+"<br>");
document.write(typeof(Str)+"<br>");
document.write(typeof(UndefinedVar)+"<br>");
document.write(typeof(Nl)+"<br>");

