import React from 'react';
import stylesWrapper from './../hoc/stylesWrapper';

const ButtonTwo = (props) => {
    return(
      <button style={props.styles}>I am Button Two</button>
    );
}

export default stylesWrapper(ButtonTwo);
