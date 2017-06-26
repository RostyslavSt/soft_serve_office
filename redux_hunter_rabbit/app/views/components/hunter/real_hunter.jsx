import React from "react";

export default class RealHunter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let path = { backgroundImage: `url(${this.props.path})` };
        return (

            <figure className="title-name">
                <div className="real-hunter-img" style={path}></div>
                <figurecaption >
                    Name: {this.props.name}
                </figurecaption>
            </figure >
        )
    }
}
