const { describe } = require('node:test')
const renderShapes = require('../logo')
const renderBg = require('../logo')

const shape = new Triangle();
shape.renderBg("Crimson");
expect(shape.render()).toEqual('polygon points="150,20 280,180 20,180" fill="Crimson')