const { describe } = require('node:test')
const renderShapes = require('../logo'); 
const Square = require('./square')

describe('renderShapes', () => {
    it('should render a Square', () => {
        const square = new Square();
        const points = 'rect x="50" y="50" width="200" height="200"'

        expect(square.render()).toEqual(points);
    });
});
