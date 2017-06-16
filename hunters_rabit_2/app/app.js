import Store from "./data/store.js";
import Hunter from "./data/hunter.js";
import View from "./views/view.jsx";

import React from "react";
import ReactDOM from "react-dom";

let store = new Store();

// console.log(hare.state);


let hunter1 = new Hunter('Tom');
let hunter2 = new Hunter('Jack');

store.listHunters = [hunter1, hunter2];

store.subscribe(hunter1.receiveCoordinates());
store.subscribe(hunter2.receiveCoordinates());



ReactDOM.render(
    <View store={store} hunterClass={Hunter}/>,
    document.querySelector('#root')
)


store.updateCoordinates();

store.updateCoordinates();

console.log(store.state);