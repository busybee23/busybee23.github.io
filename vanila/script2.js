// purely naive approach, using functions and manual scripts

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// functions

// show error messages

function showError(input,messages){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = messages;
}


// show success colour

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,
            `${getFieldName(input)} must be atleast ${min} characters`
            );
    }else if(input.value.length > max){
        showError(input,
            `${getFieldName(input)} must be less than ${max} characters`
            );
    }else{
        showSuccess(input);
    }
}

function emailChecker(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}

function passwordChecker(password,password2){
    if(password.value != password2.value){
        showError(password2,'Password do not match');
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        // const item_name = input.id;
        if(input.value.trim()==''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    if(username.value != 0) 
        checkLength(username,3,15);
    if(password.value != 0 )
        checkLength(password,6,15);
    if(email.value !=0 ){
        emailChecker(email);
    }
    passwordChecker(password,password2);

})


