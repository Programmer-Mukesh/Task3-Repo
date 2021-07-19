import React from "react";
import { LeftSideText } from "./constant";

const LeftColumn = () => (
  <div className="leftText">
    <p className="boldPara">{LeftSideText[0]}</p>
    <span>{LeftSideText[1]}</span>
    <br />
    <span>{LeftSideText[2]}</span>
    <br />
    <span>{LeftSideText[3]}</span>
  </div>
);

export default LeftColumn;
