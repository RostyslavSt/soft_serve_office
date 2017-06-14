// import View from "./views/view.jsx";
// import ActionCreator from "./data/actions.js";
// import Dispatcher from "./data/dispatcher.js";
// import React from "react";
// import ReactDOM from "react-dom";

// import Store from "./data/store.js";

function updateState(state, action) {
    if (action.type === 'increment') {
        return this.state + action.amount;
    } else if (action.type === 'decrement') {
        return this.state - action.amount;
    } else return state;
}


const incrementAction = { type: 'increment', amount: 1 };
const decrementAction = { type: 'decrement', amount: 3 };


class Store {
    constructor(updateState, state) {
        this._state = state;
        this._updateState = updateState;
        this._callbacks = [];
    }
    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cd => cd !== callback);
    }

    get state() {
        return this._state;
    }
}

const store = new Store(updateState, 0);
// console.log()

console.log(store.state);
const unsubscribe = store.subscribe(() => console.log('State changed 1', store.state));
store.subscribe(() => console.log('State changed 2', store.state));

store.update(incrementAction);
unsubscribe();
store.update(decrementAction);
store.update({});



// ReactDOM.render(
//     <View store={store} />,
//     document.querySelector(".root")
// )