import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
example component

Example Usage:
---------------
<div x-data="example">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('example', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
