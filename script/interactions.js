let email = {
    field:null,
    errorMessage:null,
    input:null 
    },
    password = {},
    signInButton;

const getDOMelements = function() {
    email.field = document.querySelector('.js-email-field')
    email.errorMessage = document.querySelector('.js-email-error-message')
    email.input = document.querySelector('.js-email-input')
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded! Interactions');
    getDOMelements();
});