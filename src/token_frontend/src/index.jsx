import { token_backend } from "../../declarations/token_backend";

import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";

const init = async () => { 
  ReactDOM.render(<App />, document.getElementById("root"));
}

init();
