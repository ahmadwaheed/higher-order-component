//it is a functional component
import React from 'react';
import stylesWrapper from './../hoc/stylesWrapper';

const ButtonOne = (props) => {
  return(
    <button style={props.styles}> I am Button One </button>
  )
}

//to use HOC we need to wrap export with the HOC we built
export default stylesWrapper(ButtonOne);

// we are trying to achieve a disable button, when the button goes disable it
// should change the color and styling
