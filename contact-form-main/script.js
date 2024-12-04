const form = document.getElementById('form_container');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname')
const firstnameerror = document.getElementById('firstnameerror');
const lastnameerror = document.getElementById('lastnameerror');
const email = document.getElementById('email');
const emailerror = document.getElementById('emailerror');
const generalenquiry = document.getElementById('generalenquiry');
const supportrequest = document.getElementById('supportrequest');
const querytypeerror = document.getElementById('querytypeerror');

form.addEventListener('submit', (e) => {
    
    const email_check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(firstname.value === '' || firstname.value == null){
        e.preventDefault();
        firstnameerror.innerHTML = "This field is required"
    }

    else{
        firstnameerror.innerHTML = ""
    }

    if(lastname.value === '' || lastname.value == null){
        e.preventDefault();
        lastnameerror.innerHTML = "This field is required"
    }
    
    else{
        lastnameerror.innerHTML = ""
    }

    if(!email.value.match(email_check)){
        e.preventDefault();
        emailerror.innerHTML = 'Please enter a valid email address'
    }
    
    else{
        emailerror.innerHTML = ""
    }

    if(!generalenquiry.checked || !supportrequest.checked){
        e.preventDefault();
        querytypeerror.innerHTML = 'Please select a query type'
    }

    else{
        querytypeerror.innerHTML = ""
    }

})

