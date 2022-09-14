/*
** operators on javascript 

+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

*/

var a = 1,
    b = 2,
    c = 3,
    d = 10,
    $f = 40 ,
    __g = 100;

// 1 -    (+) Addition :
document.getElementById("div1").innerHTML = a + b ;
document.getElementById("div2").innerHTML = $f + __g ;
document.getElementById("div3").innerHTML = $f + __g + d + c + b + a ;

// 2 - 	(-) Subtraction :
document.getElementById("div4").innerHTML = b - a ;
document.getElementById("div5").innerHTML = $f - __g ;
document.getElementById("div6").innerHTML = $f - __g + d + c + b + a ;

// 3 -   (*) Multiplication :
document.getElementById("div7").innerHTML = b * a ;
document.getElementById("div8").innerHTML = $f * __g ;
document.getElementById("div9").innerHTML = $f * __g + d * c * b * a ;

// 4 - (**) Exponentiation --(ES2016) :
document.getElementById("div10").innerHTML = b ** a ;
document.getElementById("div11").innerHTML = $f ** __g ;
document.getElementById("div12").innerHTML = $f ** 0  ;

// 5 -  (/) Division :
document.getElementById("div13").innerHTML = b / a ;
document.getElementById("div14").innerHTML = $f / __g;
document.getElementById("div15").innerHTML = $f / 0  ;
// any number / 0 == infinity

// 6 -  (%) Modulus (Division Remainder) :
document.getElementById("div16").innerHTML = b % a ;
document.getElementById("div17").innerHTML = $f % __g ;
document.getElementById("div18").innerHTML = $f % 0  ;

// 7 -  (++)	Increment :
document.getElementById("div19").innerHTML = a++ ;  // 2
document.getElementById("div20").innerHTML = a++ ;  // 3
document.getElementById("div21").innerHTML = a++ ;  // 4
// increment adds to var value one 

// 8 -  (--)   Decrement :
document.getElementById("div22").innerHTML =  d-- ;  // 9 
document.getElementById("div23").innerHTML =  d-- ;  // 8 
document.getElementById("div24").innerHTML =  d-- ;  // 7
// increment Subtract var value one 

// NaN : Not a Number

