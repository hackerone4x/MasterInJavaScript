/*
** Concatenation :
** Concatenation is an Add operator to strings
** "hello" + 3   : hello3
** 4 + 5 + "hello"  : 9hello
** "hello" + 6 + 7  : hello13        right way : "hello" + (6 + 7)
*/
var myname = "Abdulrahman",myage = 16,myacount = "Hackerone4x",num = 12; // define a variables
document.getElementById("div1").innerHTML =
    "My name is : " + myname + "<br> My age is : " + myage + "<br>My account : " + myacount + "<br>"; 
document.getElementById("div2").innerHTML = (myage + num); // This Isnt Concatenation becuase a vars not a strings
