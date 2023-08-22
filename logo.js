
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const Shape = require('./lib/shapes')

function renderShapes(selectedShape, data) {
    switch (selectedShape) {
      case 'circle':
        return new Circle(data);
      case 'triangle':
        return new Triangle(data);
      case 'square':
        return new Square(data);
      default:
        return new Shape(); 
    }
  }
  
// swtich statements for background color
function renderBg(selectedColor) {
    switch (selectedColor) {
        case 'Crimson':
            return 'fill="Crimson"';
        case 'Lavender':
            return 'fill="Lavender"';
        case 'ForestGreen':
            return 'fill="ForestGreen"';
        case 'Gold':
            return 'fill="Gold"';
        case 'MediumPurple':
            return 'fill="MediumPurple"';
        case 'SlateBlue':
            return 'fill="SlateBlue"';
        case 'DarkOrange':
            return 'fill="DarkOrange"';
        case 'White':
            return 'fill="White"';
        case 'Black':
            return 'fill="Black"';
        default:
            return '';
    }
}
// switch statements for text color
function renderText(selectedColor) {
    switch (selectedColor) {
        case 'Crimson':
            return 'fill="Crimson"';
        case 'ForestGreen':
            return 'fill="ForestGreen"';
        case 'Gold':
            return 'fill="Gold"';
        case 'MediumPurple':
            return 'fill="MediumPurple"';
        case 'SlateBlue':
            return 'fill="SlateBlue"';
        case 'DarkOrange':
            return 'fill="DarkOrange"';
        case 'White':
            return 'fill="White"';
        case 'Black':
            return 'fill="Black"';
        default:
            return '';
    }
}

// function to generate svg file
function generateLogo(data) {
    const shape = renderShapes(data.shapes, data);
    const bg = renderBg(data.backgroundColor)
    const txtColor = renderText(data.textColor)
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape.render()} ${bg} />

    <text x="150" y="125" font-size="60" text-anchor="middle" ${txtColor}>${data.initials}</text>

    </svg>`
}

module.exports = generateLogo;