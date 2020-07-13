[Github](https://github.com/hiimjustin000/word-counter-api) | **NPM**

![NPM Version](https://img.shields.io/npm/v/word-counter-api.svg?maxAge=3600) ![NPM Downloads](https://img.shields.io/npm/dt/word-counter-api.svg?maxAge=3600)

# Word Counter API
Word counting API w/CLI

```js
const counter = require("word-counter-api");

counter("Test thing because yes"); // { words: 4, characters: 22 }
```

Even comes with a CLI!

```
$ count Test thing because yes
4 words, 22 characters
```

Installation:

```
API: npm install word-counter-api
CLI: npm install -g word-counter-api
```