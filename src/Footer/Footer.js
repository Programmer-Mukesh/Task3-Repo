import React from "react";
import Icons from "./Icons";
import "./Footer.css";
import FooterDesc from "./FooterDesc";

const Footer = () => (
  <footer className="footer">
    <div className="footerContent">
      <Icons />
      <FooterDesc />
    </div>
  </footer>
);

export default Footer;
