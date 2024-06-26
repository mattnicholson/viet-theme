import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
theme component

Example Usage:
---------------
<div x-data="theme">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('theme', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
