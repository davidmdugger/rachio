import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

// components
import Test from "./containers/Test/Test";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}

export default App;
