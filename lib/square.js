const Shape = require('./Shape.js')

// rendering square using svg template
class Square extends Shape {
    constructor(textColor, shapeColor,  text) {
        super(textColor, shapeColor,  text);
    };
    render() {
        // returning svg template for square
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Square;