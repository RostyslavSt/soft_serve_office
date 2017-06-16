export default class Store {
    constructor(updateState, state) {
        this._state = state;
        this._updateState = updateState;
    }
    update(action) {
        this._state = this._updateState(this._state, action);
    }

}