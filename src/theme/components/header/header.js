import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
header component

Example Usage:
---------------
<div x-data="header">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('header', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
