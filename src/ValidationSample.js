import React, { Component } from "react";
import "./ValidationSampe.css";
class ValidationSample extends Component {
  //input;
  state = {
    password: "",
    validated: false,
    clicked: false,
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleClickValidation = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleClickValidation}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
