import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "normal",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        hi hello my name is {name} <br />
        children is {children} <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
