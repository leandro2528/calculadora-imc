function start() {
    var btnCalculator = document.querySelector('#btnCalculator');
    btnCalculator.addEventListener('click', handleButtonCalculator);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonCalculator);
    inputHeight.addEventListener('input', handleButtonCalculator);

    handleButtonCalculator();
}

function calculatorImc(weight, height) {
    return weight / (height * height);
}

function handleButtonCalculator() {
    var inputWeight = document.querySelector('#input-weight').value;
    var inputHeight = document.querySelector('#input-height').value;

    var imcResult = document.querySelector('#imcResult');

    var imc = calculatorImc(inputWeight, inputHeight);

    imcResult.textContent = imc.toFixed(2).replace('.', ',');

}

start();

