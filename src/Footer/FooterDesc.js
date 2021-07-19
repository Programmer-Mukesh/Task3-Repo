import React from "react";
import { P1, P2, P3 } from "./FooterConstant";

const FooterDesc = () => {
  const footerLinks = [
    "About us",
    "Terms of use",
    "For Business",
    "Privacy Policy",
  ];
  return (
    <div>
      <div className="aboutUs">
        {footerLinks.map((x, index) => (
          <p className="bgColorText" key={index}>
            {x}
          </p>
        ))}
      </div>
      <div className="footerParagraph">
        <p className="fParagraph">{P1}</p>
        <br />
        <p className="fParagraph">{P2}</p>
        <br />
        <p className="fParagraph">{P3}</p>
      </div>
    </div>
  );
};

export default FooterDesc;
