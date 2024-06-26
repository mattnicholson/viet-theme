import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
actionBar component

Example Usage:
---------------
<div x-data="actionBar">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('actionBar', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
