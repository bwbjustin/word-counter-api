module.exports = function counter(text) {
	return { words: text.split(" ").length, characters: text.length }
}