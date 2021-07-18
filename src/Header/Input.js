import React from "react";

const Input = ({ classN, type, placeholder }) => (
  <div>
    {placeholder.map((x, index) => (
      <input className={classN} type={type} placeholder={x} key={index} />
    ))}
  </div>
);

export default Input;
