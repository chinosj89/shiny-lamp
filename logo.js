
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const Shape = require('./lib/shapes')

//acceptance criteria only required different tests and js for the shapes. colors made to switch statements instead
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
  

// switch statements for text color
// originally had switch statements for background as well but since the acceptance criteria required that the color is tested within the shapes, i had to remove the switch statements here. the choice by the user is not added within the const shape within the function generateLogo
// testing is also done for the shapes along with a renderBg 
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
    const shape = renderShapes(data.shapes, data.backgroundColor);
    // const bg = renderBg(data.backgroundColor)
    const txtColor = renderText(data.textColor)
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape.render()} />

    <text x="150" y="125" font-size="60" text-anchor="middle" ${txtColor}>${data.initials}</text>

    </svg>`
}

module.exports = generateLogo;