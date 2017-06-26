import React from "react";

export default class Hunter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hunter-item-container">
                <figure>
                    <div className="hunter-img"></div>
                    <figurecaption>
                        {this.props.name} said:
                        <div>I see the hare:</div>
                        <div className="hunter-watch">
                        <div>x: {this.props.x}</div>
                        <div>y: {this.props.y}</div>
                        </div>
                    </figurecaption>
                </figure>
            </div>
        )
    }
}