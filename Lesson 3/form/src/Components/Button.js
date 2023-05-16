import React from "react";

const Button = ({ type, nameBtn }) => {
   return (
      <button className="form__btn" type={type}>
         {nameBtn}
      </button>
   );
};

export default Button;
