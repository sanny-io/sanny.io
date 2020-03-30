import React from 'react';
import { withStyles } from '@material-ui/styles';

export default function Styles({ classes, children, ...rest }) {
  const StyledComponent = withStyles(classes)(props => {
    return React.Children.map(children, child => React.cloneElement(child, props));
  });

  return <StyledComponent {...rest} />
}