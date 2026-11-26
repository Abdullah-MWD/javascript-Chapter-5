// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// 2. Repeat task 1 for subtraction, multiplication, division & modulus using JS Mathematic Expressions.
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");

// 3. a. Declare a variable. b. Show the value of variable in your browser like "Value after variable declaration is: ??". c. Initialize the variable with some number. d. Show the value of variable in your browser like "Initial value: 5". e. Increment the variable. f. Show the value of variable in your browser like "Value after increment is: 6". g. Add 7 to the variable. h. Show the value of variable in your browser like "Value after addition is: 13". i. Decrement the variable. j. Show the value of variable in your browser like "Value after decrement is: 12". k. Show the remainder after dividing the variable's value by 3. l. Output: "The remainder is : 0".
var myVar;
document.write("Value after variable declaration is: " + myVar + "<br>");

myVar = 5;
document.write("Initial value: " + myVar + "<br>");

myVar++;
document.write("Value after increment is: " + myVar + "<br>");

myVar = myVar + 7;
document.write("Value after addition is: " + myVar + "<br>");

myVar--;
document.write("Value after decrement is: " + myVar + "<br>");

var remainder = myVar % 3;
document.write("The remainder is : " + remainder + "<br><br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: Total cost to buy 5 tickets to a movie is 3000PKR
var ticketPrice = 600;
var totalTicketCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalTicketCost + " PKR");
// 5. Write a script to display multiplication table of any number in your browser. E.g Table of 4 (4x1=4 ... 4x10=40)
var tableNum = Number(prompt("Enter a number to display its multiplication table:"));
document.write("Table of " + tableNum + "<br>");
document.write(tableNum + "x1=" + (tableNum * 1) + "<br>");
document.write(tableNum + "x2=" + (tableNum * 2) + "<br>");
document.write(tableNum + "x3=" + (tableNum * 3) + "<br>");
document.write(tableNum + "x4=" + (tableNum * 4) + "<br>");
document.write(tableNum + "x5=" + (tableNum * 5) + "<br>");
document.write(tableNum + "x6=" + (tableNum * 6) + "<br>");
document.write(tableNum + "x7=" + (tableNum * 7) + "<br>");
document.write(tableNum + "x8=" + (tableNum * 8) + "<br>");
document.write(tableNum + "x9=" + (tableNum * 9) + "<br>");
document.write(tableNum + "x10=" + (tableNum * 10) + "<br><br>");

// 6. The Temperature Converter: It's hot out! Let's make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output "NN°C is NN°F". c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output "NN°F is NN°C".
var celsius = Number(prompt("Enter temperature in Celsius (°C):"));
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");

var fahrenheit = Number(prompt("Enter temperature in Fahrenheit (°F):"));
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C<br><br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables: a. Price of item 1, b. Price of item 2, c. Ordered quantity of item 1, d. Ordered Quantity of item 2, e. Shipping charges. Compute the total cost & show the receipt in your browser.
var priceItem1 = Number(prompt("Enter price of item 1:"));
var priceItem2 = Number(prompt("Enter price of item 2:"));
var qtyItem1 = Number(prompt("Enter quantity of item 1:"));
var qtyItem2 = Number(prompt("Enter quantity of item 2:"));
var shippingCharges = Number(prompt("Enter shipping charges:"));
var totalCartCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCartCost + "<br><br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
var totalMarks = Number(prompt("Enter total marks:"));
var marksObtained = Number(prompt("Enter marks obtained:"));
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var usdAmount = Number(prompt("Enter amount in US Dollars:"));
var sarAmount = Number(prompt("Enter amount in Saudi Riyals:"));
var totalPKR = (usdAmount * 104.80) + (sarAmount * 28);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5, b. Multiply by 10, c. Divide the result by 2. Perform all calculations in a single expression.
var someNum = Number(prompt("Enter a number for arithmetic sequence:"));
var resultSeq = ((someNum + 5) * 10) / 2;
document.write("Result: " + resultSeq + "<br><br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: "They are either NN or NN years old".
var currentYear = Number(prompt("Enter current year:"));
var birthYear = Number(prompt("Enter birth year:"));
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output "The circumference is NN". (Hint: Circumference of a circle = 2 * pi * r, pi = 3.142) Calculate the area based on the radius, and output "The area is NN". (Hint : Area of a circle = pi * r * r, pi = 3.142)
var radius = Number(prompt("Enter radius of a circle:"));
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable. b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
var favSnack = prompt("Enter your favorite snack:");
var currentAge = Number(prompt("Enter your current age:"));
var maxAge = Number(prompt("Enter estimated maximum age:"));
var perDay = Number(prompt("Enter estimated amount per day:"));
var totalSnackNeeded = (maxAge - currentAge) * 365 * perDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + totalSnackNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge);