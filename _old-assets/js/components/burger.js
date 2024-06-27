import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

import { init } from '../utils/alpine'

import { animate, spring, timeline } from 'motion'

Alpine.plugin(intersect)

/**
 * Remember to set the pathLength="1" SVG attribute on
 * the elements you want to draw. This makes it easy
 * to use the same animation logic for elements of a
 * different path length.
 */

const draw = (progress) => ({
	// This property makes the line "draw" in when animated
	strokeDashoffset: 1 - progress,

	// Each line will be hidden until it starts drawing
	// to fix a bug in Safari where the line can be
	// partially visible even when progress is at 0
	visibility: 'visible',
})

/*

Description:
--------------
Animated animation when element becomes visible

Example Usage:
---------------
<div x-data="burger" x-bind="lazy"></div>
<div x-data="burger" x-bind="stateful" data-state-trigger="burger"></div>

*/

init(() => {
	Alpine.data('burger', () => ({
		isVisible: false,
		init() {},
		animate() {
			animate(this.$el.querySelector('path'), draw(1), {
				duration: 1.5,
				delay: 0,
				easing: 'ease-out',
			})
		},
		reset() {
			animate(this.$el.querySelector('path'), draw(0), {
				duration: 1,
				delay: 0,
				easing: 'ease-out',
			})
		},
		stateful: {
			['x-effect']() {
				let store = Alpine.store('toggleStates')

				let stateTrigger = this.$el.dataset['stateTrigger']
				if (stateTrigger) {
					let isActive = store.isActive(stateTrigger)

					if (isActive) {
						this.isVisible = true
						this.animate()
					} else {
						if (this.isVisible) {
							this.$el.classList.add('transitioning-out')
							setTimeout(() => {
								this.$el.classList.remove('transitioning-out')
								this.isVisible = false
							}, 500)

							this.reset()
						}
					}
				}
			},
			[':class']() {
				return `${this.isVisible ? 'is-visible' : 'not-visible'}`
			},
		},
		lazy: {
			[':class']() {
				return `${this.isVisible ? 'is-visible' : 'not-visible'}`
			},
			'x-intersect:enter': function (args) {
				this.isVisible = true
				this.animate()
			},
			'x-intersect:leave': function (args) {
				this.isVisible = false
				this.reset()
			},
		},
	}))
})
