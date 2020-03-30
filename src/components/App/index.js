import React from 'react';
import './tailwind.build.css';
import { Provider } from 'react-redux';
import App from './App';
import classes from './App.styles';
import Styles from '../Styles';
import Responsive from '../Responsive';
import { CloudinaryContext } from 'cloudinary-react';
import store from './store';

export default function (props) {
  return (
    <Provider store={store} {...props}>
      <CloudinaryContext cloudName="sanny">
        <Responsive>
          <Styles classes={classes}>
            <App />
          </Styles>
        </Responsive>
      </CloudinaryContext>
    </Provider>
  );
}

export { default as Image } from './Image';