//              TASK 1
// let name = prompt("What is your name?")
// let firstLetter = name[0].toUpperCase()
// let other = name.slice(1).toLowerCase()
// let standardizedName = firstLetter.concat(other)
// console.log(standardizedName.length);
// alert("Hello " + standardizedName)

//              TASK 2
// function main() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnLeft();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     turnLeft();
//     move();
//     putBeeper();
// }

//             TASK 2 ALT
// function turnRight() {
//     turnLeft();
//     turnLeft();
//     turnLeft();
// }

// function main() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     turnLeft();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnRight();
//     move();
//     turnRight();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     turnLeft();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnRight();
//     move();
//     turnRight();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
// }


//                    TASK 3
// function turnRight() {
//     turnLeft();
//     turnLeft();
//     turnLeft();
// }
// function main(){
//   turnLeft();
//   move();
//   move();
//   move();
//   move();
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   turnRight();
//   move();move();
//   turnRight();
//   move();
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   turnLeft();
//   move();
//   move();
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   turnLeft();
//   move();
//   move();
//   turnLeft();
//   move();
//   turnRight();
//   move();
//   move();
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   pickBeeper();
// }


//          TASK 4
// let userAge = +prompt(`Введите свой возраст`)
// function lifeInWeeks(age) {
//     const yearsRemaining = 90 - age
//     const days = yearsRemaining * 365
//     const weeks = yearsRemaining * 52
//     const months = yearsRemaining * 12

//     console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
// }
// lifeInWeeks(userAge)


//         TASK 5
// let userWeight = +prompt(`Enter your weight in killos`)
// let userHeight = +prompt(`Enter your height in meters`)
// function calculateBMI(weight, height) {
//     let bmi = weight / height**2

//     if (bmi < 18.5) {
//         return "Your BMI is " + bmi + ", which means you are underweight."
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "Your BMI is " + bmi + ", which means you have a normal weight."
//     } else {
//         return "Your BMI is " + bmi + ", which means you might be overweight."
//     }
// }
// let result = calculateBMI(userWeight, userHeight)

// console.log(result)


//              TASK 6
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true
//             } else {
//                 return false
//             }
//         } else {
//             return true
//         }
//     } else {
//         return false
//     }
// }
// console.log(isLeapYear(2400) ? "Leap year." : "Not Leap year.")
// console.log(isLeapYear(1989) ? "Leap year." : "Not Leap year.")


//               TASK 7
// function selectRandomName(names) {
//     let randomIndex = Math.floor(Math.random() * names.length)
//     let selectedName = names[randomIndex]
//     return selectedName + " is going to buy lunch today."
// }

// let names = ["Ahmar", "Bek", "Karina", "Daniyar", "Tumar"]
// let output = selectRandomName(names)
// console.log(output)


//              TASK 8
// function fibonacciGenerator(n) {
//     let sequence = [0, 1]

//     for (let i = 2; i < n; i++) {
//         let nextNumber = sequence[i - 1] + sequence[i - 2];
//         sequence.push(nextNumber)
//     }

//     return sequence
// }
// let sequence = fibonacciGenerator(10)
// console.log(sequence)