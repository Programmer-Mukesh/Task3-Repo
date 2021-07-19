import React from "react";
import InputComponent from "./Input";
import Select from "./Select";
import {
  insideText1,
  insideText2,
  assignClass1,
  assignClass2,
  insideText,
  valueDob,
} from "./constant";

const ExistingUser = () => (
  <div className="hidden hiddenForm">
    <InputComponent
      addClass={assignClass1}
      type="text"
      placeholder={insideText1}
    />
    <div>
      <select className="items hiddenForm" name="Role">
        <option value="Role">Role</option>
      </select>
    </div>
    <InputComponent
      addClass={assignClass2}
      type="text"
      placeholder={insideText2}
    />
    <InputComponent
      addClass={assignClass2}
      type="text"
      placeholder={insideText}
    />
    <Select values={valueDob} />
  </div>
);

export default ExistingUser;
