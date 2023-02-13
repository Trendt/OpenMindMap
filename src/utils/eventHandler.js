
export default class EventHandler {
    constructor(nodeHandler) {
        this.currentTool = "NORMAL"
        this.nodeHandler = nodeHandler;
        console.log("NodeHandler:", this.nodeHandler);
    }

    setCurrentTool(newTool) {
        this.currentTool = newTool;
    }

    clickNodeEvent(e) {
        var nodeID = e.detail.nodeID
        console.log(e.detail + " " + this.currentTool);
        switch (this.currentTool) {
            case "MOVE":
                break;

            case "ADD":
                this.nodeHandler.addNode(nodeID);
                break;

            case "NORMAL":
                break;

            case "REMOVE":
                this.nodeHandler.removeNode(nodeID);
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
        document.addEventListener("clickNodeEvent", this);

        document.addEventListener("changeToolEvent", this);
    }
}
