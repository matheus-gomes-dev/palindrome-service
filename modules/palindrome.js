const palindrome = sentence => {
	let sentenceAux = sentence.toUpperCase()
	let reversedSentence = sentence.split("").reverse().join("").toUpperCase();
	return (reversedSentence === sentenceAux) ? true : false
}

module.exports = palindrome