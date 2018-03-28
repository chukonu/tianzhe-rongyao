const fs = require('fs')

function writeToJson(obj, filename) {
	let json = JSON.stringify(obj)
	fs.writeFileSync(`./output/${filename}`, json)
}

module.exports = writeToJson