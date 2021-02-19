import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
// proverka
const rootElement = document.getElementById("root");
window.store = store;
ReactDOM.render(
  <React.StrictMode>
    {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}
    <Provider store={store}>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
