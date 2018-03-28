const polygonCentroid = require('polygon-centroid')
const getCentroidsFromRegions = require('./get-centroids-from-regions')
const writeToJson = require('./write-to-json')

const regions = [
	require('./data/R5-S1'),
	require('./data/R5-S2'),
	require('./data/R5-S3'),
	require('./data/R6-S1'),
	require('./data/R6-S2'),
	require('./data/R6-S3')
]

function main(regions) {
	for (let i = 0; i < regions.length; i++) {
		let region = regions[i]
		let centroids = getCentroidsFromRegions(region)
		writeToJson(centroids, `${i}.json`)
	}
}

main(regions)