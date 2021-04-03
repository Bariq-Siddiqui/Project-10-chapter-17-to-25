//    *** *** *** Chapter # 17-to-20  (ARRAYS AND LOOP) *** *** *** 

//  TASK # 01
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

//  SOLUTION:

// var num = [[],[],[]]

// ___________________________________//-*-\\________________________________________________


//  TASK # 02
// Declare and initialize a multidimensional array
// representing the following matrix:

//  SOLUTION:


// var arr=["0 1 2 3"];
// var arr1=["1 0 1 2"];
// var arr2=["2 1 0 1"];
// document.write(arr + "<br>" + arr1 + "<br>" + arr2);


// ___________________________________//-*-\\________________________________________________


//  TASK # 03
// Write a program to print numeric counting from 1 to 10.


//  SOLUTION:


// var i;
// for(i=1; i<=10;i++){
//     document.write(i+"<br>")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 04
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

//  SOLUTION:


// var i=+prompt("Enter a number to shows its multiplication table");
// var j=+prompt("Enter length multiplication table");
// var k;
// document.write("Multiplication Table of  " + i + "  Lenght  " + j + "<br>");
// for(k=1;k<=j;k++){
//     document.write(i+ " * " + k + " = " + (i*k) +"<br>")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 05
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

//  SOLUTION:

// var fruits=["apple","banana","mango","orange","strawberry"];
// var i;
// for(i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }
// document.write("<br><br>")
// for(i=0;i<fruits.length;i++){
//     document.write( "Element at index "+i+" is "+fruits[i]+"<br>")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 06


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//  SOLUTION:


// document.write("<h1>Counting:</h1>");
// for(var a=1; a<=15; a++)
// {
//     document.write(a +",")
// }
// document.write("<h1>Reverse counting: </h1>");
// for(var b=10; b>=1; b--)
// {
//     document.write(b +",")
// }

// document.write("<h1>Even:</h1>");
// for(var c=0; c<=20; c+=2)
// {
//     document.write(c +",")
// }

// document.write("<h1>Odd:</h1>");
// for(var d=1; d<=19; d+=2)
// {
//     document.write(d +",")
// }

// document.write("<h1>Series: </h1>");
// for(var d=2; d<=20; d+=2)
// {
//     document.write(d +"k"+",")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 07

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


//  SOLUTION:

// var itEms=["cake","apple","pie","cookie","chips","patties"];
// var checkInp=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// checkInp.toLocaleLowerCase;
// var a=itEms.indexOf(checkInp);
// if(itEms.indexOf(checkInp) !== -1){
//     alert(checkInp + "  is available at index  " + a + "  in our bakery");
// }
// else{
//     alert("We are sorry.  " + checkInp + "  is not available in our bakery");
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

//  SOLUTION:

// var arr= [24, 53, 78, 91, 12];
// var max = Math.max.apply(Math,arr)
// document.write("Array items: "+arr+"<br>"+"The largest number is "+max)


// ___________________________________//-*-\\________________________________________________


//  TASK # 09

// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


//  SOLUTION:

// var arr= [24, 53, 78, 91, 12];
// var min = Math.min.apply(Math,arr)
// document.write("Array items: "+arr+"<br>"+"The smallest number is "+min)



// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a program to print multiples of 5 ranging 1 to
// 100.


//  SOLUTION:

// for(var i=5; i<=100; i+=5)
// {
//     document.write(i +",")
// }



//    *** *** *** Chapter # 21-to-25  (STRING METHODS) *** *** *** 



//  TASK # 01

// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//  SOLUTION:

// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName+" "+lastName;
// document.write(fullName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 2

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

//  SOLUTION:


// var phoneModel=prompt("Enter his favorite mobile model");
// var length = phoneModel.length;
// document.write("My favorite phone is:  " + phoneModel + "<br>" + "Length of string:  " + length );


// ___________________________________//-*-\\________________________________________________


