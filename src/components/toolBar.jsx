import { useState } from "react"
import "./toolBar.css"

export default function ToolBar() {
    const [currentMode, setMode] = useState("NORMAL");

    function dispatchChangeToolEvent(mode){
        var event = new CustomEvent("changeToolEvent", {
        "detail":{mode}
        });

        document.dispatchEvent(event);
    }

    return (
        <div className="ToolBar" >
            <button className={(currentMode=="MOVE")? "active-tool":"tool"} onClick={() => (setMode("MOVE"), dispatchChangeToolEvent("MOVE"))}><img src="./src/assets/icons/move.svg"/></button>
            <button className={(currentMode=="ADD")? "active-tool":"tool"} onClick={() => (setMode("ADD"), dispatchChangeToolEvent("ADD"))}><img src="./src/assets/icons/add.svg"/></button>
            <button className={(currentMode=="NORMAL")? "active-tool":"tool"} onClick={() => (setMode("NORMAL"), dispatchChangeToolEvent("NORMAL"))}><img src="./src//assets/icons/normal.svg"/></button>
            <button className={(currentMode=="REMOVE")? "active-tool":"tool"} onClick={() => (setMode("REMOVE"), dispatchChangeToolEvent("REMOVE"))}><img src="./src/assets/icons/remove.svg"/></button>
            <button className={(currentMode=="CONFIG")? "active-tool":"tool"} onClick={() => (setMode("CONFIG"), dispatchChangeToolEvent("CONFIG"))}><img src="./src/assets/icons/config.svg"/></button>
        </div>
    )
}
