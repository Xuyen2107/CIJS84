import React from "react";

const Select = (props) => {
   const { title, dataOption } = props;

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

   return (
      <div className="form__group-select" style={formGroupSelectStyle}>
         <label className="form__label" style={labelStyle}>
            {title}:
         </label>
         <select className="form__select" name={title} style={formSelect}>
            {dataOption.map((item, index) => (
               <option key={index} className="form__option" value={item.name}>
                  {item.name}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Select;
