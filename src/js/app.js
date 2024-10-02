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

    clear() {
        this.previousOperand = "";
        this.currentOperand = "";
        this.operator = undefined;
    }

    updateDisplay() {
        this.previousOperandTextElement.innerHTML = this.previousOperand;
        this.currentOperandTextElement.innerHTML = this.currentOperand;
    }

    appendNumber(number) {
        if (this.currentOperand.includes(".") && number === ".") return;

        this.currentOperand += number.toString();
    }
}

const calculator = new Calculator(
    previousOperandElement,
    currentOperandElement,
);

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
