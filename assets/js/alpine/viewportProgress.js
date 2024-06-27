import Alpine from 'alpinejs'

import { init } from '../utils/alpine'
import { strToWordSpans } from '../utils/string'
import onViewportProgress from '../dom/onViewportProgress'

/*

Description:
--------------
Track progress up the viewport

Example Usage:
---------------
<div x-data="viewportProgress" x-bind="opacity">Lorem ipsum dolor<br />sit amet</div>

*/

function lerp(start, end, t) {
	// Ensure that t is clamped between 0 and 1
	t = Math.max(0, Math.min(1, t))

	// Calculate the interpolated value
	return (1 - t) * start + t * end
}

init(() => {
	Alpine.data('viewportProgress', () => ({
		amt: 0,
		stopRenderLoop: null,
		progress: 0,
		state() {},
		init(args) {
			const [props, stopRenderLoop] = onViewportProgress(
				({ progress }) => {
					this.progress = progress
				},
				{
					ref: this.$el,
					start: window.innerHeight,
					//distance: window.innerHeight * 0.5,
					//ignoreHeight: false,
				}
			)
			if (window.lenis && this.$el.dataset.parallax) {
				let amt = 0
				let pllx = parseInt(this.$el.dataset.parallax)

				window.lenis.on('scroll', (props) => {
					amt = lerp(amt, this.progress, 0.1)
					this.$el.style.transform = `translate3d(0 ,${amt * pllx}%,0)`
				})
			}

			this.stopRenderLoop = stopRenderLoop
		},
		opacity: {
			[':style']() {
				return `opacity:${1 - this.progress};`
			},
		},
		parallax: {
			[':style']() {
				return ``
			},
		},
		destroy() {
			if (this.stopRenderLoop) this.stopRenderLoop()
		},
	}))
})
