import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";
// proverka
const rootElement = document.getElementById("root");
window.store = store;
ReactDOM.render(
  <React.StrictMode>
    {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </React.StrictMode>,
  rootElement
);
