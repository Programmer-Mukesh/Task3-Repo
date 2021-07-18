import React from "react";
import { Para1, Para2, Para3, Para4, Para5, Para6, Para7 } from "./constant";

const FormDesc = () => {
  return (
    <div>
      <p className="bgColorText">
        {Para1}
        <span>{Para2}</span>
        {Para3}
        <span>{Para4}</span>.
      </p>
      <p className="bgColorText">
        {Para5} <span>{Para6}</span>.
      </p>
      <p className="bgColorText">{Para7}</p>
      <button className="submitBtn">Submit</button>
    </div>
  );
};

export default FormDesc;
