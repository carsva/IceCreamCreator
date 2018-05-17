import React, {Component} from 'react';

class IceCream extends Component {

deleteIceCream(iceCream) {
const {deleteIceCream, flavour} = this.props;
deleteIceCream(flavour);
}


  render() {


const {palette, flavour, price, nuts} = this.props;

var style = {
     backgroundColor: palette,
     color: 'white',
     margin: "0px",
     height: '30px'
   };

    return (
      <div style={style}>
        Im delicous {flavour} flavour with {nuts} and i cost {price} kr
        <button className="btn btn-primary" onClick={this.deleteIceCream.bind(this)}>Cancel order</button>
      </div>
    )

  }


}

export default IceCream;
