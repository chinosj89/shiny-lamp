class Triangle {
    constructor() {
      this.type = 'triangle';
      this.bgColor = '';
    }

  
    render() {
      return `polygon points="150,20 280,180 20,180"`;
    }
  }
  
  module.exports = Triangle;
  