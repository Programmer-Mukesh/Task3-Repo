import React from "react";
import UsLogo from "./flag.png";
import { P1 } from "./constant";

const NavRight = () => (
  <div className=" rightNav">
    <p>
      {P1}
      <span>
        <img className="usLogo" src={UsLogo} alt="usFlag" />
      </span>
      <span className="rotateArrow"> › </span>
    </p>
    <button className="btnHead">Log in</button>
  </div>
);

export default NavRight;
