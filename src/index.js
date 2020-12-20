import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';// used for browser 
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider,useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase,isLoaded  } from 'react-redux-firebase';
import firebase from './config/fbConfig';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase}))), 
)
const rrfProps = {
  firebase,
  config:{ userProfile: 'users', useFirestoreForProfile: true }, // authentication data connected to users collection
  dispatch: store.dispatch,
  createFirestoreInstance,
}
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
