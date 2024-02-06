function appendValue(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function calculateResult() {
    document.calculator.display.value = eval(document.calculator.display.value);
}
