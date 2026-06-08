const display = document.getElementById("display");
const expression = document.getElementById("expression");

const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        if (value === "AC") {

            currentInput = "";
            display.textContent = "0";
            expression.textContent = "";

        }

        else if (value === "=") {

            try {

                expression.textContent = currentInput;

                currentInput = eval(currentInput).toString();

                display.textContent = currentInput;

            }

            catch {

                display.textContent = "Error";

                currentInput = "";

            }

        }

        else if (value === "%") {

            try {

                currentInput = (
                    parseFloat(currentInput) / 100
                ).toString();

                display.textContent = currentInput;

            }

            catch {

                display.textContent = "Error";

            }

        }

        else {

            currentInput += value;

            display.textContent = currentInput;

        }

    });

});