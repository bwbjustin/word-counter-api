module.exports = function counter(text) {
	return { words: text.split(" ").filter(val => val !== '').length, characters: text.length }
}
