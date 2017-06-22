import React from "react";

export default class Rabbit extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="hare" style={{top: this.props.x, left: this.props.y}}>
                <div className="hare-img">

                </div>
            </div>
        )
    }
}