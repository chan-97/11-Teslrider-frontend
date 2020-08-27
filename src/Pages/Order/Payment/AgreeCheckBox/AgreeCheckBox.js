import React, { Component } from "react";

export default class AgreeCheckBox extends Component {
  render() {
    const { text } = this.props;
    return (
      <label className="wrapAgreeCheckBox">
        <input type="checkbox" className="agreeCheckBox" />
        {text}
      </label>
    );
  }
}
