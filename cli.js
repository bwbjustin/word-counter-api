#!/usr/bin/env node
const counter = require("./counter")(process.argv.slice(2).join(" "));

console.log(`${counter.words} words, ${counter.characters} characters`);