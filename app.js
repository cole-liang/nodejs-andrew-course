const fs = require("fs");

fs.writeFileSync("note.txt", "Hello World!\n");

fs.appendFileSync("note.txt", "Well Done!");
