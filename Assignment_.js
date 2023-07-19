/*Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”*/

var city=prompt("Enter Your City!");
if (city=="Karachi"){
    console.log("Welcome to city of lights");
}


/*Write a program to take input color of road traffic signal from the user & show the message according to this table:*/

var color=prompt("Enter Traffic Signal Color!");
if(color=="Red"){
    console.log("Must Stop!");
}else if( color=="Yellow"){
    console.log("Ready To Move!");
}else if(color=="Green"){
    console.log("Move now!");
}else{
    console.log("Color is out of range!");
}



var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");  // condition is false because 12===13 false, and c will 13

}

if (c === 13){
alert("condition 2 is true");// condition is true because 13===13
}

if (++c < 14){
alert("condition 3 is true"); // condition is false because c is 14 and 14<14 is false
}

if(c === 14){
alert("condition 4 is true"); // conditio is true 14===14
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("Talse")
}

if("car" < "cat"){
    alert("car is smaller than cat");
}
    
    
// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting ercentage on your page.Take percentage & compute grade as per following table://


document.write("<h1>Marks Sheet</h1>")
var totallMarks=parseInt(prompt("Enter Totall marks!"));
var obtained_marks=parseInt(prompt("Enter obtained marks in Three Subject!"));

var percentage= (obtained_marks/totallMarks)*100;
document.write("<br> Totall_Marks: ",totallMarks);
document.write("<br> Obtained_Marks: ",obtained_marks);

document.write("<br> Percentage: ",percentage.toFixed(2),"%");
if ( percentage >= 80){
    document.write("<br>Grade: A-One <br>Remarks: Excellent");
    
}else if(percentage>=70){
    document.write("<br>Grade: A <br>Remarks: Good");
}else if(percentage>=60){
    document.write("<br>Grade: B <br>Remarks: You Need To improve!");
}else if(percentage<60){
    document.write("<br>Grade: Fail <br>Remarks: Sorry!");
}

// guess game
var secret_number=7;
var guessed_number=parseInt(prompt("Guess The Secret Number!"));


if (guessed_number>=0 && guessed_number<=10){
    if(guessed_number==7){
        alert("Bingo! Correct Answer!");
    }else if(guessed_number=== secret_number+1){
        alert("“Close enough to the correct answer!");
    }else{
        alert("Try Again!")
    }
}else{
    alert("Please enter a number between 1 and 10.");
}

// Write a program that checks whether the given input is an even number or an odd number.
 

var num=parseInt(prompt("Enter a number!"));

if(num%2==0){
    alert("The number is even!");
}else{
    alert("Number is odd")
}

