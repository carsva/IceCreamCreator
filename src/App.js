import React, {Component} from 'react';
import IceCream from './Components/IceCream';
import glass from './glass.svg';
import logo_glass from './logo_glass.svg';
import './App.css';

let iceCream = [];

  if(localStorage.iceCream) {
    let localIceCream = JSON.parse(localStorage.iceCream);
    iceCream = localIceCream;
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      iceCream: iceCream,
      background: '#ff9999'
    }
  }

componentdidMount() {
  document.querySelector('input[type="color"]').value = '#800000'
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

onColorPicker() {
console.log('yes')
  document.querySelector('.opener')
  .addEventListener('click',
  e => document.querySelector('.btn-invisible').click()
  );
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
      <div className="container-full">

        <img src={logo_glass} className="logo"/>
        {iceCreamMap}
        <form className="formwrapper" onSubmit={this.onSubmitHandler.bind(this)}>
          <input className="input-field" type="text" placeholder="Flavour" ref="flavour"/>
          <input className="input-field" type="text" placeholder="eg. with a salty experience" ref="nuts"/>
          <input className="input-field" type="text" placeholder="Price (dollar)" ref="price" /><br/>
          <input type="color" onChange={this.onChangeColor.bind(this)}
           ref="color" className="picker" value={this.state.background}/>
         <label onClick={() => document.querySelector('.picker').click()} className="opener" style={style}></label>
         <button className="bottom btn btn-primary">Create Ice cream</button>
        </form>
        <div className="formwrapper">

      <svg className="show" id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 572.04 889.7"><path style={style} class="cls-1" d="M842.32,550.27c-14.94,3.43-29.71,8.32-44.84,10-56.83,6.45-95.42-23.64-116.45-67.22-16.54-34.29,3.32-88,38-111.48,10.15-6.89,14.26-12.44,12.77-26.2C720.14,248.19,776,157.78,876.23,118.91c92.71-36,203.84-2.88,263.94,79.94,33.06,45.55,48.25,96.74,39.88,153.37-1.45,9.81,1.88,14.09,10.09,18.67,43.09,24,63.67,64,55.09,105.21s-49.31,76.44-95,81.75c-23.61,2.74-47,1.76-69.08-7.82-9.29-4-15.14-3.36-18.62,6.62-6.32,17.89-20.78,28.25-35.45,38.4-19,4.18-36.43,13.71-56.38,15.36-35.35,2.93-66.11-8.79-95.36-26.74l.22.2-3.93-3.9.21.21-3.92-3.9.22.2c-1-3.53-3.77-3.9-6.79-3.86-1.34-7.72-7.84-12.36-11.24-18.85-.9-3,.89-7.74-4.33-8-2.46-.14-4,1.95-3.76,4.73Z" transform="translate(-675.11 -104.5)"/><path className="kex" d="M1029.12,624.05c14.67-10.15,29.13-20.51,35.45-38.4,17.64-6.17,31.51,7.19,47.54,9.71,6.15,1,1.77,9.63-.07,14.49q-30.86,81.14-62,162.19Q1010.65,875,971.24,977.91c-2.92,7.64-5.08,15.91-15.07,16.28-11.08.4-11.73-9.49-14.21-16.61-42.51-122.06-84.62-244.26-127.5-366.19-4.65-13.19-2.88-18.81,11-21.68,6.83-1.41,14.26-4,18.88-10.44l-.26.19,8.09,3.31c3.4,6.49,9.9,11.13,11.24,18.85,1,3.59,3.3,4.73,6.79,3.86l-.22-.2c-.24,2.85,1.15,4.07,3.92,3.9l-.21-.21c0,2.64,1.42,3.82,3.93,3.9l-.22-.2c9.9,19,29.3,23.56,47.07,28.21C961.31,650.53,997.45,649.62,1029.12,624.05Z" transform="translate(-675.11 -104.5)"/>
      </svg>

      </div>
    </div>
    )
  }
}




export default App;
