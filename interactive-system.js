let userAge = 0

let userName = prompt("Enter your name here");
userAge = Number(prompt("Enter your age here"));



if (0 < userAge && userAge <= 11) {
    console.log(`Hi ${userName}, you are a kid`)
    alert(`Hi ${userName}, you are a kid`)
} 
else if (12 <= userAge && userAge <= 17) {
    console.log(`Hi ${userName}, you're a minor. keep learning and enjoying code!`)
    alert(`Hi ${userName}, you're a minor. keep learning and enjoying code!`)
} 
else if (18 <= userAge && userAge <= 35) {
    console.log(`Hi ${userName}, you're an adult. Get ready for great oportunities in the world of programming!`)
    alert(`Hi ${userName}, you're an adult. Get ready for great oportunities in the world of programming!`)
} 
else if (36 <= userAge && userAge <= 100) {
    console.log(`Hi ${userName}, enyoy your life.`)
    alert(`Hi ${userName}, enyoy your life.`)
} 
else {
    console.log(`Error: Please, enter a valid age in numbers`)
    alert(`Error: Please, enter a valid age in numbers`)
};


console.log(`User Name: ${userName} `);
console.log(`User Age: ${userAge}`);