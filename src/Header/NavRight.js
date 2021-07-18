import React from "react";
import UsLogo from "./flag.png";

const NavRight = () => {
  const P1 = "Contact us | Change country";
  return (
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
};

export default NavRight;
