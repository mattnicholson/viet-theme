import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

import { init } from '../utils/alpine'

Alpine.plugin(intersect)

/*

Description:
--------------
Staggered text animation when element becomes visible

Example Usage:
---------------
<div x-data="staggerText" x-bind="lazy">Lorem ipsum dolor<br />sit amet</div>

*/

const LETTER_CLASS = 'staggerText-letter'
const LINE_CLASS = 'staggerText-line'
const BLANK_CLASS = 'staggerText-space'

init(() => {
	Alpine.data('staggerText', () => ({
		sourceContent: '',
		hasSeen: false,
		fontsReady: false,
		convertedHTML: '',
		state() {},
		init(args) {
			this.sourceContent = this.$el.innerHTML

			document.fonts.ready.then(() => {
				this.fontsReady = true
				this.updateLines()
				this.render()
			})
		},
		updateLines() {
			this.convertedHTML = this.wrapAndLineifyText(this.$el, this.sourceContent)
		},
		lineifyElement(element, content, startIndex = 0) {
			element.innerHTML = content // Inject the source content into the element
			const textContent = element.textContent.trim()

			let words = textContent.split(' ')

			element.innerHTML = '' // Clear the element's content

			words.forEach((word, wix) => {
				const wordSpan = document.createElement('span')
				wordSpan.style.display = 'inline-block'
				wordSpan.style.whiteSpace = 'nowrap'
				element.appendChild(wordSpan)

				const letters = [...word, ' ']

				letters.forEach((letter, ix) => {
					const span = document.createElement('span')
					span.textContent = letter
					if (letter.match(/\s/)) span.innerHTML = '&nbsp;'
					span.classList.add(LETTER_CLASS)
					if (letter.match(/\s/)) span.classList.add(BLANK_CLASS)

					span.style.setProperty('--letter-index-total', ix)

					wordSpan.appendChild(span)
				})
			})

			const spans = element.querySelectorAll(`.${LETTER_CLASS}`)

			const lineContainers = []
			let currentLineContainer = document.createElement('div')
			currentLineContainer.classList.add(LINE_CLASS)
			currentLineContainer.style.setProperty(
				'--line-index',
				lineContainers.length + startIndex
			)
			currentLineContainer.style.whiteSpace = 'nowrap'

			let previousYOffset = null
			let lineLetterCount = 0
			spans.forEach((span, ix) => {
				const rect = span.getBoundingClientRect()
				const newYOffset = rect.top

				if (previousYOffset !== null && newYOffset !== previousYOffset) {
					lineLetterCount = 0
					lineContainers.push(currentLineContainer)
					currentLineContainer = document.createElement('div')
					currentLineContainer.classList.add(LINE_CLASS)
					currentLineContainer.style.whiteSpace = 'nowrap'
					currentLineContainer.style.setProperty(
						'--line-index',
						lineContainers.length + startIndex
					)
				}

				let letterSpan = span.cloneNode(true)
				letterSpan.style.setProperty('--letter-index', lineLetterCount)

				currentLineContainer.appendChild(letterSpan)
				previousYOffset = newYOffset

				lineLetterCount++
			})

			if (currentLineContainer.childNodes.length > 0) {
				lineContainers.push(currentLineContainer)
			}

			const convertedHTML = lineContainers
				.map((container) => container.outerHTML)
				.join('')

			// Set the HTML back to what it was before now we've calculated everything
			element.innerHTML = content

			return convertedHTML
		},

		wrapAndLineifyText(element, content) {
			element.innerHTML = '' // Clear the element's content
			const BREAK_TOKEN = '***BREAK|***'

			const contentWithoutBreaks = content.replace(/<br\s*\/?>/g, BREAK_TOKEN)
			const sets = contentWithoutBreaks.split(BREAK_TOKEN)

			const setHTML = []

			sets.forEach((setText, ix) => {
				// Container for this set
				const set = document.createElement('div')
				set.classList.add('set')
				element.appendChild(set)

				// Add letters & lines
				const linefiedHTML = this.lineifyElement(set, setText, ix)

				set.innerHTML = linefiedHTML

				setHTML.push(linefiedHTML)
			})

			// Capture the HTML with all the sets, lines & letters
			const convertedHTML = setHTML.join('')

			// Set the HTML back to what it was before now we've calculated everything
			element.innerHTML = content

			return convertedHTML
		},

		render() {
			this.$el.innerHTML = `<div class="${
				this.hasSeen ? 'staggerText-anim--play' : 'staggerText-anim--initial'
			}">${this.convertedHTML}</div>`
		},
		lazy: {
			[':class']() {
				return `staggerText staggerText--${
					this.hasSeen && this.fontsReady ? 'is-ready' : 'not-ready'
				}`
			},
			'x-intersect.once': function () {
				this.hasSeen = true
				this.render()
			},
		},
	}))
})
