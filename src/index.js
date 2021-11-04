//Third party dependencies
import React from 'react';
import ReactDom from 'react-dom';
//Provider es un componente, por eso empieza con mayúscula
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Own code
import App from './components/App';
import reducers from './reducers';

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
