import { Component } from "react";

export default class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            nodeHandler: props.nodeHandler
        }
    }

    render(){
        console.log(this.state.nodeHandler.nodes)
        return(
            <div className="Display">
              <svg 
                width={window.innerWidth} 
                height={window.innerHeight*0.8} 
                viewBox="0 0 100 100">
                {this.state.nodeHandler.nodes.map((node) => node)}
              </svg>
            </div>
        )
    }
}

