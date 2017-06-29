import React from "react";
import Hunter from "../hunter/hunter.jsx";
import RealHunter from "../hunter/real_hunter.jsx";
import { connect } from "react-redux";

class FormAddHunter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunters: this.props.hunters
        }
        this.storeChanged = this.storeChanged.bind(this);
    }

    // componentDidMount() {
    //     this.unsubscribe = this.props.store.subscribe(this.storeChanged);
    // }

    // componentWillUnmount() {
    //     this.unsubscribe();
    // }

    storeChanged() {
        console.log(this.props.store);
        this.setState({
            hunters: this.props.hunters
        });
    }

    render() {
        return (
            <section className="hunter-add-section">
                <div className="hunters-block">
                    {this.state.hunters.map((itemHunter, key) => {
                        return <RealHunter key={key} name={itemHunter.name} path={this.props.store.hunterLogoPath[key]} />
                    })}
                </div>
            </section>
        )
    }
}

export default connect(
    state => (
        {
            store: state,
            hunters: state.hunters
        }
    ),
    dispatch => ({})
)(FormAddHunter);