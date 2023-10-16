import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./store/Store";
import BookProvider from "./store/BookProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BookProvider>
        <App />
      </BookProvider>
    </Provider>
  </React.StrictMode>
);
