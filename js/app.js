//Variablesa
const sendBtn = document.getElementById('sendBtn');

//Event Listeners
evebtListeners();

function evebtListeners() {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);
}

//Function

//App Initialization
function appInit() {
    //Disable sendBtn on load
    sendBtn.disabled = true;
}