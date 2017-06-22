import React from "react";

export default class Forest extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="forest-img">
                {this.props.children}
            </div>
        )
    }
}