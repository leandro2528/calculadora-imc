function start() {
    var btnCalculator = document.querySelector('#btnCalculator');
    btnCalculator.addEventListener('click', handlebuttonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.focus();

    inputWeight.addEventListener('input', handlebuttonClick);
    inputHeight.addEventListener('input', handlebuttonClick);

    handlebuttonClick();

}

function calculatorImc(weight, height) {
    return weight / (height * height);
}

function handlebuttonClick() {
    var inputWeight = document.querySelector('#input-weight').value;
    var inputHeight = document.querySelector('#input-height').value;

    var imcResult = document.querySelector('#imcResult');

    var imc = calculatorImc(inputWeight, inputHeight);

    imcResult.textContent = "O IMC desses dados são " +imc.toFixed(2).replace('.', ',');
}

start();