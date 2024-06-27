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

init(() => {
	Alpine.data('locationsModal', () => ({
		isActive: false,
		isMatch() {
			let router = Alpine.store('route')
			if (router) {
				return router.match('#(locations|book|menu|takeaway|delivery)')
			}
		},

		close() {
			let router = Alpine.store('route')
			if (router) {
				return router.removeHash()
			}
			this.isActive = false
		},
		closeOutside() {
			console.log(window.location.hash)
		},
		init(args) {},
	}))
})
