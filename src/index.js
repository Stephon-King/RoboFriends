import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import CardList from './CardList';  will be modifying this to app.js father of all our components
import App from "./containers/App";
import "tachyons";
ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <CardList robots={robots}/> changed this to App*/}
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
