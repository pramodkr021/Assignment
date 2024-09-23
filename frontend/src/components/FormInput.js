import React from "react";

function FormInput(props) {
  return (
    <div>
      <label>{props.label}:</label>
      <input type={props.type} name={props.name} value={props.value} onChange={props.onChange}required />
    </div>
  );
}

export default FormInput;
