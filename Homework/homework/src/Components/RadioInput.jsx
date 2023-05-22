import React from "react";

const RadioInput = (props) => {
   const { title, name, dataRadio } = props;

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

   return (
      <div className="form__group-radio" style={formGroupRadioStyle}>
         <label className="form__label" style={labelStyle}>
            {title}:
         </label>
         {dataRadio.map((item, index) => (
            <div key={index} className="form__radio" style={formRadio}>
               <input
                  className="form__radio-input"
                  type="radio"
                  name={name}
                  value={item.label}
                  required
               />
               <label className="form__radio-label">{item.label}</label>
            </div>
         ))}
      </div>
   );
};

export default RadioInput;
