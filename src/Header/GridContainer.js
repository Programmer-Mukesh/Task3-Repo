import React from "react";
import Form from "./Form";
import LeftColumn from "./LeftColumn";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const GridContainer = () => (
  <div className="gridContainer">
    <NavLeft />
    <NavRight />
    <LeftColumn />
    <Form />
  </div>
);

export default GridContainer;
