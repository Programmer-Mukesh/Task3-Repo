import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

const Icons = () => (
  <div className="footerLogo">
    <div className="fab">
      <FaFacebookSquare />
    </div>
    <div className="fab">
      <FaTwitterSquare />
    </div>
    <div className="fab">
      <FaYoutube />
    </div>
    <div className="fab">
      <FaGooglePlusSquare />
    </div>
    <div className="fab">
      <FaPinterestSquare />
    </div>
    <hr className="hr" />
  </div>
);

export default Icons;
