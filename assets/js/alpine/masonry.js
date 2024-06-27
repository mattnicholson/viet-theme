import Alpine from 'alpinejs'

import { init } from '../utils/alpine'

import Masonry from 'masonry-layout'

/*

Description:
--------------
Layout items in masonry

Example Usage:
---------------
<div x-data="masonry">
	<div class="grid-item">
		[[ ITEM 1]]
	</div>
	<div class="grid-item">
		[[ ITEM 2]]
	</div>
	<div class="grid-item">
		[[ ITEM 2]]
	</div>
</div>

*/

init(() => {
	Alpine.data('masonry', () => ({
		init(args) {
			var msnry = new Masonry(this.$el, {
				// options...
				itemSelector: '.grid-item',
				columnWidth: '.grid-sizer',
				percentPosition: true,
			})
		},
		destroy() {},
	}))
})
