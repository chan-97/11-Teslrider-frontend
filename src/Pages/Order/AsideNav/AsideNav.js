import React, { Component } from "react";
import "./AsideNav.scss";
import ChoiceCar from "./ChoiceCar/ChoiceCar";
import ChoiceColor from "./ChoiceColor/ChoiceColor";
import ChoiceInterior from "./ChoiceInterior/ChoiceInterior";
import ChoiceAutopilot from "./ChoiceAutopilot/ChoiceAutopilot";
import ChoicePayment from "./ChoicePayment/ChoicePayment";

export default class AsideNav extends Component {
  render() {
    return (
      <aside className="AsideNav">
        <div className="wrapDescription">
          {/* <ChoiceCar /> */}
          {/* <ChoiceColor /> */}
          {/* <ChoiceInterior /> */}
          {/* <ChoiceAutopilot /> */}
          <ChoicePayment />
        </div>
      </aside>
    );
  }
}
