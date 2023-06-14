function calcularFatorial(number) {
    if (number === 0) {
        return 1;
    }

    var factorial = 1;
    var calculation = "";
    for (var i = number; i >= 1; i--) {
        factorial *= i;
        calculation += i;
        if (i > 1) {
            calculation += " * ";
        }
    }

    return {
        calculation: calculation,
        factorial: factorial
    };
}

function exibirFatoriais() {
    var tabelafatorial = document.getElementById("tabelafatorial");

    for (var number = 1; number <= 10; number++) {
        var factorial = calcularFatorial(number);

        var row = document.createElement("tr");

        var numberCell = document.createElement("td");
        numberCell.textContent = number;
        row.appendChild(numberCell);

        var calculationCell = document.createElement("td");
        calculationCell.textContent = factorial.calculation;
        row.appendChild(calculationCell);

        var factorialCell = document.createElement("td");
        factorialCell.textContent = factorial.factorial;
        row.appendChild(factorialCell);

        tabelafatorial.appendChild(row);
    }
}

exibirFatoriais();