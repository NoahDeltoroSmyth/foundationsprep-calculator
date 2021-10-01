import { add, sub, multi, divi} from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addOutput = document.getElementById('add-output');

addButton.addEventListener('click', ()=> {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    addOutput.textContent = result;
});

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subOutput = document.getElementById('sub-output');

subButton.addEventListener('click', () => {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);
    subOutput.textContent = result;
});

const multiInput1 = document.getElementById('multi-input-1');
const multiInput2 = document.getElementById('multi-input-2');
const multiButton = document.getElementById('multi-button');
const multiOutput = document.getElementById('multi-output');

multiButton.addEventListener('click', () => {
    const value1 = Number(multiInput1.value);
    const value2 = Number(multiInput2.value);
    const result = multi(value1, value2);
    multiOutput.textContent = result;
});

const diviInput1 = document.getElementById('divi-input-1');
const diviInput2 = document.getElementById('divi-input-2');
const diviButton = document.getElementById('divi-button');
const diviOutput = document.getElementById('divi-output');

diviButton.addEventListener('click', () => {
    const value1 = Number(diviInput1.value);
    const value2 = Number(diviInput2.value);
    const result = divi(value1, value2);
    diviOutput.textContent = result;
});