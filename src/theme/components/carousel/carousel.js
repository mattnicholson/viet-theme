import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
carousel component

Example Usage:
---------------
<div x-data="carousel">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('carousel', () => ({
        init(args) {
            this.$el.style.color = 'pink';
        },
        destroy() {
            
        },
    }))
})
