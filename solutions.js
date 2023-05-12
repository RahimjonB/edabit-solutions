// 1. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
	return chickens*2 + cows*4 + pigs*4;
}
animals(2,3,4);

// 2. JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
// Consider a && b:
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
// Make a function using the && operator.

function and(a, b) {
	if(a&&b){
		return true;
	}
	else{
		return false;
	}
}
and(2,4);

// 3.Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
	if(num1 === num2){
		return true;
	}
	else{
		return false;
	}
}
isSameNum(2,3);

// 4.Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
function footballPoints(wins, draws, losses) {
	return wins*3 + draws*1 + losses*0;
}
footballPoints(2,3,0);

// 5. Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert(hours, minutes) {
	return hours*3600 + minutes*60;
}
convert(1,30);

// 6. Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
function isSeven(x) {
	return x===7?true:false;
}

// 7. In this challenge, you must verify the equality of two different values given the parameters a and b.
// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
// Implement a function that returns true if the parameters are equal, and false if they are not.
function checkEquality(a, b) {
    return a===b;
    }
    checkEquality(1,3);

// 8. Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
	if(prob * prize > pay){
		return true;
	}
	else{
		return false;
	}
}
profitableGamble(1,4,6);

// 9. Create a function that takes a boolean variable flag and returns it as a string.
function boolToString(flag) {
	return flag.toString();
}
boolToString(true);

// 10. Create a function that returns the given argument, but by using an arrow function.
var arrowFunc = (a)=>{
    return a;
    }
    arrowFunc(5);

// 11. Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(minutes, fps) {
	return (minutes*fps)*60;
}
frames(30, 10);

// 12.Create a function that will handle simple math expressions. The input is an expression in the form of a string.
function calculator(str) {
	return eval(str);
}

calculator('2+3');

// 13. Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
// Can you help her?
function greeting(name) {
    if(name == "Mubashir") {
      return "Hello, my Love!";}
  else{
      return "Hello, " + name + "!";}
  }
  greeting("Mubashir");

//   14. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
	if(a===10 || b === 10 || a+b===10){
		return true;
	}
	return false;
}
makesTen(2,3);

// 15. A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
function calculateFuel(n) {
	if(n*10 < 100){
		return 100;
	}
		return n*10;
}
calculateFuel(23.5);

// 16. Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function maxNum(n1, n2) {
	if (n1>n2) {
	  return n1;
	}
  else if(n1<n2){
	return n2;
  }
	else{
	return	n1 == n2;
	}
}
maxNum(1,2);

// 17. Given two arguments, return an array which contains these two arguments.
function makePair(num1, num2) {
	return [num1, num2];
}
makePair(2,3);

// 18. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
	if(str1.length === str2.length){
		return true;
	}
	else{
		return false;
	}
}
comp(1,2);

// 19. Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
	if(s.length == 0){
		return true;
	}
	else{
		return false;
	}
}
isEmpty("");

// 20. Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(n) {
	if(n%5==0){
		return true;
	}
	else{
		return false;
	}
}
divisibleByFive(5);

// 21. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
	if(num%100 == 0){
		return true;
	}
	else{
		return false;
	}
}
divisible(200);

// 22. Write a function that returns the length of a string. Make your function recursive.
function length(str) {
	return str.length;
}
length("hello");

// 23. Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
	if (a % b == 0){
		return true;
	}
	else{
		return false;
	}
}
dividesEvenly(2,3);

// 24. Create a function that takes a string and returns it as an integer.
function stringInt(str) {
	return Number(str);
}
stringInt("5");

// 25. Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
function area(h, w) {
	if(h<=0 || w<=0){
		return -1;
	}
	else{
		return h*w;
	}
}
area(2,3);

// 26. 
function isEven(n) {
	if (n % 2 === 0) {
		return true;
	}
	else if (n % 2 === 1) {
		return false;
	}
}
isEven(5);

// 27. Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
	return lastName + ", "+firstName;
}
concatName("Bro", "Hi");

// 28. The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
function has_bugs(buggy_code) {
	if (buggy_code == true) {
		return "sad days";
	} else if (buggy_code == false){
		return "it's a good day";
	}
}
has_bugs();

// 29. Create a function that evaluates an equation.
function eq(evaluate) {
	return eval(evaluate);
}
eq("2+3");

// 30. Create a function that takes an angle in radians and returns the corresponding angle in degrees.
function radiansToDegrees(rad) {
	return rad * (180/Math.PI);
}
radiansToDegrees(100);

// 31. Create a function that takes an equation (e.g. "1+1"), and returns the answer.
var equation = (s)=>{
	return eval(s);
}
equation("2+2+2");

// 32. According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.
function drop(arr, val = 1) {
	return arr.slice(val);
}
drop([2,3,4],2);

// 33. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}
getVoteCount(10,1);

// 34. Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
function returnNegative(n) {
	if(n <= 0){
		return n;
	}
	else{
		return n*(-1);
	}
}

// 35. Write a function to reverse an array.
function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  reverse([1,2,3,4]);

//   36. Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//   The person is at least 15 years old.
//   They have parental supervision.
//   The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised) {
	if(age >=15){
		return true;
	}
	else if(isSupervised == true){
		return true;
	}
	else{
		return false;
	}
}
acceptIntoMovie(16, false);

// 37. Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++){
		arr[i] = arr[i] + 1;
	}return arr;
}
incrementItems([1,2,3,4]);

// 38. A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
function shouldServeDrinks(age, onBreak) {
	if(age>=18 && !onBreak){
		return true;
	}
	else{
		return false;
	}
}
shouldServeDrinks(19, false);

// 39. Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
// You must calculate the number of people there will be in three decades from now.
// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.


// 40. Write a template string according to the following example:
// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
add2 = (x) => x + 2;

add3 = (x) => x + 3;

add5 = (x) => x + 5;

add7 = (x) => x + 7;

add11 = (x) => x + 11;

// 41. Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.
function yeah_nope(bool) {
    return bool ? "yeah" : "nope";
  
  }