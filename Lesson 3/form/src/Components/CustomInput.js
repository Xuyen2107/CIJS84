import React from "react";

const CustomInput = ({ title, classNameInput, type, name, placeholder }) => {
   return (
      <div className="form__group">
         <label className="form__label">{title}:</label>
         <input className={`form__input ${classNameInput}`} type={type} name={name} placeholder={placeholder} />
      </div>
   );
};

export default CustomInput;
