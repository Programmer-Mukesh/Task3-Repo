import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaGooglePlusSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const Icons = () => {
  const icon = [
    <FaFacebookSquare />,
    <FaTwitterSquare />,
    <FaYoutube />,
    <FaGooglePlusSquare />,
    <FaPinterestSquare />,
  ];
  return (
    <div className="footerLogo">
      {icon.map((x, index) => (
        <div className="fab" key={index}>
          {x}
        </div>
      ))}
      <hr className="hr" />
    </div>
  );
};

export default Icons;
