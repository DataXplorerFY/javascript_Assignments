/* simple calculator */
var num_1=parseInt(prompt("Enter 1st number!"));
var num_2=parseInt(prompt("Enter 2nd number!"));
var operation= prompt("Enter operation you want to perform!");
if(operation=="+"){
    document.write("</br>The sum of above two numbewrs is ", num_1+num_2);
}else if(operation=="-"){
    document.write("</br>The subtract of above two numbewrs is ", num_1-num_2);
}else if (operation=="*"){
    document.write("</br>The Multiplication of above two numbewrs is ", num_1*num_2);
}else if (operation=="/"){
    document.write("</br>The division of above two numbewrs is ", num_1/num_2);
}else if(operation=="%"){
    document.write("</br>The Moduls of above two numbewrs is ", num_1%num_2);
}

/* Write a program that takes input a number from user & state whether the number is positive, negative or zero.*/


var num=parseInt(prompt("Enter a number!"));
if(num>0){
    document.write("The number you have entered is Positive!");
}else if(num<0){
    document.write("The number you have entered is Negative!");
}else if (num===0){
    document.write("The number is Zero")
}

/* Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise*/
var character=prompt("Enter a character!");
if (character=="a" || character=="e" ||character=="i" ||character=="o" ||character=="u"){
    console.log(true);
}else{
    console.log(false); 
       
    
}

var password=123456789;
var userPassword=parseInt(prompt("Enter your password!"));
//console.log(userPassword);
if(userPassword==="" || isNaN(userPassword)){
    alert("Please Enter your password!");
}else if(password==userPassword){
    alert("Correct! The password you entered matches the original password");
}else{
    alert("Incorrect password")
}

var time=parseInt(prompt("Enter Time in 24 hours format!"));
if(time >= 0 && time<1200){
    alert("Good Morning");

}else if(time>=1200 && time < 1700){
    alert("Good afternoon!");
}else if (time >= 1700 && time < 2100){
    alert("Good Evening!");
}else if (time >= 2100 && time <= 2359){
    alert("Good Night!");
}else {
    alert("Invalid time format! Please enter a valid 24-hour time.");
  }
