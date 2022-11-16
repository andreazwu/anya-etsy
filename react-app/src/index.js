import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import * as sessionActions from "./store/session";
import { ModalProvider } from "./context/Modal";
// import { restoreCSRF, csrfFetch } from "./store/csrf";


const store = configureStore();

// for browser to show state changes:
if (process.env.NODE_ENV !== "production") {
  // restoreCSRF();
  // window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
