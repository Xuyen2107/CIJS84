import React from "react";
import Button from "../../Components/Button.jsx";

const Right = (props) => {
   const { number } = props;
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
         <h3>Counter Two: {number}</h3>
         <div style={{ display: "flex", gap: "5px" }}>
            <Button nameBtn="-" />
            <Button nameBtn="Reset" />
            <Button nameBtn="+" />
         </div>
      </div>
   );
};

export default Right;
