import React, { Component } from "react";
import { connect } from "react-redux";

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test Area</h1>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(
  mapStateToProps,
  {}
)(TestComponent);
