import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
ajax formspree component with recaptcha v3 support

Details: https://help.formspree.io/hc/en-us/articles/4411635023507-Using-reCAPTCHA-v3

Make sure recaptcha API is included:

<script src="https://www.google.com/recaptcha/api.js?render={site-key}"></script>

Also make sure reCaptcha is enabled within formspree and the secret key has been added there

Example Usage:
---------------
<div data-recaptcha-key="{site-key}" x-data="formspree">
	<form x-ref="form">

	</form>
</div>

*/

const grecaptcha = window.grecaptcha;

init(() => {
    Alpine.data('formspree', () => ({
    errors:[],
    isSubmitting:false,
    success:false,
    init(args) {
        //console.log('FORM', this.$el.dataset,this.$refs.form);

        // Bind the submit event listener
        this.submitHandler = this.handleSubmit.bind(this); // Create a bound function
        this.$refs.form.addEventListener('submit', this.submitHandler);
    },
    
    destroy() {
        // Remove the submit event listener to avoid memory leaks
        this.$refs.form.removeEventListener('submit', this.submitHandler);
    },
    submit(action,formData){
    	fetch(action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
        	this.isSubmitting = false;
        	if(data.error && data.errors && data.errors.length){
        		this.errors = data.errors;
        	}else{
        		this.errors = [];
        		this.success = true;

        		// Scroll the window to the top of the element in case hiding hte form has been disorientating
        		const elementPosition = this.$el.getBoundingClientRect().top + window.scrollY;
		        const offset = window.innerHeight / 2;

		        window.scrollTo({
		            top: elementPosition - offset
		        });
        	}
        	
            console.log('Success:', data);
            // Optionally handle success (e.g., show a message to the user)
        })
        .catch((error) => {
        	this.isSubmitting = false;
            console.error('Error:', error);
            // Optionally handle error (e.g., show an error message to the user)
        });
    },
    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        let key = this.$el.dataset.recaptchaKey;

        let action = this.$refs.form.action;
        let formData = Object.fromEntries(new FormData(this.$refs.form));

        this.isSubmitting = true;
        

        this.$nextTick(() => {

        	// Use reCaptcha if available and configured
        	if(grecaptcha && key){
			grecaptcha.ready(() => {
	          grecaptcha.execute(key, {action: 'submit'}).then((token) => {

		        formData["g-recaptcha-response"] = token;

		        this.submit(action,formData)

		      })
		    });
			}else{
				this.submit(action,formData)
			}

		})

        
    }
}));
})
