import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DB_URL, 
  FIREBASE_PROJECT_ID, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } from 'react-native-dotenv';
import reducers from './reducers';
import Router from './Router';

const appStore = createStore(reducers, {}, applyMiddleware(thunk));

const App = _ => {
  // componentDidMount
  useEffect(() => {
    // console.log(`[DEBUG]<App> 'componentDidMount' event is fired`);
    var firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: '',
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
      appId: FIREBASE_APP_ID,
    };
    // Initialize Firebase. This should be happened at once only
    firebase.initializeApp(firebaseConfig);
  });
  return (
    <Provider store={appStore}>
      <View style={styles.mainViewStyle}>
        <Router />
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
