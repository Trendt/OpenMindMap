import { Component } from "react";
import NodeHandler from "../components/NodeHandler";

export default class EventHandler{
    constructor(nodeHandler) {
        this.currentTool = "NORMAL"
        this.nodeHandler = nodeHandler;
    }

    setCurrentTool(newTool){
        this.currentTool = newTool;
    }

    clickNodeEvent(e) {
        var nodeID = e.detail.nodeID
        console.log(e.detail + " " + this.currentTool);
        switch (this.currentTool) {
            case "MOVE":
                break;

            case "ADD":
                console.log(nodeID)
                this.nodeHandler.addNode(nodeID);
                break;

            case "NORMAL":
                break;

            case "REMOVE":
                break;

            case "CONFIG":
                break;
        }
    }

    changeToolEvent(e) {
        this.setCurrentTool(e.detail["mode"]);
    }

    handleEvent(e) {
        switch (e.type) {
            case "clickNodeEvent":
                this.clickNodeEvent(e);
                break;

            case "changeToolEvent":
                this.changeToolEvent(e);
                break;

            default:
                console.log("Event " + e.type + " not found.");
                break;
        }
    }

    registerEvents() {
        var classInstance = new EventHandler;
        document.addEventListener("clickNodeEvent", classInstance);

        document.addEventListener("changeToolEvent", classInstance);
    }
}
