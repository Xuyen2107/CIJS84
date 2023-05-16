import React from "react";

const Select = ({ title, dataOption }) => {
   return (
      <div className="form__group-select">
         <label className="form__label">{title}:</label>
         <select className="form__select" name={title}>
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
