// VAT Caluculation
// let price = Number(prompt('What\s the price?'))
// let total = price + price * .206
// alert(`With VAT, your total price is ${total}. DAAAAAAAAMMNN`)


// Variable swapping
// let number1 = 5;
// let number2 = 3;

// let numberSwapper1 = number2
// let numberSwapper2 = number1

// number1 = numberSwapper1
// number2 = numberSwapper2

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5


// Switch practice
// let highScore = 8


// switch(highScore) {
//     case 1:
//         console.log('kina low score')
//         break
//     case 2:
//         console.log('not bad')
//         break
//     case 3:
//         console.log('damn nice')
//         break
//     default:
//         console.log('what\'s your face')
// }


const hoursInput = document.querySelector('#hours')
const minsInput = document.querySelector('#mins')
const secsInput = document.querySelector('#secs')
const btnInput = document.querySelector('#btn')
const enteredTime = document.querySelector('#enteredTimeOutput')
const timePlusOne = document.querySelector('#timePlusOneOutput')

console.log(enteredTime)
btn.addEventListener('click', thing)

function thing() {
    let hours = hoursInput.value
    let mins = minsInput.value
    let secs = secsInput.value

console.log('clickything entered')

    enteredTime.innerText = `You entered ${hours}H, ${mins}M, ${secs}S`

    if(secs != 59) {
        secs++
    }
    else if(mins != 59) {
        secs = 0
        mins++
    }
    else if(hours != 23) {
        secs = 0
        mins = 0
        hours++
    }
    else {
        secs = 0
        mins = 0
        hours = 0
    }


    timePlusOne.innerText = `One second later is ${hours}H, ${mins}M, ${secs}S`

    console.log(Math.random(1,5))
}

// Say hello to the user
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }
  

// let fname = prompt('first name?')
// let lname = prompt('last name?')


// console.log(sayHello(fname, lname))
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result

// DONE


// Square the given number x
// function square1(x) {
//     // TODO: complete the function code
//     return x * x
// }
  
// Square the given number x
// const square2 = x => x*x // TODO: complete the function code

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25


// for(let i = 1; i < 100; i++) {
// console.log(i)
// console.log(square1(i))
// console.log('hi')
// }
// while(i<100) {
//     console.log(i)
//     console.log(square1(i))
//     console.log('hi')
//     i++
// }
// console.log('loop entered')


// i=1
// loop()

// console.log(loop())

// const squareMe = x => x*x

// for(blob = 1; blob <= 12; blob++){
// console.log(squareMe(10))
// }

// // while(blob ) {
// //     console.log('crashing your broswes')
// // }

// function loopin(loopTill) {
//     for(i = 1; i < loopTill; i++) {
//         console.log('dude')
//     }
// }

// loopin(5)




// TODO: write the min() function

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1


// function min(num1, num2) {
//     if(num1<num2) return num1
//     else return num2
// }

// TODO: complete program

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

// function calculate(a,op,b) {
//     if(op==="+") return a + b
//     else if(op==="-") return a - b
//     else if (op==="*") return a * b
//     else if (op==="/") return a/b
// }




// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3
// area = 3.14 * radius squared
// circ = 3.14 * diam

// let radius = prompt('What\'s the circle\'s radius?')

// let area = Math.PI * (radius ** 2)
// let circ = Math.PI * (radius * 2)

// alert(`The area is ${area} and the circ is ${circ}`)



/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
// let output = ''
// for(let i=0; i<10; i++){
//     output += '#'
//     console.log(output)
// }

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

// for(let i = 1; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz')
//     }
//     else if(i % 3 === 0){
//         console.log('Fizz')
//     }
//     else if(i % 5 === 0){
//         console.log('Buzz')
//     }
//     else console.log(i)

// }

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


*/

/* PSUEDO CODE
If row is odd,  write "0#0#0#0#\n"
if row is even, write "#0#0#0#0\n"

if row is odd and char is odd OR row is even and char is even, write 0

*/


let output = ''

