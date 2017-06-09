import React from 'react';


export default class MyArr extends React.Component {
  static propTypes = {
    arrMine : React.PropTypes.array
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div>
       {this.props.arrMine.map((item, index) => {
         return (
          <li key={index}>{item}</li>
        )
       })
       }
      </div>
    );
  }
}
