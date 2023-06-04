import React from "react";

const RadioInput = (props) => {
   const { title, name, checked, onChange, dataRadio, error } = props;

   const formGroupRadioStyle = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginBottom: "15px",
   };

   const labelStyle = {
      fontSize: "16px",
      fontWeight: "500",
   };

   const formRadio = {
      display: "flex",
      alignItems: "center",
      gap: "5px",
   };

   const errorStyle = {
      color: "red",
      fontSize: "14px",
      fontWeight: "400",
   };

   return (
      <div className="form__group-radio" style={formGroupRadioStyle}>
         <label className="form__label" style={labelStyle}>
            {title}:
         </label>
         {dataRadio.map((item, idx) => (
            <div key={idx} className="form__radio" style={formRadio}>
               <input
                  className="form__radio-input"
                  type="radio"
                  name={name}
                  value={item.key}
                  checked={item.key == checked}
                  onChange={onChange}
               />
               <label className="form__radio-label">{item.label}</label>
            </div>
         ))}
         <label className="form__error" style={errorStyle}>
            {error}
         </label>
      </div>
   );
};

export default RadioInput;
