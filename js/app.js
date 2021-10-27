//Variablesa
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');
    

//Event Listeners
evebtListeners();

function evebtListeners() {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the Form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //Send email and reset
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}

//Function

//App Initialization
function appInit() {
    //Disable sendBtn on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

    //Show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //Hide spinner then show send email img
    setTimeout(function () {
        //Hide the spinner
        spinner.style.display = 'none';
    }, 3000);
}

//Validate the Fields
function validateField() {
    let errors;

    //Validate the length of the field
    validateLength(this);

    //Validate the email
    if(this.type === 'email') {
        validateEmail(this);     
    }

    //Both will return error then check if there are errors
    errors = document.querySelectorAll('.error');

    //Check that the input are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
        if(errors.length === 0) {
            //Button should be enable
            sendBtn.disabled = false;
        }
    }
    
}
//Validates the length of the field
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//Validate email check @ in the value
function validateEmail(field){
    let emailText = field.value;
    //check if the email contains @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Reset the form
function resetForm() {
    sendEmailForm.reset();
}