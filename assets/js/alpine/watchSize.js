import Alpine from 'alpinejs'
import { init } from '../utils/alpine'

/*

Description:
--------------

Example Usage:
---------------
<div x-data="watchSize">
	<div x-data :style="`width:${width * 0.5};height:${height*0.5};`"></div>
</div>

*/

function throttle(callback, delay, trailing) {
	let timer = null
	let lastCall = 0

	return function () {
		const now = new Date().getTime()

		if (trailing && timer === null) {
			// If trailing is enabled and there's no pending timer, set one
			timer = setTimeout(function () {
				callback.apply(null, arguments)
				timer = null
			}, delay)
		}

		if (now - lastCall >= delay) {
			lastCall = now
			callback.apply(null, arguments)
		}
	}
}

function generateRandomAlphanumericId(length) {
	const charset =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length)
		result += charset.charAt(randomIndex)
	}

	return result
}

let globalObserver;
let registeredListeners = [];

// Initialize the global MutationObserver
function initGlobalObserver() {
    if (!globalObserver) {
        globalObserver = new MutationObserver(mutations => {
            requestAnimationFrame(() => {
                registeredListeners.forEach(component => component.setSize());
            });
        });

        globalObserver.observe(document.body, {
            attributes: false,
            childList: true,
            subtree: true,
        });
    }
}



init(() => {

	// Call this function before Alpine.data is defined to ensure the observer is set up
	initGlobalObserver();

    Alpine.data('watchSize', () => ({
        UID: null, // Each watched element gets a random id
        width: 0,
        height: 0,
        resizer: null,
        listener: null,
        setSize() {
            this.width = this.$el.offsetWidth
            this.height = this.$el.offsetHeight
        },
        init() {
            this.UID = generateRandomAlphanumericId(8)
            this.setSize()

            let interval = this.$el.dataset.interval
            let shouldListen = this.$el.dataset.listen

            if (shouldListen) {
                registeredListeners.push(this);
            } else if (interval) {
                this.listener = setInterval(() => {
                    this.setSize()
                }, parseInt(interval))
            }

            this.$nextTick(() => {
                this.setSize()
            })

            const throttledResize = throttle(
                () => {
                    this.setSize()
                },
                50,
                true
            )

            this.resizer = throttledResize.bind(this)

            window.addEventListener('resize', this.resizer)
        },
        destroy() {
            if (this.resizer) window.removeEventListener('resize', this.resizer)
            if (this.listener) clearInterval(this.listener)
            
            // Remove from registered listeners if listening to DOM mutations
            let index = registeredListeners.indexOf(this);
            if (index > -1) {
                registeredListeners.splice(index, 1);
            }
        },
    }))
})
