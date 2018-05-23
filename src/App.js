import React, {Component} from 'react';
import IceCream from './Components/IceCream';
import glass from './glass.svg';
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
        <img src="logo.png" className="logo"/>
        {iceCreamMap}
        <form className="formwrapper" onSubmit={this.onSubmitHandler.bind(this)}>
          <input type="text" placeholder="Flavour" ref="flavour"/>
          <input type="text" placeholder="What kinda nuts?" ref="nuts"/>
          <input className="text" type="text" placeholder="Price (kr)" ref="price" />
          <input type="color" onChange={this.onChangeColor.bind(this)} ref="color" value={this.state.background}/>
          <br /><button className="bottom btn btn-primary">Create Ice cream</button>
        </form>
        <div className="formwrapper">
        <svg className="show" id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.82 214.94"><path className="kex" d="M120,237A190.07,190.07,0,0,0,65.45,130.27C54.05,119.1,40.61,108.42,36.35,93l182.81,1.72c-37.95,44.46-61.49,99.81-99.79,144" transform="translate(-36.35 -23.79)"/>
        <path style={style} d="M49.74,92.86c-9.86-7.65-12.55-22.31-8.19-34s14.61-20.47,26-25.55,24-6.88,36.38-8.1c18-1.78,36.44-2.45,54.15,1.43S192.94,39.35,204,53.72a44.84,44.84,0,0,1,9.15,19.92c1.18,7.29-.06,15.1-4.22,21.2" transform="translate(-36.35 -23.79)"/>
      </svg>
      </div>
    </div>
    )
  }
}




export default App;
