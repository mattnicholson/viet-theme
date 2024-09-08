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
    errors:[],
    isSubmitting:false,
    success:false,
    init(args) {
        

        // Bind the submit event listener
        this.submitHandler = this.handleSubmit.bind(this); // Create a bound function
        this.$refs.form.addEventListener('submit', this.submitHandler);
    },
    
    destroy() {
        // Remove the submit event listener to avoid memory leaks
        this.$refs.form.removeEventListener('submit', this.submitHandler);
    },
    submit(formData){

        if(!this.$el.dataset.mcUrl){

            this.isSubmitting = false;
            this.errors = ['Invalid mailchimp URL or List ID'];

            return;
        }

        $.post({
            url: `//${this.$el.dataset.mcUrl}/subscribe/post-json?u=${this.$el.dataset.mcUser}&id=${this.$el.dataset.mcList}&c=?`,
            dataType: "json",
            data: formData,
            success: (response) => {

                this.isSubmitting = false;

                if (
                    response.result ===
                    "success"
                ) {
                    // Success!
                    this.errors = [];
                    this.success = true;
                } else {
                    // Didn't add to list
                    this.errors = [response];
                    
                }

                
            },
            error:  (
                XMLHttpRequest,
                textStatus,
                errorThrown
            ) => {
                //console.log('FORM ERROR',XMLHttpRequest);
                this.errors = [
                    "There was a problem submitting the form, please try again later",
                ];

                this.isSubmitting = false;
            },
        });

    },
    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        let key = this.$el.dataset.recaptchaKey;

        let action = this.$refs.form.action;
        let formData = Object.fromEntries(new FormData(this.$refs.form));

        this.isSubmitting = true;
        
        this.$nextTick(() => {

            this.submit(formData)
            
        })

        
    }
}));
})
