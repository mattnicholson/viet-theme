// Modules
import Alpine from 'alpinejs'
import Swup from 'swup'
import SwupFragmentPlugin from '@swup/fragment-plugin'

import Lenis from '@studio-freight/lenis'

// Utils
import { ready } from './utils/dom'

// Components
import './components/pageData'
import './components/route'
import './components/venue'
import './components/locationsModal'
import './components/lenis'
import './components/mapbox'
import './components/image'
import './components/watchSize'
import './components/viewportProgress'

// Make sure there is a global global
window.global = window

// App
ready(() => {
	const scrollWrapper = document.getElementById('page')
	let isScrolled = false
	let lastScroll = 0
	// Start lenis
	const lenis = new Lenis({
		wrapper: document.body,
		wheelEventsTarget: scrollWrapper,
	})

	window.lenis = lenis

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	lenis.on('scroll', (props) => {
		if (props.animatedScroll >= 50 && lastScroll < props.animatedScroll) {
			if (!isScrolled) document.documentElement.classList.add('scrolled')
			isScrolled = true
		} else {
			if (isScrolled) document.documentElement.classList.remove('scrolled')
			isScrolled = false
		}

		lastScroll = props.animatedScroll
	})

	requestAnimationFrame(raf)

	document.addEventListener('alpine:init', () => {
		Alpine.directive(
			'destroy',
			(el, { expression }, { evaluateLater, cleanup }) => {
				const onDestroy = evaluateLater(expression)
				cleanup(onDestroy)
			}
		)
	})
	// Start Alpine
	Alpine.start()

	// Start swup
	const swup = new Swup({
		ignoreVisit: (url, { el } = {}) => {
			return el ? el.getAttribute('href')[0] === '#' : false
		},
		containers: ['#swup', '#opener'],
		plugins: [
			new SwupFragmentPlugin({
				rules: [
					{
						from: '/pages/locations/:id?',
						to: '/pages/locations/:id?',
						containers: ['#locations'],
						debug: true,
					},
				],
			}),
		],
	})
	swup.hooks.on('link:click', (visit) => {
		router = Alpine.store('route')
		page = Alpine.store('page')

		if (router) {
			let p = visit.trigger.el.getAttribute('href')
			if (p === window.location.pathname) {
				// Situation when the pathname matches the href
				// so swup ignores it,
				// but if there is a hash we want to remove it...
				if (!visit.trigger.el.getAttribute('href').match('#')) {
					// CLicked link does not have a hash
					if (window.location.hash) {
						// ...but the window does
						// so remove it...
						router.removeHash()
					}
				}
			}

			router.update(window.location.href)
			page.setUrl(window.location.href)
		}
	})

	// Set initial viewportSize
	document
		.getElementsByTagName('html')[0]
		.style.setProperty('--initialViewportHeight', window.innerHeight + 'px')
	// Set ready class
	document.getElementsByTagName('html')[0].classList.add('js-ready')
})

// Expose vars
window.Alpine = Alpine
