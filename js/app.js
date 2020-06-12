let numbers = document.querySelectorAll('.number');
let opers = document.querySelectorAll('.oper');
let eq = document.querySelector('.equal');

let numberHistory = 0;
let operHistory = '';

let calculate = false;
numbers.forEach(number => {
    number.addEventListener('click', ($event) => { addNumber($event.target.innerHTML) })
});
opers.forEach(oper => {
    oper.addEventListener('click', ($event) => { AddOperation($event.target.innerHTML) })
});

eq.addEventListener('click', () => { equal() })

const addNumber = (number) => {
    let current = document.querySelector('.calculadora-output-current');
    let currentHistory = current.innerHTML;
    if (currentHistory === "0") {
        current.innerHTML = '';
        current.innerHTML += number;
    } else {
        current.innerHTML += number;
    }
}

const AddOperation = (oper) => {
    let current = document.querySelector('.calculadora-output-current');
    let actualNumber = parseFloat(current.innerHTML);
    calculate = true;
    numberHistory = actualNumber;
    operHistory = oper;
    current.innerHTML = '0';
}

const equal = () => {
    if(calculate == true){
        let current2 = document.querySelector('.calculadora-output-current');
        let actualNumber2 = parseFloat(current2.innerHTML);
        switch (operHistory) {
            case 'X':
                numberHistory = numberHistory * actualNumber2;
                current2.innerHTML = numberHistory;
                break;
            case '-':
                numberHistory = numberHistory - actualNumber2;
                current2.innerHTML = numberHistory;
                break;
            case '+':
                numberHistory = numberHistory + actualNumber2;
                current2.innerHTML = numberHistory;
                break;
            case 'Borrar':
                break;
            case '/':
                numberHistory = numberHistory / actualNumber2;
                current2.innerHTML = numberHistory;
                break;
            default:
                break;
        }
        calculate = false;
    }
}

