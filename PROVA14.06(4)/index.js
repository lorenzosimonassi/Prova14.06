function isPerfectSquare(number) {
    var squareRoot = Math.sqrt(number);

    return squareRoot === Math.floor(squareRoot);
}

function generateAndCheck() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var randomNumberDiv = document.getElementById("numeroaleatorio");
    randomNumberDiv.textContent = "Número gerado: " + randomNumber;

    var resultDiv = document.getElementById("resultado");
    resultDiv.textContent = isPerfectSquare(randomNumber) ? "É um quadrado perfeito!" : "Não é um quadrado perfeito!";
}