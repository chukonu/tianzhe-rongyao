// extracts x and y from a CSS polygon clip-path string
function extractPoints(str, inArrayForm) {
	// 'polygon(' - starts from index 8
	// ends at length-1
	let s = str.substring(8, str.length - 1)
	let pointStrs = s.split(',').map(p => p.trim())
	return pointStrs.map(str => {
		let percentages = str.split(' ')
		if (inArrayForm)
			return [excludePercentSign(percentages[0]), excludePercentSign(percentages[1])]
		return {
			x: excludePercentSign(percentages[0]),
			y: excludePercentSign(percentages[1])
		}
	})
}

function excludePercentSign(percentage) {
	return parseFloat(percentage.substring(0, percentage.length - 1))
}

module.exports = extractPoints