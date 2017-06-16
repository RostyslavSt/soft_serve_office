import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // number: 0,
            coordinates: this.props.store.state
        };
        this.move = this.move.bind(this);
    }

    move() {
        this.props.store.updateCoordinates();
        this.setState({
            coordinates: this.props.store.state
        })
    }
    addHunter() {
        // let newHunter = new this.props.hunterClass();
        console.log(this.props.hunterClass);
    }
    render() {
        return (
            <section>
                <div>
                    {this.props.store.listHunters.map((itemHunter, key) => {
                        return <div key={key} className="hunter">
                            {itemHunter.name} said:
                                    <div>I see the hare: x: {this.state.coordinates.x} y: {this.state.coordinates.y}</div>
                        </div>
                    })}

                </div>
                <button onClick={this.move}>MOVE hare</button>
                <button onClick={this.addHunter}>add hunter</button>

            </section>
        );
    }
}
