import React from "react";

export default class RealHunter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let path = { backgroundImage: `url(${this.props.path.path})` };
        let arrKilled = [];
        return (
            <figure className="title-name">
                <div className="real-hunter-img" style={path}></div>
                <figurecaption >
                    Name: {this.props.name}
                </figurecaption>
                <div className="killed-hare-block">
                    {
                        
                        [0, 0, 0].map((item, key) => {
                            return <div className="killed-hare" key={key}></div>
                        })
                    }
                </div>

            </figure >
        )
    }
}
