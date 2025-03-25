const calculations = document.getElementById('calculations');
const result = document.getElementById('result');
const power = document.getElementById('power');
const del = document.getElementById('del');
const display = document.getElementById('display_container');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const comma = document.getElementById('comma');
const times = document.getElementById('times');
const div = document.getElementById('division');
const per = document.getElementById('percentage');
const changeSign = document.getElementById('changeSign');

const allClear = document.getElementById('AC');
const equal = document. getElementById('equal')

allClear.addEventListener('click', () => {
    calculations.innerText = ' ';
    result.innerText = 0;
})

del.addEventListener('click', () => {
    val = calculations.innerText.split("");
    val2 = val.slice(0,-1).join('');
    calculations.innerText = val2;
    result.innerText = 0;
})

one.addEventListener('click', () => {
    calculations.innerText += one.value
})

two.addEventListener('click', () => {
    calculations.innerText += two.value
})

three.addEventListener('click', () => {
    calculations.innerText += three.value
})

four.addEventListener('click', () => {
    calculations.innerText += four.value
})

five.addEventListener('click', () => {
    calculations.innerText += five.value
})

six.addEventListener('click', () => {
    calculations.innerText += six.value
})

seven.addEventListener('click', () => {
    calculations.innerText += seven.value
})

eight.addEventListener('click', () => {
    calculations.innerText += eight.value
})

nine.addEventListener('click', () => {
    calculations.innerText += nine.value
})

zero.addEventListener('click', () => {
    calculations.innerText += zero.value
})

comma.addEventListener('click', () => {
    calculations.innerText += comma.value
})

plus.addEventListener('click', () => {
    calculations.innerText += plus.value
})

minus.addEventListener('click', () => {
    calculations.innerText += minus.value
})

times.addEventListener('click', () => {
    calculations.innerText += times.value
})

div.addEventListener('click', () => {
    calculations.innerText += div.value
})

per.addEventListener('click', () => {
    calculations.innerText *= (0.01);
})

changeSign.addEventListener('click', () => {
    calculations.innerText += changeSign.value
})

power.addEventListener('click', () => {
    result.innerText = 0;
    calculations.innerText = '';
    result.style.display = 'flex';
    calculations.style.display = 'flex';

})

power.addEventListener('dblclick', () => {
    calculations.style.display = 'none';
    result.style.display = 'none';
})

equal.addEventListener('click', () => {
    result.innerText = eval(calculations.innerText);
    if(calculations.innerText.length >=15){
        calculations.innerText = eval(calculations.innerText)
    }
})