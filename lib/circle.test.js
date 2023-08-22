
const Circle = require('./circle.js')


// instruction: Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

describe('renderShapes', () => {
    it('should render a Circle', () => {
        const circle = new Circle();
        circle.renderBg("SlateBlue");
        const points = 'circle cx="150" cy="100" r="80" fill="SlateBlue"'

        expect(circle.render()).toEqual(points);
    });
});
