import Node from "./Node";

export default class NodeHandler {
    constructor(screenWidth, screenHeight) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.nodes = { 0: <Node x={50} y={50} id={0} /> };
        this.highestID = 0;
    }

    addNode(id) {
        var x = 0;
        var y = 0;
        this.nodes[this.highestID + 1] = <Node key={this.highestID} id={this.highestID + 1} parentID={id} x={x} y={y} />;
        this.highestID += 1;
    }

    removeNode(id) {
        this.nodes[id] = undefined;
    }

    getNodes() {
        return this.nodes;
    }
}
