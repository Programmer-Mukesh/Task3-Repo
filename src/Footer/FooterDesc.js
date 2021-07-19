import React from "react";
import { P1, P2, P3, footerLinks } from "./FooterConstant";

const FooterDesc = () => (
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

export default FooterDesc;
