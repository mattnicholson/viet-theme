import Alpine from 'alpinejs'
import { init } from '../utils/alpine'

/*

Description:
--------------
Set the title of the store page.title

Example Usage:
---------------
<div x-data x-effect="$store.page.setTitle('Home')"></div>

<h1 x-data x-text="$store.page.title"></h1>
<div x-data x-text="$store.page.url"></div>

<a href="#" x-data="pageLink">A page link</a>

*/

init(() => {
	Alpine.store('page', {
		title: '',
		modifier: 'default',
		url: window.location.pathname,
		setTitle(title) {
			this.title = title
		},
		setModifier(modifier) {
			this.modifier = modifier
		},
		setUrl(url) {
			this.url = url
		},
	})

	Alpine.data('pageLink', () => ({
		isActive(el) {
			const $el = el || this.$el
			const p = Alpine.store('page')
			const url = $el.getAttribute('href')

			if (url === '/') return url === p.url

			return p.url.match(url)
		},
		update() {
			if (this.isActive()) {
				this.$el.classList.add('active')
				this.$el.classList.remove('inactive')
			} else {
				this.$el.classList.remove('active')
				this.$el.classList.add('inactive')
			}
		},
		init(args) {
			// Always activate this link on click
			this.$el.addEventListener('click', () => {
				const curUrl = Alpine.store('page').url
				// Deactivate all active links
				document
					.querySelectorAll('[x-data="pageLink"].active')
					.forEach((el) => {
						// We want to decative the exact current page, but keep breadcrumb pages active...
						if (curUrl === el.getAttribute('href') || !this.isActive(el)) {
							el.classList.remove('active')
							el.classList.add('inactive')
						}
					})
				// Add active to the clicked element
				this.$el.classList.add('active')
				this.$el.classList.remove('inactive')
			})
			// Watch state for changes
			this.update()
			this.$watch('isActive', () => {
				this.update()
			})
		},
	}))
})
