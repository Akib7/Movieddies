import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ToggleColorModeProvider from "./utils/ToggleColorMode";

import App from "./component/App";
import store from "./app/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      //store == store; we'll have access to the store in every single component
      <ToggleColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
