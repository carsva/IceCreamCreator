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
   };

    return (
      <div className="wrapper" style={style}>
        <div className="textdiv"><p>Im the delicous {flavour} flavour with {nuts} and i cost {price} kr</p></div>
        <div className="knappdiv"><button className="btn btn-info" onClick={this.deleteIceCream.bind(this)}>Cancel order</button></div>
    </div>
    )

  }


}

export default IceCream;
