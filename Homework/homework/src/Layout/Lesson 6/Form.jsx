import React from "react";
import CustomInput from "../../Components/CustomInput.jsx";
import Button from "../../Components/Button.jsx";

const Form = (props) => {
   const {} = props;
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            border: "1px solid black",
         }}
      >
         <div
            style={{
               width: "100%",
               height: "50px",
               backgroundColor: "white",
               marginBottom: "10px",
               border: "1px solid black",
            }}
         ></div>
         <CustomInput title="Name" type="text" />
         <CustomInput title="Occupation" type="text" />
         <Button nameBtn="Submit" />
      </div>
   );
};

export default Form;
