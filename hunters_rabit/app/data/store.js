export default class store {
    constructor(state) {
        this._callbackHunters = [];
        this._state = state || { //hare coordinates
            x: 10,
            y: 12
        }
       this.listHunters =[];
    }
    get state() {
        return this._state;
    }
    subscribe(callbackFromHunter) {
        this._callbackHunters.push(callbackFromHunter);
    }
    updateCoordinates() {
        this._state.x = Math.round(Math.random() * (50 - 1) + 1);
        this._state.y = Math.round(Math.random() * (50 - 1) + 1);
        this._callbackHunters.forEach(itemCallback => itemCallback(this.state));
    }

    unsubcribe(callbackFromHunter) {
        this._callbackHunters = this._callbackHunters.filter((itemCallback) => callbackFromHunter !== itemCallback);
    }
}