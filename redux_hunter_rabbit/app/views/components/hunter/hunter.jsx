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
                        <div>I see the hare: x: {this.props.x} y: {this.props.y}</div>
                    </figurecaption>
                </figure>
            </div>
        )
    }
}