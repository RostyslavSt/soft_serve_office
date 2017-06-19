import Hunter from "./data/hunter.js";

import AppDispatcher from "./data/AppDispatcher";
import ActionCreator from "./data/ActionCreator";
import Store from "./data/Store";
import View from "./views/View.jsx";

import React from "react";
import ReactDOM from "react-dom";

let hunter1 = new Hunter('Tom');
let hunter2 = new Hunter('Jack');
let hunter3 = new Hunter('Mike');
let listHunters = [hunter1, hunter2, hunter3];


const dispatcher = new AppDispatcher();
const actions = new ActionCreator(dispatcher);
const store = new Store(dispatcher, listHunters);

ReactDOM.render(
   <View store={store} actions={actions} hunter={Hunter}/>,
   document.querySelector(".root")
);