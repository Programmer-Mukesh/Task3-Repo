import React from "react";

const InputComponent = ({ addClass, type, placeholder }) => (
  <div>
    {placeholder.map((x, index) => (
      <input className={addClass} type={type} placeholder={x} key={index} />
    ))}
  </div>
);

export default InputComponent;
