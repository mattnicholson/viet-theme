import Alpine from 'alpinejs'
import { init } from '../utils/alpine'

/*

Description:
--------------
Set a global location variable

Example Usage:
---------------
<div x-data x-effect="$store.vanue.setActive('location-slug')"></div>

*/
init(() => {
	Alpine.store('venue', {
		active: '',
		modal: '',
		setActive(value) {
			this.active = value
			this.modal = value
		},
		setModal(value) {
			this.modal = value
		},
		init() {},
	})
})
