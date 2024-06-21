import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
item component

Example Usage:
---------------
<div x-data="item">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('item', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
