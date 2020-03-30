import React from 'react';

export default function Responsive({ children, ...rest }) {
  return React.Children.map(children, child => React.cloneElement(child, { ...rest }));
}