import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCreators } from "./actions";

class Test extends Component {
  render() {
    const { onRequestDog } = this.props;

    return (
      <div>
        <h1>Test Component</h1>
        <button onClick={onRequestDog}>Get Users</button>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = state => ({
  fetching: state.dog.fetching
});

// map dispatch to props
const mapDispatchToProps = {
  onRequestDog: actionCreators.fetchDogStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
