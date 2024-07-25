import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import rootReducers from "./components/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { loadState, saveState } from "./components/reducers/localStorage.js";
const persistedState = loadState();
const store = createStore(rootReducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
