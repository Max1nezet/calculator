// let currentResult = '0';
// let operator = '';
// let previousResult = '';


// function updateResult(){
// document.getElementById("result").value = currentResult;
// }

// function appendNumber(number) {
//   if (currentResult === '0' || operator !== '') {
//       currentResult = number;
//   } else {
//       currentResult += number;
//   }
//   updateResult();
// }

// function appendDecimal() {
// if (!currentResult.includes(".")) {
//   currentResult += "."
// }
// updateResult()
// }

// function appendOperator(selectedOperator) {
//   if (operator !== '') {
//       calculate();
//   }
//   operator = selectedOperator;
//   previousResult = currentResult;
//   currentResult = '0';
//   updateResult();
// }

let currentResult = '0';
let operator = '';
let previousResult = '';

function updateResult() {
    document.getElementById('result').value = currentResult;
}

function appendNumber(number) {
    if (currentResult === '0' || operator !== '') {
        currentResult = number;
    } else {
        currentResult += number;
    }
    updateResult();
}

function appendDecimal() {
    if (!currentResult.includes('.')) {
        currentResult += '.';
    }
    updateResult();
}

function appendOperator(selectedOperator) {
    if (operator !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousResult = currentResult;
    currentResult = '0';
    updateResult();
}

function calculate() {
    let result;
    const num1 = parseFloat(previousResult);
    const num2 = parseFloat(currentResult);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentResult = result.toString();
    operator = '';
    previousResult = '';
    updateResult();
}

function clearResult() {
    currentResult = '0';
    operator = '';
    previousResult = '';
    updateResult();
}