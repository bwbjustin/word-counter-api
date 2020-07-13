#!/usr/bin/env node
const counter = require("./counter")(process.argv.slice(2).join(" "));

console.log(`${counter.words} ${counter.words != 1 ? "words" : "word"}, ${counter.characters} characters`);
