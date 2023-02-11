import ToolBar from './toolBar'
import Display from "./display"
import './App.css'
import EventHandler from '../utils/eventHandler'
import NodeHandler from './NodeHandler';

var nodeHandler = new NodeHandler(window.innerWidth, window.innerHeight);
var eventHandler = new EventHandler(nodeHandler);
eventHandler.registerEvents();

export default function App() {
  return (
    <div className="App">
      <Display nodeHandler={nodeHandler}/>
      <ToolBar/>
    </div>
  )
}
