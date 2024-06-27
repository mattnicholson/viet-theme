import Alpine from 'alpinejs'
import Lenis from '@studio-freight/lenis'

import { init } from '../utils/alpine'

/*

Description:
--------------
Make a div a lenis scroller

Example Usage:
---------------

*/

function getFirstElementChild(parentElement) {
	let firstElementChild = null

	// Loop through all children of the parent element
	for (let i = 0; i < parentElement.childNodes.length; i++) {
		const child = parentElement.childNodes[i]

		// Check if the child is an ELEMENT_NODE
		if (child.nodeType === Node.ELEMENT_NODE) {
			firstElementChild = child
			break // Exit the loop when the first ELEMENT_NODE is found
		}
	}

	return firstElementChild
}

init(() => {
	Alpine.data('lenis', () => ({
		lenis: null,
		raf(time) {
			this.lenis.raf(time)
			this.updateCallback = this.raf.bind(this)
			this.loop = requestAnimationFrame(this.updateCallback)
		},

		init(args) {
			// Start lenis
			const lenis = new Lenis({
				wrapper: this.$el,
				content: getFirstElementChild(this.$el),
				wheelEventsTarget: this.$el,
			})
			this.lenis = lenis

			this.updateCallback = this.raf.bind(this)
			this.loop = requestAnimationFrame(this.updateCallback)
		},
		destroy() {
			// Clear animation
			if (this.loop) {
				cancelAnimationFrame(this.loop)
			}
			if (this.lenis) this.lenis.destroy()
			this.lenis = null
		},
	}))
})
