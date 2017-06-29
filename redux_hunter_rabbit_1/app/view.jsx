import React from "react";
import Forest from "./components/forest/forest.jsx";
import Hare from "./components/hare/hare.jsx";
import Hunter from "./components/hunter/hunter.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import { connect } from "react-redux";
// import { nameValidation } from "./utils/validation.js"

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.y,
            hunters: this.props.hunters,
            name: "",
            nameValid: false
        };
        this.move = this.move.bind(this);
        this.addNewHunter = this.addNewHunter.bind(this);
        this.storeChanged = this.storeChanged.bind(this);
        this.onChange = this.onChange.bind(this);
        this.nameValidation = this.nameValidation.bind(this);
    }

    // componentDidMount() {
    //     console.log(this.props.store.subscribe)
    //     this.unsubscribe = this.props.store.subscribe(this.storeChanged);
    // }

    // componentWillUnmount() {
    //     this.unsubscribe();
    // }
    nameValidation(name) {
        let letters = /^[A-Za-z]+$/;
        if (name.match(letters) && (name.length > 2)) {
            return true
        }
        return false;
    }

    storeChanged() {
        this.setState({
            x: this.props.x,
            y: this.props.y,
            hunters: this.hunters
        });
    }

    move() {
        console.log(this.props.store.subscribe)
        this.props.actions.changeCoordinate();
    }

    addNewHunter() {
        // console.log(this.props.x);
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
                                style={{ borderColor: nameColor }}
                            />
                        </label>
                    </form>
                    <button onClick={this.addNewHunter}>add hunter</button>
                </section>
            </main>

        );
    }
}

export default connect(
    state => ({
        store: state,
        x: state.location.x,
        y: state.location.y,
        hunters: state.hunters
    }),
    dispatch => ({})
)(View);