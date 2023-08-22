const { describe } = require('node:test')
const renderText = require('../logo')

describe('renderText', () => {
    it('should return value for Crimson', () =>{
       const color = renderText('Crimson');
        expect(color === 'Crimson').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for ForestGreen', () =>{
       const color = renderText('ForestGreen');
        expect(color === 'ForestGreen').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for Gold', () =>{
       const color = renderText('Gold');
        expect(color === 'Gold').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for MediumPurple', () =>{
       const color = renderText('MediumPurple');
        expect(color === 'MediumPurple').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for SlateBlue', () =>{
       const color = renderText('SlateBlue');
        expect(color === 'SlateBlue').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for DarkOrange', () =>{
       const color = renderText('DarkOrange');
        expect(color === 'DarkOrange').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for White', () =>{
       const color = renderText('White');
        expect(color === 'White').toBe(false);
    })
});

describe('renderText', () => {
    it('should return value for Black', () =>{
       const color = renderText('Black');
        expect(color === 'Black').toBe(false);
    })
});
