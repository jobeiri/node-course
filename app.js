const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Amir Hossein Jobeiri.");
fs.appendFileSync("notes.txt", " My name is Amir Hossein Jobeiri.");
