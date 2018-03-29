const palindrome = sentence => {
	let reversedSentence = sentence.split("").reverse().join("");
	return (reversedSentence === sentence) ? true : false
}

module.exports = palindrome