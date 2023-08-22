const { describe } = require('node:test')
const renderShapes = require('../logo'); 
const Square = require('./square')


// instruction: Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
// but since i have the switch statement, i could not to add the color and just test for the rendered shape
describe('renderShapes', () => {
    it('should render a Square', () => {
        const square = new Square();
        square.renderBg("SlateBlue")
        const points = 'rect x="50" y="50" width="200" height="200" fill="SlateBlue"'

        expect(square.render()).toEqual(points);
    });
});
