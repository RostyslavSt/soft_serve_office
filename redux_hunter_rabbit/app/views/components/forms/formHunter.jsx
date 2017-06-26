import React from "react";
import Hunter from "../hunter/hunter.jsx";
import RealHunter from "../hunter/real_hunter.jsx"

export default class FormAddHunter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunters: this.props.store.getState().hunters,
            name2: ""
        }
        this.addNewHunter = this.addNewHunter.bind(this);
        this.storeChanged = this.storeChanged.bind(this);
        this.onChange = this.onChange.bind(this);
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

    addNewHunter() {
        this.props.actions.addHunter(this.state.name);
        this.state.name2 = "";
    }

    onChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <section className="hunter-add-section">
                <form className="hunter-add-form">
                    <label className="form-input">
                        Hunter's Name
                        <input type="text" name="nameHunter" value={this.props.name} onChange={this.onChange} />
                    </label>
                     <button onClick={this.addNewHunter}>add hunter</button>
                </form>
               
                <div className="hunters-block">
                    {this.state.hunters.map((itemHunter, key) => {
                        return <RealHunter key={key} name={itemHunter.name} path={this.props.store.getState().hunterLogoPath[key]}/>
                    })}
                </div>



            </section>
        )
    }
}