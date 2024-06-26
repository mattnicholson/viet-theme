import Alpine from 'alpinejs'
import Values from 'values.js'
import { init } from '../utils/alpine'
import { injectCSS,injectJS } from '../utils/dom'

/*

Description:
--------------
Initialise a mapbox

Example Usage:
---------------
<div x-data="map" data-styles="mapbox://...."></div>

*/

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWF0dG5pY2hvbHNvbiIsImEiOiJjbG5pd2owMDAxNnpsMmtuazlzNzlsZ3hkIn0.Nb5wUnelQnKppEYQQPflpw';
let mapboxgl = window.mapboxgl ? window.mapboxgl : null;

const initMapbox = ($el,callback) => {

	if(!$el) return;
	// No API - try again....
	if(!mapboxgl){
		setTimeout(()=>{
			initMapbox($el,callback);
		},500)
		return;
	}else{
		let styles = $el.dataset.styles
		let markerHex = $el.dataset.hex || '#C9C9C9'
		let tint = $el.dataset.tint || markerHex
		let accent = $el.dataset.accent || '#FFFFFF'
		let latLng = $el.dataset.latlng.split(',')
		let lat = parseFloat(latLng[0].trim())
		let lng = parseFloat(latLng[1].trim())

		const colours = new Values(tint).all(20)
		const accents = new Values(accent).all(20)

		const map = new mapboxgl.Map({
			container: $el, // container ID
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

		map.on('load', () => {
			const styleJson = map.getStyle()
			//console.log(styleJson)

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

		callback(map);

		// Iterate through the layers and print their IDs
		/*style.layers.forEach(function (layer) {
			console.log('Layer ID: ' + layer.id)
		})*/
	}

}

init(() => {

	injectCSS('https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css');
	injectJS('https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js',()=>{
		mapboxgl = window.mapboxgl;
		mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
	});

	Alpine.data('mapbox', () => ({
		map: null,
		init(args) {
			
			
			this.$nextTick(() => {

				initMapbox(this.$el,(map)=>{
					this.map = map;
				});

			})
		},

		destroy() {
			if (this.map) this.map.remove()
		},
	}))
})
