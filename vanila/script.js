// purely naive approach, using functions and manual scripts

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// functions

// show error messages

function showError(input,cheese){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = cheese;
}

// show success colour

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function emailChecker(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())
}

// event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    if(username.value == ''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value == ''){
        showError(email,'Email is required');
    }else if(!emailChecker(email.value)){
        showError(email,'Email is not valid');
    }else{
        showSuccess(email);
    }

    if(password.value == ''){
        showError(password,'Password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value == ''){
        showError(password2,'Password is required');
    }else{
        showSuccess(password2);
    }

})

