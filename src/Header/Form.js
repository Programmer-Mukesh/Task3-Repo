import React, { useState, useCallback } from "react";
import ExistingUser from "./ExistingUser";
import FormDesc from "./FormDesc";
import NewUser from "./NewUser";
import { FormText } from "./constant";

const Form = () => {
  const [IsLoggedin, setIsLoggedin] = useState(true);

  const onClick1 = useCallback(() => {
    setIsLoggedin(false);
  }, []);

  const onClick2 = useCallback(() => {
    setIsLoggedin(true);
  }, []);

  return (
    <div className="formTxt">
      <p>{FormText[0]}</p>
      <button className="formButton yes" onClick={onClick1}>
        {FormText[1]}
      </button>
      <button className="formButton no" onClick={onClick2}>
        {FormText[2]}
      </button>
      <p>{FormText[3]}</p>
      <form className="form" action="">
        {IsLoggedin ? <NewUser /> : <ExistingUser />}
        <FormDesc />
      </form>
    </div>
  );
};

export default Form;
