import React from "react";
import { MaterialUIFormSubmit } from "./components/MaterialUIFormSubmit";

function FormInput() {
  return (
    <div className="App">
      <MaterialUIFormSubmit
        formName="Sample Form Submit"
        formDescription="This is sample form using Material UI."
      />
    </div>
  );
}

export default FormInput;
