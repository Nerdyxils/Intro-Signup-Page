var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var myEmail = document.getElementById('Email');
var myPassword = document.getElementById('Password');
var myButton = document.getElementById('button');
var numberErrors = 0;


function validateBlankInput (userInput, errorIcon, errorText) {
    if (userInput.value === '' || userInput.value === ' ') {
        userInput.style.border = '3px solid red';
        errorIcon.style.display = 'inline';
        errorText.style.display = 'block';
        numberErrors +=1;
    }
    else {
        userInput.style.border = '1px solid hsl(246, 25%, 77%)';
        errorIcon.style.display = 'none';
        errorText.style.display = 'none';
    }
}

function validateFirstName () {
    let errorIcon = document.getElementById('error-icon-firstName');
    let errorText = document.getElementById('error-firstName');
    validateBlankInput(firstName, errorIcon, errorText);
}

function validateLastName () {
    let errorIcon = document.getElementById('error-icon-lastName');
    let errorText = document.getElementById('error-lastName');
    validateBlankInput(lastName, errorIcon, errorText);
}

function validateEmail(){
    let errorIcon = document.getElementById('error-icon-email');
    let errorText = document.getElementById('error-email');
    if(!myEmail.value.includes('@') || !myEmail.value.includes('.com') || myEmail.value === '' || myEmail.value === ' '){
        myEmail.style.border = '3px solid red';
        errorIcon.style.display = 'inline';
        errorText.style.display = 'block';
        numberErrors +=1;
    }
    else{
        myEmail.style.border = '1px solid hsl(246, 25%, 77%)';
        errorIcon.style.display = 'none';
        errorText.style.display = 'none';
    }
}

function validatePassword(){
    let errorIcon = document.getElementById('error-icon-password');
    let errorText= document.getElementById('error-password');
    validateBlankInput(myPassword, errorIcon, errorText)
}

myButton.onclick = function(){
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();

    if(numberErrors === 0){
        firstName.value = '';
        lastName.value = '';
        myEmail.value = '';
        myPassword.value = '';
        alert('Registration Successful');
    }
    numberErrors = 0;
}

