import React from "react";
import Hunter from "../hunter/hunter.jsx";
import RealHunter from "../hunter/real_hunter.jsx"

export default class FormAddHunter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunters: this.props.store.getState().hunters
        }
        this.storeChanged = this.storeChanged.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(this.storeChanged);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    storeChanged() {
        console.log(this.props.store.getState());
        this.setState({
            hunters: this.props.store.getState().hunters
        });
    }

    render() {
        return (
            <section className="hunter-add-section">
                <div className="hunters-block">
                    {this.state.hunters.map((itemHunter, key) => {
                        return <RealHunter key={key} name={itemHunter.name} path={this.props.store.getState().hunterLogoPath[key]} />
                    })}
                </div>
            </section>
        )
    }
}