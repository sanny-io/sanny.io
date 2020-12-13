import { Provider } from 'react-redux';
import App from './App';
import { CloudinaryContext } from 'cloudinary-react';
import store from './store';

export default function (props) {
  return (
    <Provider store={store} {...props}>
      <CloudinaryContext cloudName="sanny">
        <App />
      </CloudinaryContext>
    </Provider>
  );
}

export { default as Image } from './Image';
export { default as Icon } from './Icon';