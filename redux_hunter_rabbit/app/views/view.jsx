import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 5,
            y: 9,
            hunters: this.props.store.getState().hunters,
            name: "NoName"
        };
        this.move = this.move.bind(this);
        this.addNewHunter = this.addNewHunter.bind(this);
        this.storeChanged = this.storeChanged.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(this.storeChanged);
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
        this.props.actions.addHunter(this.props.hunter, this.state.name);
        this.state.name = "";
        console.dir(this.props.hunters);
    }


    onChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <section>
                <form>
                    <label>
                        Hunter's Name
                        <input type="text" name="nameHunter" value={this.state.name} onChange={this.onChange} />
                    </label>
                </form>

                <div>
                    {this.state.hunters.map((itemHunter, key) => {
                        return <div key={key} className="hunter">
                            {itemHunter.name} said:
                                    <div>I see the hare: x: {this.state.x} y: {this.state.y}</div>
                        </div>
                    })}
                </div>
                <button onClick={this.move}>MOVE hare</button>
                <button onClick={this.addNewHunter}>add hunter</button>
            </section>


        );
    }
}