//Question Number_1//
var age = prompt("Enter your age");

if (age < 13) {
    alert("child")
    
}
if(age >= 13 && age < 18){
    alert("Teenager");
}

//Question Number_2//
var a = prompt("Enter your number");
if(a % 2 == 0 && a % 3 == 0){
    alert("Divisible by 2 and 3")
}
else{
    alert("Not Divisible by 2 and 3")
}


//Question Number_3//
var password = prompt("Enter your password");
if(password == "saylani123"){
    alert("Access Granted")
}
else{
    alert("Access Denied")
}


//Question Number_4//
var a  = Number(prompt("Enter your FirstNumber"));
var b = Number(prompt("Enter  your SecondNumber"));
if(a > b){
    alert(a + " is greater than" + b)
}
else if(b> a){
    alert(b + "is greater than" + a)
}



//Question Number_5//
var a = ["Red", "Green", "Blue", "Yellow", "Purple"];
a.shift();
a.pop();
alert(a);


//Question Number_6//
var a = ["Apple", "Banana", "Mango"];
a.push("Orange")
console.log(a);


//Question Number_7//
var city = ["Karachi", "Lahore", "Islamabad",  "Quetta"];
city.shift();
console.log(city);



//Question Number_8//
var a = [10, 20, 30, 40, 50];
a.splice(2,1);
console.log(a);


//Question Number_ 9//
var a = [100, 200, 300, 400, 500];
var b = a.slice(1,4);
console.log(b);


//Question Number_10//
var num1  = Number(prompt("Enter your FirstNumber"));
var num2  = Number(prompt("Enter your SecondNumber"));
var num3  = Number(prompt("Enter your ThreeNumber"));
 var marks = [num1, num2, num3];
 var total = marks[0] + marks[1] + marks[2]; 
var average = total / marks.length;        

alert("Total Marks: " + total);
alert("Average Marks: " + average);


//Question Number_11//
var month = Number(prompt("Enter your month (1-12):"));

if (month == 12 || month == 1 || month == 2) {
    alert("Winter Season");
}
else if (month == 3 || month == 4 || month == 5) {
    alert("Spring Season");
}
else if (month == 6 || month == 7 || month == 8) {
    alert("Summer Season");
}
else if (month == 9 || month == 10 || month == 11) {
    alert("Autumn Season");
}
else {
    alert("Invalid month number!");
}



//Question Number_12//
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}


//Question number_13//
var names = ['Ali', 'Sara', 'Ahmed', 'Ayesha'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}


//Question Number_14//
var num = Number(prompt("Enter a number for table"));
for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


//Question Number_15//
var number = [2, 4, 6, 8, 10];
var sum = 0;
for(var i = 0; i < number.length; i++){
    sum = sum + number[i]
}
console.log(sum)


//Question Number_16//
var name = prompt("Enter your name");

if (name === "Alice" || name === "Bob") {
    alert("Welcome!");
} else {
    alert("You are not authorized.");
}


//Question Numbr_17
var num = Number(prompt("Enter a number:"));

if (num > 0) {
    if (num % 2 === 0) {
        alert("Positive Even");
    } else {
        alert("Positive Odd");
    }
} else {
    alert("Negative number");
}


//Question Number_18//
var fruits =["Apple", "Banana", "Cherry", "Date", "Elderberry"]
fruits.splice(2,1, "Mango")
alert(fruits)