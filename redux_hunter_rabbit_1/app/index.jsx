import ActionCreator from "./actions/actionCreator";
import Reducer from "./reducers/reducer.js"
import { createStore } from "redux";
import View from "./view.jsx";
import Intro from "./components/intro/intro.jsx"
import Navigation from "./components/navigation/navigation.jsx";
import FormAddHunter from "./components/forms/formHunter.jsx";
import { Provider } from "react-redux";


import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";


const store = createStore(Reducer);
// console.log(store.subscribe);
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