import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import RootContainer from './src/features/Root/RootContainer.Screen';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
