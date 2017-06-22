import React from "react";
import Forest from "./components/forest/forest.jsx"
import Hare from "./components/hare/hare.jsx"

import Hunter from "./components/hunter/hunter.jsx"

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.store.getState().location.x,
            y: this.props.store.getState().location.y,
            hunters: this.props.store.getState().hunters,
            name: ""
        };
        this.move = this.move.bind(this);
        this.addNewHunter = this.addNewHunter.bind(this);
        this.storeChanged = this.storeChanged.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(this.storeChanged);
        console.dir(this.props.store.getState());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    storeChanged() {
        console.log(this.props.store.getState());
        this.setState({
            x: this.props.store.getState().location.x,
            y: this.props.store.getState().location.y,
            hunters: this.props.store.getState().hunters
        });
    }

    move() {
        this.props.actions.changeCoordinate();
    }

    addNewHunter() {
        this.props.actions.addHunter(this.state.name);
        this.state.name = "";
    }

    onChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <main>
                <section className="field">
                    <Forest>
                        <Hare x={this.state.x} y={this.state.y}/>
                    </Forest>

                </section>

                <section>
                    <div className="hunters-block">
                        {this.state.hunters.map((itemHunter, key) => {
                            return <Hunter key={key} name={itemHunter.name} x={this.state.x} y={this.state.y} />
                        })}
                    </div>
                </section>

                <section>
                    <form>
                        <label>
                            Hunter's Name
                        <input type="text" name="nameHunter" value={this.state.name} onChange={this.onChange} />
                        </label>
                    </form>
                    <button onClick={this.move}>MOVE hare</button>
                    <button onClick={this.addNewHunter}>add hunter</button>
                </section>
            </main>


        );
    }
}