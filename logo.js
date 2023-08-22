// learned switch statements will help in this case since i have multiple choices as well
function renderShapes(selectedShape) {
    switch (selectedShape) {
        case 'circle':
            return 'circle cx="150" cy="100" r="80"';
        case 'triangle':
            return 'polygon points="150,20 280,180 20,180"';
        case 'square':
            return 'rect x="50" y="50" width="200" height="200"';
        default:
            return '';
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
    const shape = renderShapes(data.shapes);
    const bg = renderBg(data.backgroundColor)
    const txtColor = renderText(data.textColor)
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} ${bg} />

    <text x="150" y="125" font-size="60" text-anchor="middle" ${txtColor}>${data.initials}</text>

    </svg>`
}

module.exports = generateLogo;