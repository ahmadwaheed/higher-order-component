import React from 'react';
import commonStyles from './../styles/commonStyles';


const translateProps = (props) => {

let _styles = {...commonStyles.default}

  if(props.disable) {
    _styles = {..._styles, ...commonStyles.disable};
  }
  const newProps = {...props, styles: _styles}
  //we take the 'props' (which is disable), translate it to some styles
  return newProps;
}


//thats how we can build higer order components
export default (WrappedComponent) => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  }
}
