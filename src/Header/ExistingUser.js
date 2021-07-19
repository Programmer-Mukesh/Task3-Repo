import React from "react";
import InputComponent from "./Input";
import Select from "./Select";

const ExistingUser = () => {
  const insideText1 = ["Employee ID ", "First Name", "Last Name"];
  const insideText2 = ["Address ", "Zip"];
  const assignClass1 = "items hiddenForm";
  const assignClass2 = "items";
  const insideText = ["Email () ", "Password"];
  const valueDob = ["Birth Month", "Day", "Year"];

  return (
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
};

export default ExistingUser;
