import React from "react";
const Input = ({name, type, placeholder}) => {
   return (
      <div className="form__area">
         <label className="form__label">{name}</label>
         <input className="form_input" type={type} placeholder={placeholder}></input>
      </div>
   );
};

export default Input;
