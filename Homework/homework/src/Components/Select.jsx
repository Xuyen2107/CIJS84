import React from "react";

const Select = (props) => {
   const { title, value, onChange, optionDisabled, dataOption, error } = props;

   const formGroupSelectStyle = {
      display: "flex",
      flexDirection: "column",
      lineHeight: "1.5",
      width: "100%",
      marginBottom: "15px",
   };

   const labelStyle = {
      fontSize: "16px",
      fontWeight: "500",
   };

   const formSelect = {
      padding: "5px 10px",
      outline: "none",
   };

   const errorStyle = {
      color: "red",
      fontSize: "14px",
      fontWeight: "400",
   };

   return (
      <div className="form__group-select" style={formGroupSelectStyle}>
         <label className="form__label" style={labelStyle}>
            {title}:
         </label>
         <select
            className="form__select"
            name={title}
            value={value}
            onChange={onChange}
            style={formSelect}
         >
            <option value="" disabled>{optionDisabled}</option>
            {dataOption.map((item) => (
               <option key={item.key} className="form__option" value={item.label}>
                  {item.name}
               </option>
            ))}
         </select>
         <label className="form__error" style={errorStyle}>
            {error}
         </label>
      </div>
   );
};

export default Select;
