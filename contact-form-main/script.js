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

form.addEventListener('submit', (e) => {

    e.preventDefault();

    // Clear previous message
    const existingError = document.querySelector('.error-message');
    if(existingError){
        existingError.remove();
    }

    // Check if input is empty
    if(firstname.value.trim() === '' || firstname.value.trim() == null){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'This field is required';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '5px';

        // Insert error message after the input field
        firstname.insertAdjacentElement("afterend", errorMessage);
    } 
    else if(lastname.value.trim() === '' || lastname.value.trim() == null){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'This field is required';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '5px';

        // Insert error message after the input field
        lastname.insertAdjacentElement("afterend", errorMessage);
    
    } else if(email.value === '' || !email.value.includes('@')){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Please enter a valid email address';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '5px';

        // Insert error message after the input field
        email.insertAdjacentElement("afterend", errorMessage);
    
    } else if(!enquiry.checked && !request.checked){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Please select a query type';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginBottom = '5px';

        // Insert error message after the input field
        error.insertAdjacentElement("afterend", errorMessage);
    
    } else if(textarea.value.trim() === '' || textarea.value.trim() == null){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'This field is required';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '5px';

        // Insert error message after the input field
        textarea.insertAdjacentElement("afterend", errorMessage);

    } else if(!checkbox.checked){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Please select a query type';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginBottom = '5px';

        // Insert error message after the input field
        checkboxlabel.insertAdjacentElement("afterend", errorMessage);
    
    }

    else{
        alert('Form submitted successfuly!');
    }
});