//  TASK # 3

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

//  SOLUTION:

// var string = "Pakistani";
// var letter = string.indexOf("n");
// document.write("String:  " + string + "<br>" + "Index of 'n':  " + letter);


// ___________________________________//-*-\\________________________________________________


//  TASK # 4

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

//  SOLUTION:

// var string = "Hello World";
// var lastIndex = string.lastIndexOf("l");
// document.write("String:  " + string + "<br>" + "Last index of 'l':  " + lastIndex);


// ___________________________________//-*-\\________________________________________________


//  TASK # 5

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

//  SOLUTION:

// var findIndex="Pakistani";
// var targetIndex=findIndex.charAt(3);
// document.write("String:  " + findIndex + "<br>" + "Character at index 3:  " + targetIndex)


// ___________________________________//-*-\\________________________________________________


//  TASK # 6

// Repeat Q1 using string concat() method.

//  SOLUTION:

// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName.concat(" ",lastName);
// document.write(fullName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 7

// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser

//  SOLUTION:

// var city = "Hyderabad";
// var indexnum = city.indexOf("Hyder");
// var firsttext = city.slice(0,indexnum);
// var replacingtext ="Islam";
// var thirdtext = city.slice(indexnum+5);
// document.write("City:  " + city + "<br>" + "After replacement:  " + firsttext + replacingtext + thirdtext);

// ___________________________________//-*-\\________________________________________________


//  TASK # 8

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

//  SOLUTION:

// var message="Ali and Sami are best friends. They play cricket and football together";
// var newMessage=message.replace(/and/g,"&")
// document.write(message+"<br><br>"+"<b>After replace message: </b>"  +newMessage);


// ___________________________________//-*-\\________________________________________________


//  TASK # 9

// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


//  SOLUTION:

// var string="472";
// var integer=parseInt(string);
// var type=typeof(string);
// var typeint=typeof(integer)
// document.write("Value: "+ string+"<br>"+"Type: "+type +"<br>"+"Value: "+ integer+"<br>"+"Type: "+typeint )


// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a program that takes user input. Convert and
// show the input in capital letters.


//  SOLUTION:

// var userInput=prompt("Enter input","peanuts");
// var uprCase=userInput.toUpperCase();
// document.write("User input: " +userInput+"<br>"+"Upper case:"+uprCase)


// ___________________________________//-*-\\________________________________________________


//  TASK # 11

// . Write a program that takes user input. Convert and
// show the input in title case.


//  SOLUTION:


// var input = "javascript";
// var firstchar = input.slice(0,1);
// var firstchar = firstchar.toUpperCase();
// var otherchar = input.slice(1);
// var otherchar = otherchar.toLowerCase();
// document.write("User input: " + input + "<br>" + "Title case:  " + firstchar + otherchar);


// ___________________________________//-*-\\________________________________________________


//  TASK # 12

// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

//  SOLUTION:

// var num=35.36;
// var string=num.toString();
// var replace=string.replace(".","");
// document.write("Number: "+ num+"<br>"+"Result: "+replace)


// ___________________________________//-*-\\________________________________________________


//  TASK # 13

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

//  SOLUTION:

// var userInput = prompt("Enter Username");
// var ascii = userInput.charCodeAt(userInput);
// if (ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){
//     alert("Please enter a valid username");
// }
// document.write(ascii);


// ___________________________________//-*-\\________________________________________________


//  TASK # 14

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

//  SOLUTION:

// var itEms=["cake","apple","pie","cookie","chips","patties"];
// var checkInp=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// var bar=checkInp.toLowerCase();
// var a=itEms.indexOf(bar);
// if(itEms.indexOf(bar) !== -1){
//     alert(bar+ "  is available at index  " + a + "  in our bakery");
// }
// else{
//     alert("We are sorry.  " + bar + "  is not available in our bakery");
// }


// ___________________________________//-*-\\________________________________________________
