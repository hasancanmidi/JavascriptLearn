// Elemanları seç
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Durum değişkenleri
let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

// Butonlara tıklama olayını dinle
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {
            handleNumber(value);
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            handleOperator(value);
        }
    });
});

// Sayı butonlarına tıklama işlemi
function handleNumber(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Operatör butonlarına tıklama işlemi
function handleOperator(value) {
    if (currentInput === '') return;

    if (firstNumber === '') {
        firstNumber = currentInput;
    } else {
        secondNumber = currentInput;
    }

    operator = value;
    currentInput = '';
}

// Ekranı güncelle
function updateDisplay(value) {
    display.textContent = value;
}

// Hesaplama işlemi
function calculate() {
    if (firstNumber === '' || currentInput === '') return;

    secondNumber = currentInput;
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }

    updateDisplay(result);
    currentInput = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

// Ekranı temizleme
function clearDisplay() {
    currentInput = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateDisplay('');
}
