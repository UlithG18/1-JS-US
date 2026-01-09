let userAge = 0

let userName = prompt("Enter your name here");
userAge = prompt("Enter your age here");
confirm("Are you a coder?");

switch (userAge) {
    case 0 < userAge <= 11:
        console.log("You are a kid")

    case 12 <= userAge <= 17:
        console.log(`Hi ${userName}, you're a minor. keep learning and enjoying code!`)

    case 18 <= userAge <= 35:
        console.log("You are an adult.")

    case 36 <= userAge <= 100:
        console.log("Enjoy your life.")

    default:
        console.error("Error: Please, enter a valid age in numbers.")
}



console.log(userName, userAge)