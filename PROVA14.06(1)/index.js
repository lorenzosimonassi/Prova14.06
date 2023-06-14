     function ePrimo(number) {
            if (number < 2) {
                return false;
            }

            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }

            return true;
        }

        function listarNumerosPrimos() {
            var primonumerotabela = document.getElementById("primonumerotabela");

            for (var number = 1; number <= 1000; number++) {
                var row = document.createElement("tr");

                var numberCell = document.createElement("td");
                numberCell.textContent = number;
                row.appendChild(numberCell);

                var isPrimeCell = document.createElement("td");
                isPrimeCell.textContent = ePrimo(number) ? "Sim" : "Não";
                row.appendChild(isPrimeCell);

                primonumerotabela.appendChild(row);
            }
        }

        listarNumerosPrimos();