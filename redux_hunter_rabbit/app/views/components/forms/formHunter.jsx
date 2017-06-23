import React from "react";
// import 


export default class FormAddHunter extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     hunters: this.props.store.getState().hunters,
        //     name: ""
        // }
        // this.addNewHunter = this.addNewHunter.bind(this);
        // this.storeChanged = this.storeChanged.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <section>
                <form>
                    <label>
                        Hunter's Name
                        <input type="text" name="nameHunter" value={this.props.name} onChange={this.onChange} />
                    </label>
                </form>
                <button onClick={this.addNewHunter}>add hunter</button>
            </section>
        )
    }
}