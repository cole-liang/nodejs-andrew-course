const validator = require("validator");

const notes = require("./notes.js");

console.log(notes());

console.log(validator.isEmail("asdf"));

// const fs = require("fs");

// fs.writeFileSync("note.txt", "Hello World!\n");

// fs.appendFileSync("note.txt", "Well Done!");
