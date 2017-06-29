import ActionCreator from "./actions/actionCreator";
import Reducer from "./reducers/reducer.js"
import { createStore } from "redux";
import View from "./views/view.jsx";
import Intro from "./views/components/intro/intro.jsx"
import Navigation from "./views/components/navigation/navigation.jsx";
import FormAddHunter from "./views/components/forms/formHunter.jsx";


import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";


const store = createStore(Reducer);
const actions = new ActionCreator(store);

ReactDOM.render(
    <Router history={createHistory()}>
        <div className="app-block">
            <Navigation />
            <Route exact path="/intro" component={Intro} />
            <Route path="/main" render={(props) => {
                return <View {...props} actions={actions} store={store} />
            }} />
            <Route path="/form" render={(props) => {
                return <FormAddHunter {...props} actions={actions} store={store}/>
            }} />

        </div>
    </Router>,
    document.querySelector(".root")
);

{/*<View store={store} actions={actions} />*/ }
// component={FormAddHunter}