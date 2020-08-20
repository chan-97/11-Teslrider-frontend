import React, { Component } from "react";
import "./Battery.scss";

export default class Battery extends Component {
  render() {
    return (
      <div className="Battery">
        <div>
          <img
            className="carImg"
            alt="carImg"
            src="https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PPSW,$MTS03&view=STUD_3QTR_V2&model=ms&size=1441&bkba_opt=1&version=v0028d202008130539&version=v0028d202008130539}"
          />
        </div>
        <div className="carDescription">
          <ul>
            <li>
              <span className="carDescriptiontopText">487Km</span>
              <span className="carDescriptionbottomText">주행 가능 거리</span>
            </li>
            <li>
              <span className="carDescriptiontopText">250Km/h</span>
              <span className="carDescriptionbottomText">최고속도</span>
            </li>
            <li>
              <span className="carDescriptiontopText">3.8초</span>
              <span className="carDescriptionbottomText">
                0-100km/h 도달시간
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}