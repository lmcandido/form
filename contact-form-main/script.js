const form = document.getElementById('form_container');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');

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
    if(lastname.value.trim() === '' || lastname.value.trim() == null){
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'This field is required';

        //Style div
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '5px';

        // Insert error message after the input field
        lastname.insertAdjacentElement("afterend", errorMessage);
    
    }else{
        alert('Form submitted successfuly!');
    }
});