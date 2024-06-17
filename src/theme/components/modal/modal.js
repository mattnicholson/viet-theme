import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
modal component

Example Usage:
---------------
<div x-data="modal">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('modal', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
