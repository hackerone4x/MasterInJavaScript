/*
** Conditions On JavaScript
** If - Else - Elseif
*/
var age = prompt("Whats your age : ")

/*  Syntax :  
if(Condition){
    statement
}else if(Condition 2){
    statement 2
}else{
    statement if other than 
}
*/

if (age <= 16){
    document.getElementById("div1").innerHTML = "Hello your age is : " + age ;
}else if(age > 16){
    document.getElementById("div1").innerHTML = "else if says hello your age is  : " + age ;
}else{
    document.getElementById("div1").innerHTML = "from else you are welcome your age is  : " + age ;
}

// if you typed any thing not number like "=" else will run
// on conditions one condition of all conditions will run 