const polygonCentroids = require('polygon-centroid')
const polylabel = require('polylabel')
const extractPoints = require('./extract-points-from-path')

module.exports = function getCentroidsFromRegions(regions) {
	return regions.map(region => {
		let path = region.path
		let points = extractPoints(path, false)

		let centroid = polygonCentroids(points)
		let precision = 2
		centroid.y = centroid.y.toFixed(precision)
		centroid.x = centroid.x.toFixed(precision)

		points = extractPoints(path, true)
		let optimal = polylabel([points], 1.0)

		return {
			id: region.id,
			name: region.name,
			// centroid: centroid,
			optimal: [`${optimal[0].toFixed(2)}%`, `${optimal[1].toFixed(2)}%`]
		}
	})
}