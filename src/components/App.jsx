import ToolBar from './toolBar'
import './App.css'
import EventHandler from '../utils/eventHandler'
import NodeHandler from './NodeHandler';
import { Component } from 'react';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.nodeHandler = <NodeHandler screenWidth={window.innerWidth} screenHeight={window.innerHeight} />;
        this.eventHandler = new EventHandler(this.nodeHandler);
        this.eventHandler.registerEvents();
    }

    render() {
        return (
            <div className="App">
                {this.nodeHandler}
                <ToolBar />
            </div>
        )
    }
}

