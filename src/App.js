import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

// components
import Layout from "./containers";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
