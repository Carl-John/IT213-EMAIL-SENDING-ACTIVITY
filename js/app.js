//Variablesa
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');

//Event Listeners
evebtListeners();

function evebtListeners() {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the Form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

//Function

//App Initialization
function appInit() {
    //Disable sendBtn on load
    sendBtn.disabled = true;
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