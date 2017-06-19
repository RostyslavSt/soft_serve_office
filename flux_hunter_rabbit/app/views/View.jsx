import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.hunters = this.props.store.hunters;
        this.state = {
            x: this.props.store.coordinate.x,
            y: this.props.store.coordinate.y,
            name: "NoName"
        };
        this.move = this.move.bind(this);
        this.addNewHunter = this.addNewHunter.bind(this);
        this.storeChanged = this.storeChanged.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.add = this.add.bind(this);
        // this.del = this.del.bind(this);
    }

    componentDidMount() {
        this.props.store.subscribeView(this.storeChanged);
    }

    componentWillUnmount() {
        this.props.store.unsubscribeView(this.storeChanged);
    }

    storeChanged() {
        this.setState({
            x: this.props.store.coordinate.x,
            y: this.props.store.coordinate.y
        });
    }

    move() {
        this.props.actions.changeCoordinate();
    }

    addNewHunter() {
        this.props.actions.addHunter(this.props.hunter, this.state.name);
        this.state.name = "";
        console.dir(this.props.hunter);
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
                    {this.props.store.hunters.map((itemHunter, key) => {
                        return <div key={key} className="hunter">
                            {itemHunter.name} said:
                                    <div>I see the hare: x: {this.props.store.coordinate.x} y: {this.props.store.coordinate.y}</div>
                        </div>
                    })}
                </div>
                <button onClick={this.move}>MOVE hare</button>
                <button onClick={this.addNewHunter}>add hunter</button>
            </section>


        );
    }
}