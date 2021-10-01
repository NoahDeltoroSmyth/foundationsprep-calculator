// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add_two, add, sub, multi, divi } from '../calculations.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add function', (expect) => {

    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    const actual = add(input1, input2);

    expect.equal(actual, expected);
});

test('sub function', (expect) => {
    
    const input1 = 5;
    const input2 = 2;
    const expected = 3;

    const actual = sub(input1, input2);

    expect.equal(actual, expected);
});

test('multi function', (expect) => {

    const input1 = 10;
    const input2 = 5;
    const expected = 50;

    const actual = multi(input1, input2);

    expect.equal(actual, expected);
});

test('divi function', (expect) => {

    const input1 = 25;
    const input2 = 5;
    const expected = 5;


    const actual = divi(input1, input2);

    expect.equal(actual, expected);
});

