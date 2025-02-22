document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charPool = '';
    if (uppercase) charPool += upperChars;
    if (lowercase) charPool += lowerChars;
    if (numbers) charPool += numChars;
    if (symbols) charPool += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById('password').value = password;

    // Animation on password generation
    const passwordField = document.getElementById('password');
    passwordField.style.animation = 'glow 2s infinite alternate';
    setTimeout(() => {
        passwordField.style.animation = 'none';
    }, 2000);
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');

    // Animation on copy
    const copyBtn = document.getElementById('copy');
    copyBtn.style.backgroundColor = '#00f';
    setTimeout(() => {
        copyBtn.style.backgroundColor = '#0ff';
    }, 500);

    alert('Password copied to clipboard!');
}