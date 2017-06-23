import React from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">HUNTING</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Main</Link></li>
                        <li><Link to="/form">Add Hunter</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}