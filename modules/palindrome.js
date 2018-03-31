const palindrome = sentence => {
	let sentenceAux = sentence.toUpperCase()
	sentenceAux = sentenceAux.replace(/ /g, ''); //handle spaces
	sentenceAux = sentenceAux.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''); //handle special chars
	let reversedSentence = sentenceAux.split("").reverse().join("");
	return (reversedSentence === sentenceAux) ? true : false
}

module.exports = palindrome