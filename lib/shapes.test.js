// simple test to see if we're returning a value within the switch statements

const { describe } = require('node:test')
const renderShapes = require('../logo')

describe('renderShapes', () => {
    it('should return value for circle', () =>{
       const shape = renderShapes('circle');
        expect(shape === 'circle').toBe(false);
        // the test is checking if case 'circle' is returning the proper information. if case 'circle' returned 'circle' then there is something wrong with my function. 
    })
});

// tried a different way here. 
describe('renderShapes', () => {
    it('should return value for triangle', () =>{
       const shape = renderShapes('triangle');
        expect(shape !== '').toBe(true);
        // the test is checking if case 'triangle' is returning the value given and if it is returning an empty string then this test should fail. 
    })
});

describe('renderShapes', () => {
    it('should return value for square', () =>{
       const shape = renderShapes('square');
        expect(shape === 'square').toBe(false);
    })
});

