import Alpine from 'alpinejs'
import Values from 'values.js'
import { init } from '../utils/alpine'

/*

Description:
--------------
Initialise a mapbox

Example Usage:
---------------
<div x-data="map" data-styles="mapbox://...."></div>

*/

const mapboxgl = window.mapboxgl

init(() => {
	Alpine.data('mapbox', () => ({
		map: null,
		init(args) {
			let styles = this.$el.dataset.styles
			let markerHex = this.$el.dataset.hex || '#C9C9C9'
			let tint = this.$el.dataset.tint || markerHex
			let accent = this.$el.dataset.accent || '#FFFFFF'
			let latLng = this.$el.dataset.latlng.split(',')
			let lat = parseFloat(latLng[0].trim())
			let lng = parseFloat(latLng[1].trim())

			const colours = new Values(tint).all(20)
			const accents = new Values(accent).all(20)

			mapboxgl.accessToken =
				'pk.eyJ1IjoibWF0dG5pY2hvbHNvbiIsImEiOiJjbG5pd2owMDAxNnpsMmtuazlzNzlsZ3hkIn0.Nb5wUnelQnKppEYQQPflpw'

			this.$nextTick(() => {
				const map = new mapboxgl.Map({
					container: this.$el, // container ID
					// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
					style: styles, // style URL
					center: [lng, lat], // starting position [lng, lat]
					zoom: 17, // starting zoom,
				})

				const marker1 = new mapboxgl.Marker({
					color: markerHex,
				})
					.setLngLat([lng, lat])
					.addTo(map)

				// Add zoom and rotation controls to the map.
				map.addControl(new mapboxgl.NavigationControl())
				// disable map zoom when using scroll
				map.scrollZoom.disable()
				this.map = map

				map.on('load', () => {
					const styleJson = map.getStyle()
					console.log(styleJson)

					styleJson.layers.forEach((layer) => {
						let tint = colours[3]
						let bg = colours[1]
						let outline = colours[3]
						let labelOutline = accents[1]

						if (layer.type.match('background')) tint = bg
						if (layer.id.match('road')) tint = accents[5]
						if (layer.id.match('structure')) tint = colours[2]
						if (layer.id.match('building')) tint = colours[2]
						if (layer.id.match('water')) tint = colours[5]
						if (layer.id.match('label')) tint = accents[9]

						let rgb = `rgb(${tint.rgb[0]},${tint.rgb[1]},${tint.rgb[2]})`

						let property = `${layer.type}-color`
						if (layer.id.match('label')) property = 'text-color'
						if (layer.type.match('background')) property = 'background-color'

						if (
							[
								'background-color',
								'text-color',
								'fill-color',
								'line-color',
							].indexOf(property) !== -1
						) {
							map.setPaintProperty(layer.id, property, rgb)
						}

						if (layer.id.match('building')) {
							map.setPaintProperty(
								layer.id,
								'fill-outline-color',
								`rgb(${outline.rgb[0]},${outline.rgb[1]},${outline.rgb[2]})`
							)
						}

						if (layer.id.match('label')) {
							map.setPaintProperty(
								layer.id,
								'text-halo-color',
								`rgb(${labelOutline.rgb[0]},${labelOutline.rgb[1]},${labelOutline.rgb[2]})`
							)
						}
					})
				})

				// Iterate through the layers and print their IDs
				/*style.layers.forEach(function (layer) {
					console.log('Layer ID: ' + layer.id)
				})*/
			})
		},

		destroy() {
			if (this.map) this.map.remove()
		},
	}))
})
