class Triangle {
  constructor(color) {
    this.type = 'triangle';
    this.color = color;
  }
  renderBg(color) {
    this.color = color;
  }

  render() {
    return `polygon points="150,20 280,180 20,180" fill="${this.color}"`;
  }
}

module.exports = Triangle;
