import React from "react";

const CustomInput = (prop) => {
   const { title, classNameInput, type, name, placeholder, value } = prop;

   const formGroupStyle = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      lineHeight: "1.5",
      marginBottom: "15px",
   };

   const labelStyle = {
      fontSize: "16px",
      fontWeight: "500",
   };

   const inputStye = {
      padding: "10px",
      fontSize: "14px",
      borderRadius: "10px",
      outline: "none",
      border: "none",
   };

   return (
      <div className="form__group" style={formGroupStyle}>
         <label className="form__label" style={labelStyle}>
            {title}:
         </label>
         <input
            className={classNameInput}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required
            style={inputStye}
         />
      </div>
   );
};

export default CustomInput;
