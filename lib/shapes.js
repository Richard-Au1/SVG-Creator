// parent class that gets export to child to render in their shape.
class Shape {
    constructor(textColor, shapeColor,  text) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text;
    }
};

module.exports = Shape;