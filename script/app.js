function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    const passwordInput = document.querySelector('.js-password-input'),
          passwordToggle = document.querySelector('.js-password-toggle');
    
    const passwordOptions = ['password', 'text'];
    // Simpele Controle
    if (!passwordInput || !passwordToggle) {
        console.error('De Classes werden niet gevonden.');
        return;
    }

    passwordToggle.addEventListener('change', function() {

        passwordInput.type = passwordOptions[+this.checked];

        
        // if (passwordInput.type == 'password') {
        //     passwordInput.type = 'text';
        // }
        // else {
        //     passwordInput.type = 'password'
        // }
    });
    
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});