export default class ActionCreator {
    constructor(store) {
        this.store = store;
    }
    changeCoordinate() {
        this.store.dispatch({
            type: "changeCoord"
        });
    }
    addHunter(name) {
        this.store.dispatch({
            type: "addHunter",
            name: name
        })
    }
}