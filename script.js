function start() {
    var btnCalculator = document.querySelector('#btnCalculator');
    btnCalculator.addEventListener('click', handlebuttonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var inputName = document.querySelector('#input-name');

    inputName.focus();

    inputWeight.addEventListener('input', handlebuttonClick);
    inputHeight.addEventListener('input', handlebuttonClick);
    inputName.addEventListener('input', handlebuttonClick);

    handlebuttonClick();

}

function calculatorImc(weight, height) {
    return weight / (height * height);
}

function handlebuttonClick() {
    var inputWeight = document.querySelector('#input-weight').value;
    var inputHeight = document.querySelector('#input-height').value;
    var inputName = document.querySelector('#input-name').value;


    var imcResult = document.querySelector('#imcResult');

    var imc = calculatorImc(inputWeight, inputHeight);

    imcResult.textContent = "Olá "+inputName+" seu IMC é " +imc.toFixed(2).replace('.', ',');
}

start();