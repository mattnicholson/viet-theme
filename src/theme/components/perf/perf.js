import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'
import { getPerformance,isLowPerformance } from '../../../../assets/js/utils/performance'

/*

Description:
--------------
perf component

Example Usage:
---------------
<div x-data="perf">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('perf', () => ({
        isLowPerformance : false,
        gpu : 0,
        init(args) {
            // this.$el.dataset
            let p = getPerformance();
            let isLow = p.isLow;


            this.isLowPerformance = isLow;
            this.gpu = p.gpuPerPixel;
        },
        destroy() {
            
        },
    }))
})
