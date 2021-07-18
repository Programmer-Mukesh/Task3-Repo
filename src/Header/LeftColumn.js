import React from "react";

const LeftColumn = () => {
  const P1 = [
    "Enroll",
    "The right care could",
    "be right around the",
    "corner!",
  ];

  return (
    <div className="leftText">
      <p className="boldPara">{P1[0]}</p>
      <span>{P1[1]}</span>
      <br />
      <span>{P1[2]}</span>
      <br />
      <span>{P1[3]}</span>
    </div>
  );
};

export default LeftColumn;
