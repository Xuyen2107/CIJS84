import React from "react";
import { useState } from "react";
import Button from "../../Components/Button.jsx";

const Lesson5 = () => {
   const [number, setNumber] = useState(0);
   const actAdd = () => {
      setNumber((prev) => prev + 1);
   };

   const actRemove = (e) => {
      if (number <= 0) {
         e.preventDefault();
      } else {
         setNumber((prev) => prev - 1);
      }
   };

   const [number1, setNumber1] = useState(1);
   const light = () => {
      setNumber1((prev) => prev + 1);
      if (number1 === 3) {
         setNumber1(1);
      }
   };
   return (
      <>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               margin: "0 auto",
            }}
         >
            <label>{number}</label>
            <div>
               <Button nameBtn="+" onClick={actAdd} />
               <Button nameBtn="-" onClick={actRemove} />
            </div>
         </div>

         <div
            style={{
               margin: "0 auto",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               marginTop: "50px",
            }}
         >
            <Button nameBtn="Next" onClick={light} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
               <span
                  style={{
                     display: "block",
                     width: "50px",
                     height: "50px",
                     borderRadius: "50%",
                     backgroundColor: number1 === 1 ? "red" : "gray",
                  }}
               ></span>
               <span
                  style={{
                     display: "block",
                     width: "50px",
                     height: "50px",
                     borderRadius: "50%",
                     backgroundColor: number1 === 2 ? "yellow" : "gray",
                  }}
               ></span>
               <span
                  style={{
                     display: "block",
                     width: "50px",
                     height: "50px",
                     borderRadius: "50%",
                     backgroundColor: number1 === 3 ? "green" : "gray",
                  }}
               ></span>
            </div>
         </div>
      </>
   );
};

export default Lesson5;
