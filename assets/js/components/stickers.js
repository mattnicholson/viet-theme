import Alpine from 'alpinejs'

import { init } from '../utils/alpine'

import '../Stickers.js'

/*

Description:
--------------
Add stickers on click

Example Usage:
---------------
<div x-data="stickers"></div>

*/

init(() => {
	Alpine.data('stickers', () => ({
		init(args) {
			window.Stickers.init()
		},
		destroy() {
			window.Stickers.kill()
		},
	}))
})
