/*
** Output Data To Screen :
** 
** 1 - alert(DATA);
** 2- document.write(DATA); 
** 3- document.getElementById().innerHTML = (DATA); 
** 4- console.log(DATA);
*/


// 1 - alert()
var namex = "Abdulrahman",myage = 16;
alert("from alert . hello your name is : " + namex +"Your age is : "+ myage);

// 2 - document.write()
document.write( "<br>from document.write() "+"hello your name is : " + namex +"<br>Your age is : "+ myage);
// Document.write copies data to Html document without any tag

// 3- document.getElementById().innerHTML
document.getElementById("div1").innerHTML = ("<br>From document.getElementById().innerHTML  " + "hello your name is : " + namex +"<br>Your age is : "+ myage);
// document.getElementById(ID).innerHTML Copies data to html page in tag has ID

// 3- document.getElementById().innerHTML way2
tash = document.getElementById("div2");
tash.innerHTML = "<br>Hello from document get element way 2"

// 4 - console.log(Data) : 
console.log("Hello from console");
// console.log prints data to console type (CTRL+SHIFT+j) to show console 
// console.log dont show data in the web page