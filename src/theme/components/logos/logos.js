import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
logos component

Example Usage:
---------------
<div x-data="logos">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('logos', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
