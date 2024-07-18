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
<a href="#" x-data="pageLink" data-exact="true">A page link</a>

To keep page data in sync with the router...
<body x-data="page">

*/

init(() => {
	Alpine.store('page', {
		title: '',
		modifier: 'default',
		url: window.location.pathname + window.location.hash,
		setTitle(title) {
			this.title = title
		},
		setModifier(modifier) {
			this.modifier = modifier
		},
		setUrl(url) {
			this.url = url
		}
	})

	// Sync with router changes, need a <body x-data="page"> or <div x-data="page"> somewhere on the page 
	Alpine.data('page', () => ({
		init(args) {
			let router = Alpine.store('route');
			if(router){
				this.$watch(()=>router.href,(val)=>{
					const p = Alpine.store('page')
					p.url = val;
				})
			}
		}
	}))

	Alpine.data('pageLink', () => ({
		isActive(el) {
			const $el = el || this.$el
			const p = Alpine.store('page')
			const url = $el.getAttribute('href')

			if (url === '/') return url === p.url

			// If it's not a hash link, check if it's an exact match with data-exact="true"
			// (hashlinks will always be partial matches)
			if(!url.match('#') && this.$el.dataset.exact){
				return url === p.url
			}

			// Return non-exact match
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
			this.$el.addEventListener('click', (ev) => {
				const curUrl = Alpine.store('page').url
				
				// Set to toggle - remove link if already active
				// Currently only works for hash links
				if(this.$el.dataset.toggle){

					let href = this.$el.getAttribute('href');
					// If it's a hash link, remove the hash
					if(href.match('#')){

						if(window.location.hash === href){
							ev.preventDefault();
							Alpine.store('route').removeHash()
						}

					}else{
						// TODO: GO back or reset the URL if not a hsahs link
					}

				}else{

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
				}
				
			})
			// Watch state for changes
			this.update()
			this.$watch('isActive', () => {
				this.update()
			})
		},
	}))
})