// FOR NUMBER OF ROWS
for(let row = 1; row <= 8; row++) {
    console.log(`i'm in row ${row}`)
    // WRITE OUT EACH ROW
    let rowChars = ''
    for(let char = 1; char <= 8; char++) {
        console.log(`i'm in row ${row}, char ${char}`)

        if((!(row % 2 === 0) && !(char % 2 === 0)) ||
        ((row % 2 === 0) && (char % 2 === 0))) {
            rowChars += '0'
        } else rowChars += '#'
        console.log(`rowChars is ${rowChars}`)
        if(rowChars.length >= 8) {
            output += `\n${rowChars}`
            break
        }
    }
}
console.log(output)


/*
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

output = ''
let gridSize = 30

// FOR NUMBER OF ROWS
for(let row = 1; row <= gridSize; row++) {
    // console.log(`i'm in row ${row}`)
    // WRITE OUT EACH ROW
    let rowChars = ''
    for(let char = 1; char <= gridSize; char++) {
        // console.log(`i'm in row ${row}, char ${char}`)

        if((!(row % 2 === 0) && !(char % 2 === 0)) ||
        ((row % 2 === 0) && (char % 2 === 0))) {
            rowChars += '0'
        } else rowChars += '#'
        // console.log(`rowChars is ${rowChars}`)
        if(rowChars.length >= gridSize) {
            output += `\n${rowChars}`
            break
        }
        
    }
}
console.log(output)


function min(a,b) {
    if(a < b) return a
    else return b
}

console.log(min(-10,5))

/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(num) {
    console.log('RECURSSSIOON')
    if(num < 0) {
        num = -num
    }
    if(num == 0) return true;  
    if(num == 1) return false;
    if(isEven(num - 2)) return true;
    else return false;

}

console.log(isEven(-50))


/*
Bean counting

You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
1

/ Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/

function countBs(string) {
    length = string.length
    let totalBs = 0
    for(let i = 0; i < length; i++){
        if(string[i] === 'B') {
            totalBs++
        }
    }
    return totalBs
}

console.log(countBs("BBC"));
// → 2

function countChar(string, char) {
    length = string.length
    let totalChars = 0
    char = char.toLowerCase()
    console.log(`char is ${char}`)
    // Loop through each character by index [iterator] as long as iteraotr is less than length: stop when we've reach end of word
    for(let i = 0; i < length; i++){
        if(string[i] === char.toLowerCase() || string[i] === char.toUpperCase()) {
            totalChars++
        }
    }
    return totalChars
}


console.log(countChar("kakkerlak", "r"));
// → 4

console.log(`testing for upper and lowercase: ${countChar("how many letter T's are thEre in this long wiNding sentence?", 'e')}`)





function padString(string, padder, tarLength){
    frontPad = (tarLength - string.length) / 2
    backPad = (tarLength - string.length) / 2
    for(let i = 0; i < frontPad; i++){
        string = padder + string
    }
    for(let i = 0; i < backPad; i++){
        string = string + padder
    }
    if(string.length % 2 != 0) {
        string = removeLastChar(string)
        // console.log(wordArray)
    }

    console.log(string)
    console.log(string.length)
}

function removeLastChar(string) {
    stringArray = string.split('')
    stringArray.pop()
    string = stringArray.join('')
    return string
}

padString('I want this string to always ddddbe s loddddddddng.dhH', '/', 80)


function roll(sides = 6, base = 1) {
    result = Math.random()
    result = result * sides
    result = result + base
    result = Math.floor(result)
    console.log(result)
}

roll(100)

let num = 1.23
console.log(Math.floor(num)) // returns 1
console.log(Math.ceil(num)) //returns 2

console.log(Number.isInteger(4.3)) //returns false
console.log(Number.isInteger(2)) // returns true

const lover = ['darling','sexy','brilliant', 'adorbs']

console.log(lover.reverse())

const babe = ['cute','sexy','fun']

console.log(babe.join()) // prints 'cute,sexy,fun'
console.log(babe.join('')) // prints 'cutesexyfun'
console.log(babe.join(' and ')) // prints 'cute and sexy and fun'



const bobsFollowers = ['odin', 'friga', 'helah', 'thor']
const tinasFollowers = ['odin', 'friga', 'loki']
const mutualFollowers = []

for(let i = 0; i < bobsFollowers.length; i++){
  console.log(bobsFollowers[i])
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(i)
      console.log(mutualFollowers)
    }
  }
}

const userName = 'bob'

userName ? console.log(`hi ${userName}`) : console.log('hi stranger')


console.log(userName.substring(0,2))

	
const s ='Hello World';
console.log(s.substring(0,7));
