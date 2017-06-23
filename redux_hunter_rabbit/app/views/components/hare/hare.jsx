import React from "react";

export default class Hare extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="hare" style={{top: this.props.x, left: this.props.y}} onClick={this.props.move}>
                <div className="hare-img">

                </div>
            </div>
        )
    }
}