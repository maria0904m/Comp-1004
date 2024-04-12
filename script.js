function checkPasswordStrength() {
    var password = document.getElementById('password').value;
    var passwordStrengthText = document.getElementById('password-strength-text');
    var requirementsNotMet = document.getElementById('requirements-not-met');

    var strength = calculatePasswordStrength(password);

    // Update the width and color of each bar based on password strength
    for (var i = 1; i <= 5; i++) {
        var bar = document.getElementById('bar-' + i);
        if (i <= strength / 20) {
            // Update color based on strength
            if (strength < 40) {
                bar.style.backgroundColor = 'red'; // Red color for weak strength
            } else if (strength < 70) {
                bar.style.backgroundColor = 'orange'; // Orange color for moderate strength
            } else {
                bar.style.backgroundColor = 'green'; // Green color for strong strength
            }
        } else {
            bar.style.backgroundColor = '#e0e0e0'; // Default color for weak bars
        }
    }

    // Display password strength text
    if (strength < 40) {
        passwordStrengthText.textContent = 'Weak';
        passwordStrengthText.style.color = 'red'; // Red color for weak strength
    } else if (strength < 70) {
        passwordStrengthText.textContent = 'Moderate';
        passwordStrengthText.style.color = 'orange'; // Orange color for moderate strength
    } else {
        passwordStrengthText.textContent = 'Strong';
        passwordStrengthText.style.color = 'green'; // Green color for strong strength
    }

    // Display requirements not met
    var requirementsNotMetText = '';
    if (!/[A-Z]/.test(password)) {
        requirementsNotMetText += 'Uppercase letter, ';
    }
    if (!/[a-z]/.test(password)) {
        requirementsNotMetText += 'Lowercase letter, ';
    }
    if (!/\d/.test(password)) {
        requirementsNotMetText += 'Number, ';
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        requirementsNotMetText += 'Special character, ';
    }
    if (password.length < 12) {
        requirementsNotMetText += 'Minimum length of 12 characters, ';
    }
    requirementsNotMet.textContent = 'Requirements not met: ' + (requirementsNotMetText ? requirementsNotMetText.slice(0, -2) : 'None');
}

function calculatePasswordStrength(password) {
    var length = password.length;
    var complexity = 0;

    //Check length
    if (length >= 12) {
        complexity += 10;
    }

    //Check for uppercase letters;
    if (/[A-Z]/.test(password)) {
        complexity += 20;
    }

    //Check for lowercase letters
    if (/[a-z]/.test(password)) {
        complexity += 20;
    }

    //Check for numbers
    if (/\d/.test(password)) {
        complexity += 20;
    }

    //Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        complexity += 30;
    }

    return Math.min(complexity, 100);
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleButton = document.getElementById('togglePasswordVisibility');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
}


