import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

class Picker extends Component {
  state = {
     background: '#fff',
   };

   onChangeColor() {
     let {onChangeColor} = this.props;
     let newColor = this.state.background;
     console.log(newColor)
     onChangeColor(newColor);
   }

   handleChangeComplete = (color) => {
     let {onChangeColor} = this.props;
     this.setState({ background: color.hex });
     onChangeColor(color);
   };

   render() {
     console.log(this.state.background)

     return (
       <SketchPicker
         color={ this.state.background }
         onChangeComplete={ this.handleChangeComplete }
         onChangeColor={this.onChangeColor.bind(this)}
       />
     );
   }
 }
export default Picker;
