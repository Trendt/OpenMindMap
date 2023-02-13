import ToolBar from './toolBar'
import Display from "./display"
import './App.css'
import EventHandler from '../utils/eventHandler'
import NodeHandler from './NodeHandler';

var nodeHandlerComponent = <NodeHandler screenWidth={window.innerWidth} screenHeight={window.innerHeight}/>;
var eventHandler = new EventHandler(nodeHandlerComponent);
eventHandler.registerEvents();

export default function App() {
  return (
    <div className="App">
      {nodeHandlerComponent}
      <ToolBar/ >
    </div>
  )
}
