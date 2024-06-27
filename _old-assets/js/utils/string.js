function strToArr(str) {
	let out = []
	for (var i = 0; i < str.length; i++) {
		out.push(str[i].replace(/ /g, '\u00a0'))
	}
	return out
}

function strToWordSpans(str) {
	return str
		.trim()
		.split(' ')
		.map((word) => {
			let last = word.match(/\.$/)

			return `<span class="${last ? 'last' : ''}">${word}</span> `
		})
		.join(' ')
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
}

export { strToArr, toTitleCase, strToWordSpans }
