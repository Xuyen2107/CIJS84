import React from "react";

const Button = (props) => {
   const { type, nameBtn, onClick } = props;

   const buttonStyle = {
      border: "none",
      outline: "none",
      backgroundColor: "blueViolet",
      fontWeight: "500",
      fontSize: "16px",
      padding: "10px 20px",
      borderRadius: "10px",
      cursor: "pointer",
   };

   return (
      <button className="form__btn" type={type} onClick={onClick} style={buttonStyle}>
         {nameBtn}
      </button>
   );
};

export default Button;
