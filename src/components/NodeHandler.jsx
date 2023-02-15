import { Component } from "react";
import Node from "./Node";

export default class NodeHandler extends Component {
    constructor(props) {
        super(props)

        this.state = {
            screenWidth: props.screenWidth,
            screenHeight: props.screenHeight,
            nodes: { 0: <Node x={50} y={50} id={0} /> },
            highestID: 0,
            addNode: this.addNode
        }
    }

    addNode(id) {
        var x = 0;
        var y = 0;
        this.state.nodes[this.highestID + 1] = <Node key={this.highestID} id={this.highestID + 1} parentID={id} x={x} y={y} />;
        this.state.highestID += 1;
    }

    removeNode(id) {
        this.state.nodes[id] = undefined;
    }

    getNodes() {
        return this.state.nodes;
    }

    render(){
        var nodeArray = []
        for (var node in this.state.nodes) {
            nodeArray.push(this.state.nodes[node])
        }

        return (
            <div className="Display">
                <svg
                    width={window.innerWidth}
                    height={window.innerHeight * 0.8}
                    viewBox="0 0 100 100">
                    {nodeArray}
                </svg>
            </div>
        )
    }
}
