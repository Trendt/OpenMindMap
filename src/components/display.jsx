import { Component } from "react";

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeDictionary: props.nodeDict,
        }
    }

    render() {
        console.log(this.state.nodeHandler);
        var nodeArray = []
        for (var node in this.state.nodeDictionary) {
            nodeArray.push(this.state.nodeDictionary[node])
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

