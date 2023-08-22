const { describe } = require('node:test')
const renderBg = require('../logo')

//same concept as shapes.test.js
//checking if the switch statements are returning a value
describe('renderBg', () => {
    it('should return value for Crimson', () =>{
       const color = renderBg('Crimson');
        expect(color === 'Crimson').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for ForestGreen', () =>{
       const color = renderBg('ForestGreen');
        expect(color === 'ForestGreen').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for Gold', () =>{
       const color = renderBg('Gold');
        expect(color === 'Gold').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for MediumPurple', () =>{
       const color = renderBg('MediumPurple');
        expect(color === 'MediumPurple').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for SlateBlue', () =>{
       const color = renderBg('SlateBlue');
        expect(color === 'SlateBlue').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for DarkOrange', () =>{
       const color = renderBg('DarkOrange');
        expect(color === 'DarkOrange').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for White', () =>{
       const color = renderBg('White');
        expect(color === 'White').toBe(false);
    })
});

describe('renderBg', () => {
    it('should return value for Black', () =>{
       const color = renderBg('Black');
        expect(color === 'Black').toBe(false);
    })
});
