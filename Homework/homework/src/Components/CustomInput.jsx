import React from "react";

const CustomInput = (prop) => {
   const { title, classNameInput, type, name, placeholder, value, onChange, error } = prop;

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
      border: "1px solid black",
   };

   const errorStyle = {
      color: "red",
      fontSize: "14px",
      fontWeight: "400",
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
            onChange={onChange}
            placeholder={placeholder}
            style={inputStye}
         />
         {error && (
            <label className="form__error" style={errorStyle}>
               {error}
            </label>
         )}
      </div>
   );
};

export default CustomInput;
