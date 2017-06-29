import React from "react";
import Forest from "./components/forest/forest.jsx";
import Hare from "./components/hare/hare.jsx";
import Hunter from "./components/hunter/hunter.jsx";
import Navigation from "./components/navigation/navigation.jsx"

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.store.getState().location.x,
            y: this.props.store.getState().location.y,
            hunters: this.props.store.getState().hunters,
            name: "",
            nameValid: false
        };
        this.move = this.move.bind(this);
        this.addNewHunter = this.addNewHunter.bind(this);
        this.storeChanged = this.storeChanged.bind(this);
        this.onChange = this.onChange.bind(this);
        this.nameValidation = this.nameValidation.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(this.storeChanged);
    }
    nameValidation(name) {
        let letters = /^[A-Za-z]+$/;
        if ( name.match(letters) && (name.length > 2) ) {
            return true
        }
        return false;
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    storeChanged() {
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
            name: event.target.value,
            nameValid: this.nameValidation(event.target.value)
        });
    }

    render() {
        let nameColor = this.state.nameValid === true ? "green" : "red";
        return (
            <main>
                {/*field with rabbit*/}
                <section className="field">
                    <Forest>
                        <Hare x={this.state.x} y={this.state.y} move={this.move} />
                    </Forest>

                </section>

                <section>
                    <div className="move-button" >
                        <button onClick={this.move}>MOVE hare</button>
                    </div>
                </section>

                {/*section with hunters*/}
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
                            <input
                                type="text"
                                name="nameHunter"
                                value={this.state.name}
                                onChange={this.onChange}
                                style={{borderColor: nameColor}}
                            />
                        </label>
                    </form>
                    <button onClick={this.addNewHunter}>add hunter</button>
                </section>
            </main>

        );
    }
}