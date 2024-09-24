//! HOISTING 
//* -It is the process of before Declaration Variable we can Initialize it.
//* -In JavaScript, a variable can be declared after it has been used.
//* -In other words; a variable can be used before it has been declared
//* -Hoisting is works with Variables(var,let,const).
//* -When there no type of variables are not declared 
//* - Hoisting is works with Variables(var,let,const).
//* -When there no type of variables are not declared 
//* -JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

//! Function Hoisting:
//* -Function declarations are also hoisted similarly, meaning the entire function declaration is moved to the top of the scope. For example:
//* -Here, foo() can be called before its declaration in the code because the function declaration itself is hoisted to the top of its scope.

//? -Hoisting works differently with let and const compared to var in JavaScript. Here’s how hoisting behaves with let and const:
//* Hoisting Behavior of let and const:
//* Temporal Dead Zone (TDZ):
//* -Variables declared with let and const are hoisted to the top of their block scope (just like var), but they are not initialized.
//* -Accessing these variables before their declaration (initialization) results in a ReferenceError. This period between the hoisting and the actual initialization is called the Temporal Dead Zone (TDZ).


//? Benefits:
//* -Hoisting let and const declarations allows you to understand the scope where they are available, similar to var.
//* -The Temporal Dead Zone (TDZ) behavior ensures that variables are properly declared and initialized before being used, helping to catch potential issues early.
//* Comparison with var:
//* •	var declarations are hoisted to the top of their scope and initialized with undefined. This can sometimes lead to unexpected behavior where undefined values are accessed before assignments.
//* •	let and const declarations are also hoisted but are not initialized until their actual declaration statement is evaluated. Accessing them before this point results in a ReferenceError, promoting more predictable behavior.


//? 4. Hoisting Doesn't Move Code:
//* -It's important to note that hoisting doesn't physically move any code in your script. It's a concept that helps explain the behavior of variable and function declarations during the compilation phase of JavaScript code execution. The actual code you write remains in the same order you wrote it; only the declarations are conceptually moved to the top.
//* 2. Function Declarations vs. Function Expressions:
//* Function declarations are fully hoisted, meaning the entire function body is moved to the top of its containing scope. This allows functions to be called before they are declared in the code.

