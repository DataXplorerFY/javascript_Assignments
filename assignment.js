/* Write a program that takes two numbers & add them in a new variable. Show the result in your browser.


var a= prompt("Enter 1st Number?");
var b= prompt("Enter 2nd Number?");
var c = parseInt(a);
var d= parseInt(b);
var sum = (c+d);

document.write("Sum of ",c, " And ", d, " is ",sum); */

//Repeat task 8 for subtraction, multiplication, division & modulus

// var a= prompt("Enter 1st Number?");
// var b= prompt("Enter 2nd Number?");
// var c = Number(a);
// var d= Number(b);
// var sub = (c-d);
// document.write("sub of ",c, " And ", d, " is ",sub);

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after
// variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after
// increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after
// addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after
// decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// var num;
// document.write("Valus after variable declaration is ??", num);
// num = 5;
// document.write("<br>Initial value:", num);
// num++;
// document.write("<br>Value after increment is:", num);
// num+=7;
// document.write("<br>Value after addition is:", num);
// num--;
// document.write("<br>Value after decrement is:", num);
// num%=3;
// document.write("<br>The remainder is :", num);

//  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NoC is NoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NoF is NoC”.

// var c= 50;
// var c_To_F= (c*9/5) + 32;
// document.write(c, "&#8451  is ", c_To_F, " &#8457"); 


// var f= 70;
// var f_To_c= (f-32)*5/9;
// document.write(f, "&#8457 is ", f_To_c, "&#8451" );

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
// convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression. (Exchange rates : 1 US Dollar =
// 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)


// document.write("<h1>Currency in PKr</h1>");

// var Dollar=10;
// var saudi_riyal= 25;
// var D_to_Pkr= Dollar * 155;
// var R_to_Pkr= saudi_riyal*41;
// var PKR_Currency= (D_to_Pkr + R_to_Pkr);
// document.write("Totall Currency in PKR is: ", PKR_Currency);




// one line expression
// document.write("<h1>Currency in PKr</h1>","<br>Totall Currency in PKR is: ", 10*155 + 25* 41);

// document.write("<h1>Result</h1>")
// var a=10;
// document.write("The value of a is: ",a);
// document.write('<hr style="border-top: dotted 1px;" />')
// document.write("<br>")
// document.write("<br>")
// a=++a;
// document.write("The value of ++a is:",a);
// document.write("<br>Now the value of a is: ",a);
// document.write("<br>")
// document.write("<br>")
// b=a++;
// document.write("<br>The value of a++ is:",b);
// document.write("<br>Now the value of a is: ",a);
// document.write("<br>")
// document.write("<br>")
// c=--a;
// document.write("<br>The value of --a is:",c);
// document.write("<br>Now the value of a is: ",a);
// document.write("<br>")
// document.write("<br>")
// d=a--;
// document.write("<br>The value of a-- is:",d);
// document.write("<br>Now the value of a is: ",a);



var a = 2;
var b = 1; 
var result = --a - --b + ++b + b--;
--a; // 1

--a - --b; // 1 - 0>>>>1
--a - --b + ++b; // 1 - 0 + 1>>>2
--a - --b + ++b + b--;// 1 - 0 + 1 + 0>>>2



document.write("<br>");
document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");
document.write(result);