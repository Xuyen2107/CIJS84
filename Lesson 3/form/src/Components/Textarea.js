import React from "react";

const TextArea = ({ title, name, placeholder }) => {
   return (
      <div className="form__group-textarea">
         <label className="form__label">{title}:</label>
         <textarea className="form__textarea-address" name={name} placeholder={placeholder} required />
      </div>
   );
};
export default TextArea;
