#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Predict the number within the range of 1 to 10"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Hurrah! You guessed the right number");
}
else {
    console.log("Unfortunately You guessed the wrong number");
}
