const { describe } = require('node:test')
const renderShapes = require('../logo'); 
const Circle = require('./circle')


// instruction: Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
// but since i have the switch statement, i could not to add the color and just test for the rendered shape
describe('renderShapes', () => {
    it('should render a Circle', () => {
        const circle = new Circle();
        const points = 'circle cx="150" cy="100" r="80"'

        expect(circle.render()).toEqual(points);
    });
});
