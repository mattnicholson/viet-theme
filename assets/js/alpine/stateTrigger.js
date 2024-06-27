import Alpine from 'alpinejs'
import { init } from '../utils/alpine'

/*

Description:
--------------
Trigger a global state toggle, and be able to show a layer when active

Example Usage:
---------------
<div x-data="stateTrigger" x-bind="toggle" data-label="menu" x-text="$store.state.menu ? 'Close' : 'Menu'"></div>

<div x-data="stateLayer" x-bind="layer" data-label="menu">
	<!-- CONTENT TO DISPLAY AS MODAL WHEN LABEl IS TOGGLED ON -->
</div>

*/

init(() => {
	Alpine.store('toggleStates', {
		count: 0,
		states: {},
		isActive(label) {
			const state = this.states[label]
			if (!state) return false
			return state.active
		},
	})

	Alpine.data('stateTrigger', () => ({
		init(args) {
			const label = this.$el.dataset.label
			const store = Alpine.store('toggleStates')

			store.states[label] = { active: false }
		},
		count: 0,
		toggle: {
			['x-ref']: 'trigger',
			['@click']() {
				const label = this.$el.dataset.label

				const store = Alpine.store('toggleStates')

				store.states[label].active = !store.states[label].active
			},
		},
	}))

	Alpine.data('stateLayer', () => ({
		sourceContent: '',
		init(args) {
			this.sourceContent = this.$el.innerHTML
		},
		curState() {
			const label = this.$el.dataset.label

			const store = Alpine.store('toggleStates')
			if (!store.states[label]) return false
			const curState = store.states[label].active
			return curState
		},
		layer: {
			[':class']() {
				return `z-10 ${
					this.curState()
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none delay-200'
				} overflow-hidden transition duration-500 ease-in-out fixed top-0 left-0 bottom-0 right-0`
			},
			['@click']() {
				const label = this.$el.dataset.label
				const store = Alpine.store('toggleStates')

				store.states[label].active = false
			},
		},
	}))
})
