export default class ActionCreator {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }
    changeCoordinate() {
        this.dispatcher.dispatch({
            type: "changeCoord"
            //  number: number
        });
    }
    addHunter(hunter, name) {
        this.dispatcher.dispatch({
            type: "addHunter",
            hunter: hunter,
            name: name
        })
    }
}