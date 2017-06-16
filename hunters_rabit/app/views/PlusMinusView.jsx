import React from "react";

export default class PlusMinusView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         number: 0,
         sum: 0
      };
      this.storeChanged = this.storeChanged.bind(this);
      this.onChange = this.onChange.bind(this);
      this.add = this.add.bind(this);
      this.del = this.del.bind(this);
   }
   componentDidMount() {
      this.props.store.addView(this.storeChanged);
   }
   componentWillUnmount() {
      this.props.store.removeView(this.storeChanged);
   }
   storeChanged() {
      this.setState({
         sum: this.props.store.sum
      });
   }
   onChange(event) {
      this.setState({
         number: event.target.value
      });
   }
   add() {
      this.props.actions.add(this.state.number);
   }
   del() {
      this.props.actions.del(this.state.number);
   }
   render() {
      return (
         <form>
            <label>
               Number:
               <input type="number" name="number" value={this.state.number} onChange={this.onChange} />
            </label>
            <button type="button" onClick={this.add}>+</button>
            <button type="button" onClick={this.del}>-</button>
            <div>Sum: {this.state.sum}</div>
         </form>
      );
   }
}