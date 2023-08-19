// learned switch statements will help in this case since i have multiple choices as well
function renderShapes(selectedShape) {
    switch (selectedShape) {
        case 'circle':
            return '<circle cx="150" cy="100" r="80" fill="green" />';
        case 'triangle':
            return '<polygon points="150,20 280,180 20,180" fill="blue" />';
        case 'square':
            return '<rect x="50" y="50" width="200" height="200" fill="red" />';
        default:
            return '';
    }
}

function generateLogo(data) {
    const shape = renderShapes(data.shapes);
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} ${bgColor} />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>`
}

module.exports = generateLogo;