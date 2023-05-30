import React from "react";
import Button from "../../Components/Button.jsx";
import CountHooks from "./Hook.js";

const Left = (props) => {
   const { number, onClick } = props;
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "2.0",
            padding: "20px 50px 10px 50px",
            border: "1px solid black",
         }}
      >
         <h3>Counter One: {number}</h3>
         <div style={{ display: "flex", gap: "5px" }}>
            <Button nameBtn="-" onClick={onClick} />
            <Button nameBtn="Reset" onClick={onClick}/>
            <Button nameBtn="+" onClick={onClick} />
         </div>
      </div>
   );
};

export default Left;
