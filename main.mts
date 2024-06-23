#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bgRedBright.italic(" \n Welcome to My Currency Converter!\n"))

//define the list of currencies and their exchange rate
let exchange_rate: any ={
    "USD" : 1,
    "EUR" : 0.9,
    "WON" : 148,
    "YEN" :113,
    "INR" :230
}

// PROMPT THE USER TO SELECT CURRENCIES FROM AND TO
let user_answer = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : "Please select currency to convert from",
        choices : ["USD","EUR","WON","YEN","INR"]
            
    },
    {
        name : "to_currency",
        type : "list",
        message : "Please select currency to convert to :",
        choices : ["USD","EUR","WON","YEN","INR"]
    },
    {
        name : "amount",
        type : "input",
        message : "Please enter your amount to convert"
    }
]);
// perform currency conversion by using formula
let from_amount =exchange_rate[user_answer.from_currency]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount : ${converted_amount}`)