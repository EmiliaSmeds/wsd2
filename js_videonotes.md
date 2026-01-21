**Notes from the videos**

Beginning the Beginner's series [1 of 51]
  -	Presentation of the different persons contributing to the videos.

What is JavaScript [2 of 51]
  -	You don’t have to tell JS the variable type, it can figure it out
  -	JavaScript can be used to almost anything

Running JavaScript: browser or server [3 of 51]
  -	Client: JavaScript is put into .js -files, that are linked to the code on the web page.
  -	Server: node.js needs to be installed.

Building your toolbox [4 of 51] & Demo: Building your toolbox [5 of 51]
  -	Environment setup. Installed nvm and node.

Creating your first application [6 of 51]
  -	Use `` when using for example ${greeting}

Comments [7 of 51]
  -	Used for reminders, tips or “hiding” lines from the code
  -	//comment line
  -	/* many comment lines */

Demo: Comments [8 of 51]
  -	Can be used to make own notes, for example TODO’s

Declaring variables [9 of 51]
  -	Var, let or const can be used to declare variables
  -	Var is flexible, let is only available after declaration, const can not be changed and is only available after declaration
  -	Const used by default, let used in loops

Demo:Declaring variables [10 of 51]
  -	Using variables wrong will result in an error (for example if trying to change a const-variable)

Working with strings [11 of 51] & Demo: Working with strings [12 of 51]
  -	Multiple string-variables can be combined with the + operator. Using text in the same output requires “”.

Using template literals to format strings [13 of 51]
  -	${} is called a placeholder

Demo: Using template literals to format strings [14 of 51]
  -	Using placeholders doesn’t require any special formatting for the additional text in the output (the whole sentence has to be between ``)

Data types in JavaScript [15 of 51]
  -	Recommended to use === when doing type testing

Demo: Data types in JavaScript [16 of 51]
  -	Typeof and instanceof tests can be used to see the datatypes of variables

Math in JavaScript [17 of 51] & Demo: Math in JavaScript [18 of 51]
  -	++ increments by one, -- decrements by one. Math Objects can be used in JavaScript, for example (Math.PI)

Converting strings to numbers [19 of 51]
  -	parseInt() and parseFloat() converts strings to numbers
  -	toString() converts numbers to strings

Demo: Converting strings to numbers [20 of 51]
  -	JavaScript can change hexadecimal strings to numbers with parseInt(‘0xF’)
  -	Numbers after special characters are ignored, placeholders should be used when directly converting mathematical operations.

Handling errors with try/catch/finally [21 of 51]
  -	Try -> a block of code that can throw exception
  -	Catch -> will run if there is an exception 
  -	Finally -> code that runs after try or catch (optional)

Demo: Handling errors with try/catch/finally [22 of 51]
  -	The code in “finally” will always run.

Dates [23 of 51]
  -	Date is an object in JavaScript that contains both date and time
  -	Month-counting starts from 0, jan = 0, feb = 1…

Demo: Dates [24 of 51]
  -	New Date(); gives current date and time. 

Boolean logic with if statements [25 of 51]
  -	== automatically does a conversion, and doesn’t care about the data type of the variables.
  -	Always use !== for the not equal operator, since it also compares the data types
  -	If, else if & else are used in if statements

Demo: Boolean logic with if statements [26 of 51]
  -	If-statements used on one line can be used without {}

Boolean logic with switch and other syntax [27 of 51]
  -	String values in JavaScript are case sensitive
  -	Or & And operators: when using && or || the code stops evaluating when the answer is known. This is recommended.

Demo: Boolean logic with switch and other syntax [28 of 51]
  -	Case (if and or) and default (else) can also be used similarly as an if -statement.

Creating arrays [29 of 51] & Demo: Creating arrays [30 of 51]
  -	Arrays can be created either with or without specifying the length of them. 

Populating arrays [31 of 51] & Demo: Populating arrays [32 of 51]
  -	Data can be added during creation or after the array is created
  -	Index always starts at 0. Index = length – 1.

Array methods [33 of 51] & Demo: Array methods [34 of 51]
  -	Push and pop changes the end of the array, while shift and unshift changes the beginning of the array. Concat joins two arrays.

Loops [35 of 51]  & Demo: Loops [36 of 51]
  -	In the for -loop everything is declared in the same line. For … of loop will go through the whole array or collection. 

Functions [37 of 51]
  -	Only $ and _ are allowed as special characters in variable names.

Demo: Functions [38 of 51]
  -	functionName(); is used to invoke the function
  -	If a parameter is missing, it will return “undefined”

Arrow and anonymous functions [39 of 51]  & Demo: Arrow and anonymous functions [40 of 51]
  -	“fat arrow functions” => Declares what to do with the parameters. A return value does not have to be specified in single-line functions.

JavaScript Object Notation (JSON) [41 of 51] & Demo: JavaScript Object Notation (JSON) [42 of 51]
  -	Data is separated by commas, objects by {} and multi-item arrays with [].
  -	JSON.stringify(objectname); -> JS object to JSON
  -	JSON.parse(jsonobj); -> JSON to JS object

Objects in JavaScript [43 of 51] & Demo: Objects in JavaScript [44 of 51]
  -	Objects are collections of name-value -pairs.
  -	Constructors can be thought of as a blueprint for an object, but objects can also be built without them. 

Promises for long running operations [45 of 51] & Demo: Promises for long running operations [46 of 51]
  -	With promises it is able to manage programs that take more time to run. 
  -	Promise time is in milliseconds

Async/await for managing promises [47 of 51] & Demo: async/await for managing promises [48 of 51]
  -	Async will be used when the function contains an await, and it is not possible to use an await outside an async function.
  -	Await will pause until an operation is completed. 

Package management [49 of 51] & Demo: Package management [50 of 51]
  -	Some packets are needed in production, some only in developement
  -	Create a package with npm init -y in powershell
  -	Variables can also be read from different files.

Next steps [51 of 51]
  -	It’s important to use the knowledge, otherwise it can be forgotten and it’s also harder to learn more about the topic. 
