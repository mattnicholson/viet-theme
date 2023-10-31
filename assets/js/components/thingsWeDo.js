import Alpine from 'alpinejs'

import { init } from '../utils/alpine'
import { Iterator } from '../utils/arr'
import { shuffleArray } from '../utils.js'

/*

Description:
--------------


Example Usage:
---------------
<div x-data="thingsWeDo"></div>

*/

init(() => {
	Alpine.data('thingsWeDo', () => ({
		palette: [
			{
				text: '#f0b4c7',
				bg: '#E75F34',
			},
			{
				bg: '#F0B4C7',
				text: '#143528',
			},
			{
				bg: '#1B1E29',
				text: '#E75F34',
			},
			{
				bg: '#F2E074',
				text: '#E75F34',
			},
			{
				bg: '#3556A9',
				text: '#EC8445',
			},
			{
				bg: '#ACE2F4',
				text: '#FF5C4B',
			},
			{
				bg: '#6EB069',
				text: '#143528',
			},
		],
		items: [
			{
				app: 'Strava',
				audience: 'companies',
				purpose: 'keep staff safe',
			},
			{
				app: 'Maps',
				audience: 'residents',
				purpose: 'recycle more',
			},
			{
				app: 'Monzo',
				audience: 'users',
				purpose: 'control their data',
			},
			{
				app: 'Spotify',
				audience: 'communities',
				purpose: 'express themselves',
			},
			{
				app: 'Twitter',
				audience: 'frontline staff',
				purpose: 'tell their story',
			},
		],
		paletteSet: null,
		itemsSet: null,
		timer: null,
		current: null,
		styles() {
			return `background:${this.current.palette.bg};color:${this.current.palette.text}`
		},
		next() {
			this.current = {
				palette: this.paletteSet.next(),
				item: this.itemSet.next(),
			}

			if (this.timer) clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				this.next()
			}, 3000)
		},
		init(args) {
			let items = shuffleArray([...this.items])
			let palette = shuffleArray([...this.palette])

			this.paletteSet = new Iterator(palette)
			this.itemSet = new Iterator(items)

			this.next()
		},
		destroy() {
			if (this.timner) clearInterval(this.timer)
		},
	}))
})
