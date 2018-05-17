import React, {Component} from 'react';
import IceCream from './Components/IceCream';
import Picker from './Components/Picker';
import './App.css';

// const iceCream = [
//   {
//     flavour: 'Chocolate',
//     nuts: 'Plenty of nuts',
//     price: 25,
//     palette: 'brown'
//   },
//   {
//     flavour: 'Vanilla',
//     nuts: 'No nuts',
//     price: 25,
//     palette: 'yellow'
//   },
//   {
//     flavour: 'Bubble-Gum',
//     nuts: 'No nuts',
//     price: 20,
//     palette: 'pink'
//   },
//   {
//     flavour: 'Pear',
//     nuts: 'Some nuts',
//     price: 25,
//     palette: 'green'
//   },
//   {
//     flavour: 'Orange dawn',
//     nuts: 'Crazy much nuts',
//     price: 23,
//     palette: 'orange'
//   }
//
// ];
//
// localStorage.iceCream = JSON.stringify(iceCream);

class App extends Component {
  constructor() {
    super();
    this.state = {
      iceCream: JSON.parse(localStorage.iceCream),
      background: 'white'
    }

  }

deleteIceCream(flavour) {
  let iceCream = this.state.iceCream;
  console.log(iceCream)
  let filteredIceCream = iceCream.filter(iceCream => {
    return iceCream.flavour !== flavour;
  })
  this.setState ({
    iceCream: filteredIceCream
  })
  localStorage.iceCream = JSON.stringify(filteredIceCream);
  console.log(JSON.parse(localStorage.iceCream))
}

onSubmitHandler(e) {
  e.preventDefault();

  let iceCream = this.state.iceCream;

  iceCream.push({
    flavour: this.refs.flavour.value,
    nuts: this.refs.nuts.value,
    price: this.refs.price.value,
    palette: this.refs.color.value
  })
  this.setState ({
    iceCream: iceCream
  })
  localStorage.iceCream = JSON.stringify(iceCream);
  console.log(localStorage.iceCream)
}

onChangeColor(color) {
console.log(color.hex)
this.setState ({
  background: color.hex

})

}

  render() {
    console.log(this.state)
    let iceCreamMap = this.state.iceCream.map(iceCream => {
      return (
        <IceCream
        flavour={iceCream.flavour}
        nuts={iceCream.nuts}
        price={iceCream.price}
        palette={iceCream.palette}
        deleteIceCream={this.deleteIceCream.bind(this)}
        key={iceCream.flavour}
        />
      )
    })



    return (
      <div className="App">
        {iceCreamMap}
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <input type="text" placeholder="Flavour" ref="flavour"/>
          <input type="text" placeholder="Nuts" ref="nuts"/>
          <input type="text" placeholder="Color" ref="color" value={this.state.background}/>
          <input type="text" placeholder="Price" ref="price"/>
          <button className="btn btn-primary">Create Ice cream</button>
        </form>
        <Picker onChangeColor={this.onChangeColor.bind(this)}/>
      </div>
    )
  }
}

export default App;
