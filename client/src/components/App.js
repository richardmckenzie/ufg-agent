import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div> 
        <h1>hi</h1>
      </div>
    );
  }
}

export default connect(null, actions)(App);