import React, { Component } from "react";
import "./Paint.scss";

export default class Paint extends Component {
  constructor() {
    super();

    this.state = {
      activeClass: "",
    };
  }
  componentDidMount() {
    this.animationDelay();
  }

  animationDelay = () => {
    setTimeout(() => {
      this.setState(() => ({ activeClass: "appearComponent" }));
    }, 400);
  };

  render() {
    const {
      data: { carImgPrice },
    } = this.props.totalData;
    return (
      <div className="Paint">
        <div>
          <img
            className={`carImg ${this.state.activeClass}`}
            alt="carImg"
            src={carImgPrice && carImgPrice.image.car}
          />
        </div>
      </div>
    );
  }
}
