import React from "react";

const RadioInput = ({ title, name, dataRadio }) => {
   return (
      <div className="form__group-radio">
         <label className="form__label">{title}:</label>
         {dataRadio.map((item, index) => (
            <div key={index} className="form__radio">
               <label className="form__radio-label">{item.label}</label>
               <input className="form__radio-input" type="radio" name={name} value={item.label} required/>
            </div>
         ))}
      </div>
   );
};

export default RadioInput;
