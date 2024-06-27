import { strToArr } from './string.js'

let isReady = false

document.addEventListener('DOMContentLoaded', function () {
	isReady = true
})

// Trigger on dom content loaded
function ready(fn) {
	if (isReady) {
		fn()
	} else {
		document.addEventListener('DOMContentLoaded', fn)
	}
}

// Convert string to spans wrapping each latter
function letterize(str) {
	let arr = strToArr(str)

	return arr.map((i) => `<span>${i}</span>`).join('')
}

const cachebustSamePageLinks = () => {
	const href = window.location.pathname + window.location.search

	const cacheBusted = document.querySelectorAll(`a[href*="?reload"]`)
	const currentLinks = document.querySelectorAll(`a[href="${href}"]`)
	const now = Date.now()
	const cachebuster = window.location.search ? '' : `?reload`

	// Remove cachebuster from old links
	cacheBusted.forEach((el) => {
		const was = el.getAttribute('href')
		const clean = was.replace(/\?reload/, '')

		el.setAttribute('href', `${clean}`)
	})
	// Add cache buster to links that point to this page
	currentLinks.forEach((el) => {
		const was = el.getAttribute('href')
		const clean = was.replace(/\?reload/, '')

		el.setAttribute('href', `${clean}${cachebuster}`)
	})
}

const injectCSS = (href) => {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  // Function to inject JS
  const injectJS = (src, callback) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  }

export { ready, letterize, cachebustSamePageLinks,injectJS,injectCSS }
