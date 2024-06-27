import Alpine from 'alpinejs'

import { init } from '../utils/alpine'

import '../CanvasDrawing.js'

/*

Description:
--------------
Create an interactive canvas

Example Usage:
---------------
<div x-data="scribbler"></div>

*/

init(() => {
	Alpine.data('scribbler', () => ({
		init(args) {
			let canvas = this.$el.querySelector('canvas')

			window.CanvasDrawing.init({
				container: this.$el,
				canvas: canvas,
			})
		},
		destroy() {
			window.CanvasDrawing.stop()
		},
	}))
})
