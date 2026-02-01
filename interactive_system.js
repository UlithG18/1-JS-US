
// Ask for the information to start the logic
let userName = prompt("Enter your name here");
let userAge = Number(prompt("Enter your age here"));


// Check if the user is a child (valid positive age up to 11)
if (0 < userAge && userAge <= 11) {
    // Output a message for kids
    console.log(`Hi ${userName}, you are a kid`)
    alert(`Hi ${userName}, you are a kid`)
}

// Check if the user is a minor (teenage range)
else if (12 <= userAge && userAge <= 17) {
    // Encourage learning during the early coding stage
    console.log(`Hi ${userName}, you're a minor. Keep learning and enjoying code!`)
    alert(`Hi ${userName}, you're a minor. Keep learning and enjoying code!`)
}

// Check if the user is a young adult
else if (18 <= userAge && userAge <= 35) {
    // Highlight opportunities in the professional stage
    console.log(`Hi ${userName}, you're an adult. Get ready for great opportunities in the world of programming!`)
    alert(`Hi ${userName}, you're an adult. Get ready for great opportunities in the world of programming!`)
}

// Check if the user is a mature adult
else if (36 <= userAge && userAge <= 100) {
    // General message for later life stages
    console.log(`Hi ${userName}, enjoy your life.`)
    alert(`Hi ${userName}, enjoy your life.`)
}

// Handle invalid or unrealistic age values
else {
    // Inform the user about incorrect input
    console.log(`Error: Please, enter a valid age in numbers`)
    alert(`Error: Please, enter a valid age in numbers`)
}
