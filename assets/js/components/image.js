import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

import { init } from '../utils/alpine'

Alpine.plugin(intersect)

/*

Description:
--------------
Lazy image loader

Example Usage:
---------------
<div x-data="image" x-bind="lazy" data-src="/path/to/image.jpg"></div>

*/

init(() => {
	Alpine.data('image', () => ({
		isLoading: false,
		loaded: false,
		state() {
			if (this.loaded) return 'loaded'
			if (this.isLoading) return 'loading'
			return 'passive'
		},
		init(args) {
			// Load immediately if not lazy
			if (!this.$el.getAttribute('x-bind')) this.load()
		},
		setImage() {
			let src = this.$el.dataset.src
			let fit = this.$el.dataset.fit || 'natural'

			if (src) {
				this.$el.innerHTML = `<img src="${src}" class="block w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
					fit === 'natural' ? 'object-none' : ''
				} ${fit === 'cover' ? 'h-full object-cover' : ''} ${
					fit === 'contain' ? 'h-full object-contain' : ''
				}" />`
			}
		},
		load() {
			let src = this.$el.getAttribute('data-src')

			if (src) {
				this.isLoading = true
				let i = new Image()
				i.onload = () => {
					this.isLoading = false
					this.loaded = true
					this.setImage()
				}
				i.src = src
			}
		},
		lazy: {
			[':class']() {
				return `Image--${this.state()}`
			},
			['x-intersect.once']() {
				this.load()
			},
		},
	}))
})
