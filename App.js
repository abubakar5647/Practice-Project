import React from 'react';
import {Provider} from 'react-redux';
import ReduxNavigator from './ReduxToolkitApp/ReduxNavigator';
import Store from './ReduxToolkitApp/src/Redux/Store';
import AppNavigator from './Firebase/src/AppNavigator';

const App = () => {
  return (
    <Provider store={Store}>
      <ReduxNavigator />
      {/* <AppNavigator /> */}
    </Provider>
  );
};

export default App;
