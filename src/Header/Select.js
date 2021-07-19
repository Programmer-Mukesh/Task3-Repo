import React from "react";

const Select = ({ values }) => {
  const classDob = ["month", "dayYear", "dayYear"];
  return (
    <div>
      {values.map((x, index) => (
        <select className={classDob[index]} key={index}>
          <option value={x}>{x}</option>
        </select>
      ))}
    </div>
  );
};

export default Select;
