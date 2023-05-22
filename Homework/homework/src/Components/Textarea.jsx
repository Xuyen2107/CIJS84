import React from "react";

const TextArea = (props) => {
   const { title, name, value, placeholder } = props;

   const formGroupTextStyle = {
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

   const textAreaStyle = {
      height: "100px",
      fontSize: "14px",
      borderRadius: "10px",
      padding: "10px",
      outline: "none",
      border: "none",
   };

   return (
      <div className="form__group-textarea" style={formGroupTextStyle}>
         <label className="form__label" style={labelStyle}>
            {title}:
         </label>
         <textarea
            className="form__textarea-address"
            name={name}
            value={value}
            placeholder={placeholder}
            required
            style={textAreaStyle}
         />
      </div>
   );
};
export default TextArea;
