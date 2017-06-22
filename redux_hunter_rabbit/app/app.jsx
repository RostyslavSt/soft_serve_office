import Hunter from "./data/hunter.js";

import ActionCreator from "./data/actionCreator";
import Reducer from "./data/reducer.js"
import {createStore} from "redux";
import View from "./views/view.jsx";

import React from "react";
import ReactDOM from "react-dom";


const store = createStore(Reducer);
const actions = new ActionCreator(store);

ReactDOM.render(
   <View store={store} actions={actions}/>,
   document.querySelector(".root")
);