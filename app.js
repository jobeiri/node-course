const chalk = require("chalk");
const getNotes = require("./notes.js");

const message = getNotes();
console.log(message);

console.log(chalk.green.inverse.bold("Success"));
