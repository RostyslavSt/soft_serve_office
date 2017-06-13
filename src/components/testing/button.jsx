import React from 'react';

export default class Butt extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [1, 2, 3]
    }
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem () {
    this.state.list.push(5);
    let newArr = this.state.list;
    this.setState({list: newArr});
  }

  render () {
    return (<div>
              <button onClick={this.addNewItem}>Click to Add</button>
             <div> 
               {this.state.list.map((item) => {
                 return (
                    <li>{item}</li>
               )})
             }
             </div>
            </div>

    );
  }
}
