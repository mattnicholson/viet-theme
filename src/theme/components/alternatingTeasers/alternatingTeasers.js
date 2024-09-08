import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
alternatingTeasers component

Example Usage:
---------------
<div x-data="alternatingTeasers">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('alternatingTeasers', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
