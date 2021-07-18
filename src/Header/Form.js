import React, { useState } from "react";
import ExistingUser from "./ExistingUser";
import FormDesc from "./FormDesc";
import NewUser from "./NewUser";

const Form = () => {
  const [showExistingUser, setshowExistingUser] = useState(false);
  const [showNewUser, setshowNewUser] = useState(true);

  const onClick1 = () => {
    if (setshowExistingUser(false)) {
      setshowNewUser(false);
      setshowExistingUser(true);
    } else {
      setshowNewUser(true);
      setshowExistingUser(false);
    }
  };

  const onClick2 = () => {
    if (setshowNewUser(false)) {
      setshowNewUser(true);
      setshowExistingUser(false);
    } else {
      setshowNewUser(false);
      setshowExistingUser(true);
    }
  };

  const Text = [
    "Are you new to Care.com?",
    "Yes",
    "No",
    "Enter your existing Care.com login information.",
  ];

  return (
    <div className="formTxt">
      <p>{Text[0]}</p>
      <button className="formButton yes" onClick={onClick1}>
        {Text[1]}
      </button>
      <button className="formButton no" onClick={onClick2}>
        {Text[2]}
      </button>
      <p>{Text[3]}</p>
      <form className="form" action="">
        {showNewUser ? <ExistingUser /> : null}
        {showExistingUser ? <NewUser /> : null}
        <FormDesc />
      </form>
    </div>
  );
};

export default Form;
