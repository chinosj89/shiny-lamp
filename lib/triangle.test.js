const { describe } = require('node:test')
const Triangle = require('./triangle');


// instruction: Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
describe('renderShapes', () => {
    it('should render a Triangle', () => {
        const triangle = new Triangle("SlateBlue");
        const points = 'polygon points="150,20 280,180 20,180" fill="SlateBlue"'

        expect(triangle.render()).toEqual(points);
    });
});
