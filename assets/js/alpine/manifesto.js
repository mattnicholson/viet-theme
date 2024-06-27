import Alpine from 'alpinejs'

import { init } from '../utils/alpine'
import { strToWordSpans } from '../utils/string'
import onViewportProgress from '../dom/onViewportProgress'

/*

Description:
--------------
Light up words in sentences as the element scrolls through the viewport. 

Example Usage:
---------------
<div x-data="manifesto">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
	Alpine.data('manifesto', () => ({
		$container: null,
		sourceContent: '',
		stopRenderLoop: null,
		state() {},
		init(args) {
			let hasP = this.$el.querySelector('p')
			this.$container = hasP ? hasP : this.$el

			this.sourceContent = this.$container.innerHTML

			let spanified = strToWordSpans(this.sourceContent)

			this.$container.innerHTML = spanified

			let spans = this.$container.querySelectorAll('span')
			let total = spans.length

			const [props, stopRenderLoop] = onViewportProgress(
				({ progress }) => {
					spans.forEach((span, ix) => {
						if (ix / total <= progress) {
							span.classList.add('active')
						} else {
							span.classList.remove('active')
						}
					})
				},
				{
					ref: this.$el,
					start: window.innerHeight * 0.85,
					distance: window.innerHeight * 0.5,
				}
			)

			this.stopRenderLoop = stopRenderLoop
		},
		destroy() {
			if (this.stopRenderLoop) this.stopRenderLoop()
		},
	}))
})
