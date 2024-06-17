import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'
import onViewportProgress from '../../../../assets/js/dom/onViewportProgress'

/*

Description:
--------------
Boilerplate component

Example Usage:
---------------
<div x-data="test">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
	Alpine.data('test', () => ({
		$container: null,
		sourceContent: '',
		stopRenderLoop: null,
		state() {},
		init(args) {
			this.$container = this.$el;
			this.sourceContent = this.$container.innerHTML

			const [props, stopRenderLoop] = onViewportProgress(
				({ progress }) => {
					// Progress callback...
					console.log(progress)
				},
				{
					ref: this.$el
				}
			)

			this.stopRenderLoop = stopRenderLoop
		},
		destroy() {
			if (this.stopRenderLoop) this.stopRenderLoop()
		},
	}))
})
