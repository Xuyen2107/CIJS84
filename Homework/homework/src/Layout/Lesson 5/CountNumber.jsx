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
         alert("Đến 0 dừng rồi nhé");
      } else {
         setNumber((prev) => prev - 1);
      }
   };

   const [number1, setNumber1] = useState(1);
   const light = () => {
      setNumber1((pre) => (pre === 3 ? 1 : pre + 1));
   };
   console.log(number1);
   return (
      <>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "20px",
               alignItems: "center",
               margin: "50px auto",
            }}
         >
            <label style={{ fontSize: "20px" }}>{number}</label>
            <div style={{ display: "flex", gap: "10px" }}>
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
            <div
               style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  padding: "20px",
                  backgroundColor: "black",
                  borderRadius: "45px",
               }}
            >
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
