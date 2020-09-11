import React from 'react';
import { Provider } from 'react-redux';

// import './src/config/ReactotronConfig';

import store from './src/store/index';

import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;