console.log("Hey, it works!")

// What are the data types in JavaScript?

// PRIMITIVE DATA TYPES:
//   Number: 0, 1, 4236534267, 4.45, -65, Infinity, NaN
//   String: "hello", '32458 beers on the wall', `bat`, " ", ""
//   Boolean: true, false
//   undefined
//   null
// COMPLEX DATA TYPES:
//   Object



let currentPlayer
currentPlayer = 3403
// console.log({currentPlayer})

let nextPlayer = 1245

// Next turn:
let temp = currentPlayer
currentPlayer = nextPlayer
nextPlayer = temp



let sum = function (x, y, z) {
    return x + y + z
}

let printPaper = function (electricity, paper, ink, documentData) { // Receiving
    // ...
    let printedPage = "whatever"

    return printedPage // Outbound (OTR)
}

let passThrough = function (value) {
    console.log(value)
    return value
}

let output = passThrough(3)
console.log(output)

let log = function (value) {
    console.log("The value is: " + value)

    return value
}

let result = log("batman")
console.log(result)
// console.log(log)

let page = printPaper(145, "A4", "black", "<html></html>")
console.log(page)

console.log(printPaper)

// run a function
// call a function
// invoke a function
// execute a function
// evaluate a function
// "perform" a function
// "hitting start on a printer"


let warehouse = function (items, workers, electricity, food, water, equipment) { // Receiving
    // ...
    // ...

    let packages = []
    return packages // Outbound (OTR)
}

warehouse()



let greetingIntroduction = "Good morning, "

let greet = function (name) {
    let message = greetingIntroduction + name
    return message
}


// Given the input "Joseph",
// function should output the string "Good morning, Joseph"
console.assert(greet("Joseph") === "Good morning, Joseph")

// Given the input "",
// function should output the string "Good morning, "
console.assert(greet("") === "Good morning, ")

// "edge cases"