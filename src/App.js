import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

const appStore = createStore(reducers, {}, applyMiddleware(thunk));

const App = _ => {
  // componentDidMount
  useEffect(() => {
    // console.log(`[DEBUG]<App> 'componentDidMount' event is fired`);
    var firebaseConfig = {
      apiKey: 'AIzaSyArkBzTS3vZbftAuDQTUoDO4c_re5UVFXk',
      authDomain: 'rn-employee-management.firebaseapp.com',
      databaseURL: 'https://rn-employee-management.firebaseio.com',
      projectId: 'rn-employee-management',
      storageBucket: '',
      messagingSenderId: '460944330860',
      appId: '1:460944330860:web:265fd4967f6a42b3',
    };
    // Initialize Firebase. This should be happened at once only
    this.fbaseApp = firebase.initializeApp(firebaseConfig);
  });
  return (
    <Provider store={appStore}>
      <View style={styles.mainViewStyle}>
        <Header title="Manager" />
        <LoginForm />
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
