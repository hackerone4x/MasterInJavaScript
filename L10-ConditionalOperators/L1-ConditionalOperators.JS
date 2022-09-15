/*

     **   Coditional Operators   **

     ( = )   assignment operator
     ( == )  Comparison operator Compare var
     ( === ) Identical Operator

*/
var priceone = 20 ,pricetwo = 60 , pricethree = 100;

// 1 - Assignment Operator ( = )
if (priceone = 30){
    alert("Price one = " + priceone);
}else{
    alert("Bad");
}
// In all results . it will show "price one = 30 " becuase "=" define a variable on if ,not compare var



// 2 - Comparison Operator ( == )
if (pricetwo == 60){
    alert("Price two = " + pricetwo);
}else{
    alert("Not equal");
}
if (pricetwo = "60"){
    alert("Price two = " + pricetwo);
}else{
    alert("Bad")
}
// Comparison operator comape variable not value if string or number


// 3 - Identical Operator ( === )
if (pricethree === "100"){
    alert("Price three  = " + pricethree);
}else{
    alert("Not equal Value");
}
// identical operator compare value if numer or string 


