import React from 'react';

const test = (props) => {
console.log(props.changed.value)
return (
      <div>
        <input type="text" onChange={props.changed}/>
    </div>
    )
};

export default test;
