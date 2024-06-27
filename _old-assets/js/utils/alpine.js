import Alpine from 'alpinejs'

let hasInit = false

document.addEventListener('alpine:init', function () {
	hasInit = true
})

function init(fn) {
	if (hasInit) {
		Alpine.discoverUninitializedComponents(function (el) {
			Alpine.initializeComponent(el)
		})
		fn()
	} else {
		document.addEventListener('alpine:init', fn)
	}
}

export { init }
