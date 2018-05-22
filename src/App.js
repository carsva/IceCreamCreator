import React, {Component} from 'react';
import IceCream from './Components/IceCream';
import glass from './glass.svg';
import './App.css';




// let iceCream = [
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

// localStorage.iceCream = JSON.stringify(iceCream);
let iceCream = {};

  if(localStorage) {
    let localIceCream = JSON.parse(localStorage.iceCream);
    iceCream = localIceCream;

    // this.setState ({
    //   iceCream: localIceCream
    // })
  }




class App extends Component {
  constructor() {
    super();
    this.state = {
      iceCream: iceCream,
      background: []
    }

  }




deleteIceCream(flavour) {
  let iceCream = this.state.iceCream;

  let filteredIceCream = iceCream.filter(iceCream => {
    return iceCream.flavour !== flavour;
  })
  this.setState ({
    iceCream: filteredIceCream
  })
  localStorage.iceCream = JSON.stringify(filteredIceCream);

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

onChangeColor(e) {

this.setState({
  background: e.target.value
})

}




  render() {

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

    var style = {
         backgroundColor: this.state.background,
         fill: this.state.background
       };

    return (
      <div className="App">
        {iceCreamMap}
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <input type="text" placeholder="Flavour" ref="flavour"/>
          <input type="text" placeholder="Nuts" ref="nuts"/>
          <input type="text" placeholder="Price" ref="price"/>
          <input type="color" onChange={this.onChangeColor.bind(this)} ref="color" />
          <button className="btn btn-primary">Create Ice cream</button>
        </form>

        <svg className="show" id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.78 218.1"><path style={style} d="M121.43,236.55a192.5,192.5,0,0,0-30.78-78.38,194.51,194.51,0,0,0-26.37-31.12c-10.49-10.08-22.17-20-26.49-34.41l-1.44,1.9,182.81,1.72L218.1,93.7c-37.93,44.71-61.5,99.54-99.79,144-1.26,1.46.85,3.59,2.12,2.12,38.3-44.43,61.87-99.26,99.79-144a1.52,1.52,0,0,0-1.06-2.56L36.35,91.54a1.52,1.52,0,0,0-1.45,1.9c3.85,12.87,13.22,22.38,22.72,31.42,10.47,10,20.26,20.29,28.59,32.15a190.71,190.71,0,0,1,32.32,80.34c.3,1.9,3.19,1.09,2.9-.8Z" transform="translate(-34.84 -22.19)"/><path style={style} d="M50.81,91.8C38.48,81.65,38.62,63.52,47.37,51.1c9.8-13.92,26.65-20,42.79-22.65C123.23,22.93,163,21.59,191,43c15,11.46,28.22,32.81,16.6,51.1-1,1.63,1.56,3.14,2.59,1.51,10-15.67,2.95-34.48-8.65-47.08-11.92-13-28.74-20.6-45.82-23.89-20.57-4-42.23-2.58-62.84.39-17.43,2.5-35.6,8.31-46.8,22.78C35.59,61.37,34.6,82.32,48.68,93.92c1.48,1.22,3.62-.89,2.13-2.12Z" transform="translate(-34.84 -22.19)"/>
      </svg>

    </div>
    )
  }
}

export default App;
