let userAge = 0

let userName = prompt("Enter your name here");
userAge = prompt("Enter your age here");

if (0 < userAge <= 11) {
    console.log("You are a kid")
    alert("You are a kid")
} 

else if (12 <= userAge <= 17) {
    console.log(`Hi ${userName}, you're a minor. keep learning and enjoying code!`)
    alert(`Hi ${userName}, you're a minor. keep learning and enjoying code!`)
} 

else if (18 <= userAge <= 35) {
    console.log(`Hi ${userName}, you're an adult. Get ready for grea oportunities in the world of programming!`)
    alert(`Hi ${userName}, you're an adult. Get ready for grea oportunities in the world of programming!`)
} 

else if (12 <= userAge <= 17) {
    console.log(`Hi ${userName}, enyoy your life.`)
    alert(`Hi ${userName}, enyoy your life.`)
} 

else {
    console.log(`Error: Please, enter a valid age in numbers`)
    alert(`Error: Please, enter a valid age in numbers`)
}


console.log(userName, userAge)