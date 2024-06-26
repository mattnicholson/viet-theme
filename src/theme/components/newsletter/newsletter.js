import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
newsletter component

Example Usage:
---------------
<div x-data="newsletter">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('newsletter', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
