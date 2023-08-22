const { describe } = require('node:test')
const renderShapes = require('../logo'); 
const Triangle = require('./triangle');

describe('renderShapes', () => {
    it('should render a Triangle', () => {
        const triangle = new Triangle();
        const points = 'polygon points="150,20 280,180 20,180"'

        expect(triangle.render()).toEqual(points);
    });
});
