import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     number: 0
        // };
    }
    

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                <button type="button" onClick={this.increment}>+</button>
                <button type="button" onClick={this.decrement}>-</button>
            </div>
        );
    }
}