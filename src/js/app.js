const previousOperandElement = document.querySelector("[data-previous]");
const currentOperandElement = document.querySelector("[data-current]");
const allCleanButton = document.querySelector("[data-all-clean]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const operatorButtons = document.querySelectorAll("[data-operand]");
const numberButtons = document.querySelectorAll("[data-number]");

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    calculate(operation) {
        let result;

        const _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);

        switch (operation) {
            case "÷":
                {
                    this.currentOperand =
                        parseFloat(_previousOperand) /
                        parseFloat(_currentOperand);
                }
                break;
            case "x":
                {
                    this.currentOperand =
                        parseFloat(_previousOperand) *
                        parseFloat(_currentOperand);
                }
                break;
            case "+":
                {
                    this.currentOperand =
                        parseFloat(_previousOperand) +
                        parseFloat(_currentOperand);
                }
                break;
            case "-":
                {
                    this.currentOperand =
                        parseFloat(_previousOperand) -
                        parseFloat(_currentOperand);
                }
                break;

            default:
                console.log("Ops, algo deu errado");
        }
    }

    chooseOperation(operation) {
        if (this.previousOperand !== "") {
            this.calculate(this.operation);
        }

        this.operation = operation;

        this.previousOperand = `${this.currentOperand} ${this.operation}`;
        this.currentOperand = "";
    }

    appendNumber(number) {
        if (this.currentOperand.includes(".") && number === ".") return;

        this.currentOperand += number.toString();
    }

    clear() {
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousOperandTextElement.innerHTML = `${this.previousOperand} ${this.operation}`;
        this.currentOperandTextElement.innerHTML = this.currentOperand;
    }
}

const calculator = new Calculator(
    previousOperandElement,
    currentOperandElement,
);

for (const operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", () => {
        calculator.chooseOperation(operatorButton.innerHTML);
        calculator.updateDisplay();
    });
}

for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
        calculator.appendNumber(numberButton.innerHTML);
        calculator.updateDisplay();
    });
}

allCleanButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});
