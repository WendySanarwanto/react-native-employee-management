import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Header } from './components/common/Header';
import reducers from './reducers';

const appStore = createStore(reducers, applyMiddleware(thunk));

const App = props => {
  return (
    <Provider store={appStore}>
      <View style={styles.mainViewStyle}>
        <Header title="Manager" />
      </View>
    </Provider>
  );
};

const styles = {
  mainViewStyle: {
    flex: 1,
  },
};

export default App;
