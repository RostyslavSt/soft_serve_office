import ActionCreator from "./actions/actionCreator";
import Reducer from "./reducers/reducer.js"
import { createStore } from "redux";
import View from "./view.jsx";
import Intro from "./components/intro/intro.jsx"
import Navigation from "./components/navigation/navigation.jsx";
import FormAddHunter from "./components/forms/formHunter.jsx";
import { Provider } from "react-redux";
import Hare from "../data/hare.js";
import Hunter from "../data/hunter.js";
import {
    listHunterLogoPath
} from "../data/hunterLogoPath.js"


import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

let hare = new Hare(3, 4);
let hunter1 = new Hunter('Tom', 57);
let hunter2 = new Hunter('Jack', 19);

let listHunters = [hunter1, hunter2];

const initialState = {
    location: {
        x: hare.x,
        y: hare.y
    },
    hunters: listHunters,
    hunterLogoPath: listHunterLogoPath
}

const store = createStore(Reducer, initialState);
const actions = new ActionCreator(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={createHistory()}>
            <div className="app-block">
                <Navigation />
                <Route exact path="/intro" component={Intro} />
                <Route path="/main" render={(props) => {
                    return <View {...props} actions={actions}/>
                }} />
                <Route path="/form" render={(props) => {
                    return <FormAddHunter {...props} actions={actions}/>
                }} />

            </div>
        </Router>
    </Provider>,
    document.querySelector(".root")
);

{/*<View store={store} actions={actions} />*/ }
// component={FormAddHunter}