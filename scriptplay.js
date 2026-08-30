let number1;
let number2;
let correctAnswer;
let operator;


function newQuestion() {

    // Random numbers from 1 to 1000
    number1 = Math.floor(Math.random() * 1000) + 1;
    number2 = Math.floor(Math.random() * 1000) + 1;

    // Random operator
    let operators = ["+", "-", "×", "÷"];

    operator = operators[
        Math.floor(Math.random() * operators.length)
    ];


    // Calculate the correct answer
    if (operator === "+") {

        correctAnswer = number1 + number2;

    } else if (operator === "-") {

        correctAnswer = number1 - number2;

    } else if (operator === "×") {

        correctAnswer = number1 * number2;

    } else if (operator === "÷") {

        // Make division have a whole-number answer
        correctAnswer = Math.floor(Math.random() * 20) + 1;

        number2 = Math.floor(Math.random() * 50) + 1;

        number1 = correctAnswer * number2;
    }


    // Show question
    document.getElementById("question").textContent =
        `What is ${number1} ${operator} ${number2}?`;

    document.getElementById("answer").value = "";

    document.getElementById("result").textContent = "";
}


function checkAnswer() {

    let answer = Number(
        document.getElementById("answer").value
    );


    if (answer === correctAnswer) {

        document.getElementById("result").textContent =
            "Correct! ✅";

        setTimeout(newQuestion, 1000);

    } else {

        document.getElementById("result").textContent =
            "Wrong! ❌";
    }
}


newQuestion();


















console.log("There is nothing here, turn around");