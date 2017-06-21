export default class ActionCreator {
    constructor(store) {
        this.store = store;
    }
    changeCoordinate() {
        this.store.dispatch({
            type: "changeCoord"
        });
    }
    addHunter(hunter, name) {
        this.store.dispatch({
            type: "addHunter",
            hunter: hunter,
            name: name
        })
    }
}