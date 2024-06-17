import Alpine from 'alpinejs'
import { init } from '../utils/alpine'
import KeenSlider from 'keen-slider'

/*

Description:
--------------
Initialise a keen slider

Example Usage:
---------------
<div x-data="keenslider" data-settings='{"loop":true}'></div>

*/

const autoPlayPlugin = (slider) => {
    let timeout
    let mouseOver = false

    function clearNextTimeout() {
        clearTimeout(timeout)
    }

    function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
            slider.next()
        }, 2000)
    }
    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
        })
        nextTimeout()
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
}

init(() => {
    Alpine.data('keenslider', () => ({
        slider: null,
        init(args) {
            let $ref = this.$el;
            let settings = this.$el.dataset.settings;

            this.$nextTick(() => {
                const keenslider = new KeenSlider(
                    $ref, {
                        loop: true,
                        created: () => {

                        },
                        detailsChanged: (s) => {
                            s.slides.forEach((element, idx) => {
                                element.style.opacity = s.track.details.slides[idx].portion
                            })
                        },
                        renderMode: "custom",
                    },
                    [
                        autoPlayPlugin
                        // add plugins here
                    ]
                )

                this.slider = keenslider
            })
        },

        destroy() {
            if (this.slider) this.slider.destroy()
        },
    }))
})