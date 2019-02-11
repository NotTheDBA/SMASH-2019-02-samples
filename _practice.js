
// This is a comment.  
//Anything on the line after the two slashes is ignored by the program.
/* This is a multi line comment.
You can keep writing more and it will be ignored
until you get the the end mark:  */

// We can use console.log() to tell us many things while our program runs:
console.log("Program beginning.")
console.log("==================")

//#region 1
// console.log("") // blank line
// console.log("Section 1")
// console.log("==================")

// // This is how you delcare a variable:
// var myVariable

// // Use a single equals sign to set the value of the variable:
// myVariable = 1

// // We can use console.log to see the value of our variable:
// console.log("This is the value of 'myVariable': ")
// console.log(myVariable)

// // You can also declare a variable and set it's value in one line:
// var newVariable = 2

// console.log("This is the value of 'newVariable': ")
// console.log(newVariable)
//#endregion

//#region 2
// console.log("") // blank line
// console.log("Section 2")
// console.log("==================")

// // Here are some other things you can do with variables:
// console.log("") // blank line
// console.log("Put the value of the variable in your console.log message...")
// console.log("This returns the value of 'newVariable', not the name: " + newVariable)

// console.log("") // blank line
// console.log("Make one variable match the value of another variable...")
// console.log("This is the value of 'myVariable': " + myVariable)
// console.log("Now we change the value...")
// myVariable = newVariable
// console.log("This is the new value of 'myVariable': " + myVariable)
// myVariable = 1
// console.log("This is the NEW new value of 'myVariable': " + myVariable)

// console.log("") // blank line
// console.log("Add two variables together...")
// console.log("This is the value of 'myVariable': " + myVariable)
// console.log("This is the value of 'newVariable': " + newVariable)
// console.log("Now we Add them...")
// console.log(myVariable + newVariable)
// console.log("But notice it doesn't change our variables!")
// console.log("This is still the value of 'myVariable': " + myVariable)
// console.log("This is still the value of 'newVariable': " + newVariable)

//#endregion

//#region 3
// console.log("") // blank line
// console.log("Section 3")
// console.log("==================")
// //  IMPORTANT!!!
// console.log("") // blank line
// console.log("Strings are different than numbers, even though they look the same!")
// myFirstString = "1"
// mySecondString = "2"

// console.log("This is the value of 'myFirstString': " + myFirstString)
// console.log("This is the value of 'mySecondString': " + mySecondString)
// console.log("You can't add strings!  They just run together...")
// console.log(myFirstString + mySecondString)

// console.log("") // blank line
// console.log("If you add a number to a string, it makes them both strings...")
// console.log(1 + "2")

// console.log("") // blank line
// console.log("This is very helpful when you want a message to go with a value...")
// console.log("just like I've been doing with console.log()!")


//#endregion

//#region 4
// console.log("") // blank line
// console.log("Section 4")
// console.log("==================")
// //  The single equals sign sets the value of our variable, but
// //  the double equals sign tells us if our variable matches something else.
// //  It does this by returning "true" or "false"
// console.log("The variable 'newVariable' matches the value of 2: ")
// console.log(newVariable == 2)

// // We're getting tricky here... we're comparing one variable to another...
// console.log("The variable 'newVariable' is not a match for the value of 'myVariable': ")
// console.log(newVariable == myVariable)

// // But if we change the value of 'myVariable', we can try it again for a different result:
// console.log("Setting 'myVariable' equal to 2... ")
// myVariable = 2

// console.log("This is the new value of 'myVariable': ")
// console.log(myVariable)

// console.log("The variable 'newVariable' now matches the value of 'myVariable': ")
// console.log(newVariable == myVariable)


//#endregion

//#region 5
// console.log("") // blank line
// console.log("Section 5")
// console.log("==================")
// // This is how we declare a function
// function myFunction() {
//     //... and we put the commands we want the function to include here ...
//     console.log("My function just did something.")
// }

// // But that function does actually do anything until we call it!
// myFunction()

// // It will do the same thing every time we call it!
// myFunction()
// myFunction()
// myFunction()
//#endregion

//#region 6
// console.log("") // blank line
// console.log("Section 6")
// console.log("==================")
// // We can use the 'if' keyword to decide if we should run something...
// console.log("The value of 'newVariable' is: " + newVariable)
// console.log("The value of 'myVariable' is: " + myVariable)
// if (newVariable == myVariable) {
//     // this will run, because we set both of these to 2, and our test is true
//     console.log("The test is true.");
// }

// //Lets try that with some other variable:
// var someOtherVariable = 5
// console.log("The value of 'newVariable' is: " + newVariable)
// console.log("The value of 'someOtherVariable' is: " + someOtherVariable)
// if (newVariable == someOtherVariable) {
//     // this won't run, because they aren't the same and the test returns false
//     console.log("The test is false.  You will never see this message.");
// }

// console.log("Hey, look... we didn't see that other message!");
//#endregion

//#region 7
// console.log("") // blank line
// console.log("Section 7")
// console.log("==================")
// // If we want to do something different when the test is false, we can use a new
// // keyword:  'else'
// if (newVariable == someOtherVariable) {
//     // this won't run, because they aren't the same and the test returns false
//     console.log("This message appears when the test is true.");
// } else {
//     // this code runs instead
//     console.log("The 'else' code ran!  This message appears when the test is false.");

// }

//#endregion

//#region 8

// console.log("") // blank line
// console.log("Section 8")
// console.log("==================")
// //  The double equals sign tells us if our variable matches something else.
// //  It does this by returning "true" or "false"
// //  It doesn't care if the value is a number or a string
// console.log("The variable 'newVariable' matches the number 2: ")
// console.log(newVariable == 2)

// console.log("The variable 'newVariable' also matches the string 2: ")
// console.log(newVariable == "2")

// // But if we want to make sure our numbers are number and our strings are strings,
// // we need to use the *triple* equals sign!
// console.log("The variable 'newVariable' matches the type and value of the number 2: ")
// console.log(newVariable === 2)

// console.log("The variable 'newVariable' also matches the value of string 2, but does NOT match the type! : ")
// console.log(newVariable === "2")


//#endregion

//#region 9

// console.log("") // blank line
// console.log("Section 9")
// console.log("==================")
// //TODO: Loops

//#endregion 9

console.log("") // blank line
console.log("Program ending.")
console.log("==================")
