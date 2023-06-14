function gerarSenha() {
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = lowercaseChars.toUpperCase();
    var numberChars = '0123456789';

    var password = '';
    password += getRandomCharacter(lowercaseChars);
    password += getRandomCharacter(uppercaseChars);
    password += getRandomCharacter(numberChars);

    while (password.length < 8) {
        var charSet = lowercaseChars + uppercaseChars + numberChars;
        var randomChar = getRandomCharacter(charSet);
        password += randomChar;
    }

    var resultDiv = document.getElementById("resultado1");
    resultDiv.textContent = password;
}

function getRandomCharacter(charSet) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}



function verificarSenha() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    var regexUppercase = /[A-Z]/;
    var regexLowercase = /[a-z]/;
    var regexNumber = /[0-9]/;

    var isLengthValid = password.length >= 8;
    var hasUppercase = regexUppercase.test(password);
    var hasLowercase = regexLowercase.test(password);
    var hasNumber = regexNumber.test(password);

    var isValid = isLengthValid && hasUppercase && hasLowercase && hasNumber;

    var resultDiv = document.getElementById("resultado2");
    resultDiv.textContent = isValid ? "Senha válida!" : "Senha inválida!";
}