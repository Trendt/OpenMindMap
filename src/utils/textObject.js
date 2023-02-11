import ColorObject from "./colorObject"

export default class TextObject{
    constructor(text, textSize, colorObject) {
        this.text = text;
        this.textSize = textSize;
        this.textColor = colorObject.fillColor;
        this.strokeColor = colorObject.strokeColor;
        this.strokeWidth = colorObject.strokeWidth;
    }
}
