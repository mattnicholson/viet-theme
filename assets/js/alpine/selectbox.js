import Alpine from 'alpinejs'
import { init } from '../utils/alpine'

/*

Description:
--------------
Convert a selectbox to a custom dropdown UI

Example Usage:
---------------
<div x-data="selectbox">
	<select name="example">
		<option value="The Value">The Value</option>
		<option value="Another Value">Another Value</option>
	</select>
</div>

*/

const template = (selectHTML) => `
<template x-if="hasInit">
<div>
<div class="hidden selectbox-original">
${selectHTML}
</div>
<div :class="{ 'open': isOpen }" class="selectbox-dropdown" @click.outside="isOpen = false">
	<div class="selectbox-selected-option" @click="toggleDropdown">
	<div x-text="selectedOption"></div>
	<div class="selectbox-dropdown-arrow">
	<svg xmlns="http://www.w3.org/2000/svg" width="11.908" height="20.516" viewBox="0 0 11.908 20.516">
  		<path id="Path_360" data-name="Path 360" d="M23.334-9.395,17.38-3.44V-8.3H2.818v-2.2H17.38l.013-4.85Z" transform="translate(-3.44 -2.818) rotate(90)" fill="#3e3c38"/>
	</svg>
	</div>
	</div>
	
	<ul x-show="isOpen" class="options-list">
		<template x-for="option in options">
	  		<li x-text="option" @click="selectOption(option)"></li>
	  	</template>
	</ul>
	
</div>
</div>
</template>
`

init(() => {
	Alpine.data('selectbox', () => ({
		hasInit: false,
		isOpen: false,
		options: [],
		selectedOption: '',
		$selectBox: null,
		toggleDropdown() {
			this.isOpen = !this.isOpen
		},

		selectOption(option) {
			// Update state and close the dropdown
			this.selectedOption = option
			this.isOpen = false
			this.$selectBox.value = option // Update the underlying select box value
		},
		update() {
			// Create state from the <select>
			this.options = Array.from(this.$selectBox.options).map(
				(option) => option.value
			)
			this.selectedOption = this.$selectBox.value
		},
		init() {
			// Manipulate the HTML to match our Alpine template
			const selectHTML = this.$el.querySelector('select').outerHTML
			let select = this.$el.querySelector('select')
			this.$el.innerHTML = template(selectHTML)
			this.hasInit = true

			// Update state on next tick
			this.$nextTick(() => {
				this.$selectBox = this.$el.querySelector('select')
				this.update()
			})
		},
	}))
})
