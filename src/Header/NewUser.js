import React from "react";
import InputComponent from "./Input";
import Select from "./Select";
import { insideText, TextP, valueDob, assignClass } from "./constant";

const NewUser = () => (
  <div>
    <InputComponent
      addClass={assignClass}
      type="text"
      placeholder={insideText}
    />
    <div className="toggle">
      <p className="formContent">{TextP}</p>
      <input className="items" type="text" placeholder="Employee Id " />
      <div>
        <select className="items" name="Role">
          <option value="Role">Role</option>
        </select>
      </div>
    </div>
    <Select values={valueDob} />
  </div>
);

export default NewUser;
