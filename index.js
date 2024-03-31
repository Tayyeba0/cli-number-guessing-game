#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumbers",
        type: "number",
        message: "please guess a number",
    }]);
if (answers.userGuessedNumbers === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("sorry! you guessed wrong number.");
}
