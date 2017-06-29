import React from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-inverse change-bootstrap">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">HUNTING</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/intro">Intro</Link></li>
                        <li><Link to="/main">Main</Link></li>
                        <li><Link to="/form">Hunters</Link></li>

                    </ul>
                </div>
            </nav>
        )
    }
}