import React, {Component} from "react";

export default class Node extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            key: props.key,
            id: props.id,
            parentId: props.parentId,
            type: props.type,
            x: props.x,
            y: props.y,
            width: props.width,
            height: props.height,
            nodeBackgroundColor: props.nodeBackgroundColor,
            nodeStrokeColor: props.nodeStrokeColor,
            nodeStrokeWidth: props.nodeStrokeWidth,
            text: props.text,
            textSize: props.textSize,
            textColor: props.textColor,
            textStrokeColor: props.textStrokeColor,
            textStrokeWidth: props.textStrokeWidth,
        }
     }

    render() {
        return ([
            (this.state.type.includes("ellipse")) ? <ellipse
                key="ellipse"
                onClick={() => document.dispatchEvent(new CustomEvent("clickNodeEvent", {"detail":{"id":this.state.id}}))}
                cx={this.state.x} cy={this.state.y}
                rx={this.state.width} ry={this.state.height}
                fill={this.state.nodeBackgroundColor} 
                stroke={this.state.nodeStrokeColor}
                strokeWidth={this.state.nodeStrokeWidth}/> : null,

            (this.state.type.includes("text")) ? <text 
                key="text"
                onClick={() => document.dispatchEvent(new CustomEvent("clickNodeEvent", {"detail":{"id":this.state.id}}))} 
                x={this.state.x} y={this.state.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={this.state.textColor} 
                fontSize= {this.state.textSize}
                stroke={this.state.textStrokeColor}
                strokeWidth={this.state.textStrokeWidth}>
                    {this.state.text}
            </text> : null
        ]);
    }
}

Node.defaultProps = {
    id: 0,
    key: 0,
    parentId:undefined,
    type: "ellipse-text",
    x: 0,
    y: 0,
    width: 12,
    height: 6,
    nodeBackgroundColor: "#1d2021",
    nodeStrokeColor: "#fff",
    nodeStrokeWidth: 0.5,
    text: "TOPIC",
    textSize: 2.9,
    textColor: "#fff",
    textStrokeColor: "fff",
    textStrokeWidth: 0.2 
}
