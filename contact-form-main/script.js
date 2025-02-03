const form = document.getElementById('form_container');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const enquiry = document.getElementById('generalenquiry');
const request = document.getElementById('supportrequest');
const error = document.getElementById('querytypeerror');
const textarea = document.getElementById('paragraph_text');
const checkbox = document.getElementById('checkbox');
const checkboxlabel = document.getElementById('checkboxlabel');

    function fieldIsRequired(field){

        if(field.value.trim() === '' || field.value.trim() == null){
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'This field is required';

            //Style div
            errorMessage.style.color = 'red';
            errorMessage.style.marginTop = '5px';

            // Insert error message after the input field
            field.insertAdjacentElement("afterend", errorMessage);
            return false;
            }

            return true;
    }

    function isEmailValid(field){
        if(field.value.trim() === '' || !field.value.includes('@')){
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Please enter a valid email address';
        
            //Style div
            errorMessage.style.color = 'red';
            errorMessage.style.marginTop = '5px';
        
            // Insert error message after the input field
            field.insertAdjacentElement("afterend", errorMessage);
            return false;
        }

        return true;
    }

    function isSelected(field,field2,error){

        if(!field.checked && !field2.checked){
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Please select a query type';
    
            //Style div
            errorMessage.style.color = 'red';
            errorMessage.style.marginBottom = '5px';
    
            // Insert error message after the input field
            error.insertAdjacentElement("afterend", errorMessage)
            return false;
        };

            return true;
    }

    function isChecked(field,field2){

        if(!field.checked){
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'To submit this form, please consent to being contacted';
    
            //Style div
            errorMessage.style.color = 'red';
            errorMessage.style.marginBottom = '5px';
    
            // Insert error message after the input field
            field2.insertAdjacentElement("afterend", errorMessage);
            return false;
        }
        
        return true;
    }

    function clearErrors() {
        // Clear previous message
        const existingError = document.querySelectorAll('.error-message');
        existingError.forEach(element => element.remove());
    }

    function submitForm() {
        const form = document.getElementById('form_container');
        form.submit();
    }

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        clearErrors();

        if(fieldIsRequired(firstname) && fieldIsRequired(lastname) && isEmailValid(email) && isSelected(enquiry,request,error) && fieldIsRequired(textarea)
         && isChecked(checkbox,checkboxlabel)){
            submitForm();
        } 

    });

