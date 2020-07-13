const counter = require("./counter")(process.argv.slice(2));

console.log(`${counter.words} words, ${counter.characters} characters`);