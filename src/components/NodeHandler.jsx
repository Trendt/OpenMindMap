import Node from "./Node";

export default class NodeHandler {
    constructor(screenWidth, screenHeight){
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.nodes = [<Node x={50} y={50} id={0}/>];
        this.highestID = 0;
    }

    addNode(id) {
        for (const node in this.nodes){
            if(node.id == id){
                currentNodes = this.nodes;
                //TODO x,y berechnen
                x = 0
                y = 0
                this.setState({
                    nodes: currentNodes.push(<Node id={this.highestID+1} parentID={id} x={x} y={y}/>),
                    highestID: this.highestID + 1
                })
            }
        }
    }

    removeNode(id) {
        TODO
    }

    getNodes() {
        return this.nodes;
    }
}

NodeHandler.defaultProps = {
    nodes:[<Node id={0} width={200}/>],
    highestID: 0
}
