import React from "react";
import CustomInput from "../../Components/CustomInput.jsx";
import Button from "../../Components/Button.jsx";
import CountHooks from "./Hook.js";

const Lesson6 = () => {
   const { number, onClickUp, onClickDown, onClickReset, onChange, submit, user2 } = CountHooks();
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "2.0",
            width: "auto",
            margin: "0 auto",
         }}
      >
         <h1>React Custom Hooks</h1>
         <div>
            <div
               style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "10px",
               }}
            >
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
                     <Button nameBtn="-" onClick={onClickDown} />
                     <Button nameBtn="Reset" onClick={onClickReset} />
                     <Button nameBtn="+" onClick={onClickUp} />
                  </div>
               </div>
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
                  <h3>Counter Two: {number + 10}</h3>
                  <div style={{ display: "flex", gap: "5px" }}>
                     <Button nameBtn="-" onClick={onClickDown} />
                     <Button nameBtn="Reset" onClick={onClickReset} />
                     <Button nameBtn="+" onClick={onClickUp} />
                  </div>
               </div>
            </div>
            <div>
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     padding: "10px",
                     border: "1px solid black",
                  }}
               >
                  {!Object.values(user2).every((values) => values === "") && (
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "column",
                           width: "100%",
                           padding: "10px",
                           backgroundColor: "white",
                           marginBottom: "10px",
                           border: "1px solid black",
                        }}
                     >
                        <span>Name: {user2.Name}</span>
                        <span>Occupation: {user2.Occupation}</span>
                     </div>
                  )}

                  <CustomInput title="Name" type="text" onChange={(e) => onChange(e, "Name")} />
                  <CustomInput
                     title="Occupation"
                     type="text"
                     onChange={(e) => onChange(e, "Occupation")}
                  />
                  <Button nameBtn="Submit" onClick={submit} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Lesson6;
