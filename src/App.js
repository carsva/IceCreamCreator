import React, {Component} from 'react';
import './App.css';
import './index.css';
import Test from './Components/Test';

class App extends Component {

state = {
  rubbe: 'Hello and welcome'

}

nameChangeHandler = (event) => {
  console.log(event.target.value)
  this.setState({
    rubbe: event.target.value
  })

}


  render() {

    return (
      <div>
        <h1>{this.state.rubbe}</h1>
        <Test changed={this.nameChangeHandler}/>
      </div>

    )
  }
}

export default App;
