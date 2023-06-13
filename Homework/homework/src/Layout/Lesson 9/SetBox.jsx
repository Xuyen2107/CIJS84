import React, { useContext } from "react";
import ThemeContext from "../ThemContext";

const SetBox = (props) => {
   const themeCtx = useContext(ThemeContext);
   const { content } = props;
   return (
      <div
         style={{
            width: 300,
            height: 200,
            backgroundColor: themeCtx.theme == "Light" ? "#fff" : "#333",
            border: "1px solid black",
            margin: 10,
         }}
      >
         <h2 style={{ color: themeCtx.theme != "Light" ? "#fff" : "#333" }}>{content}</h2>
      </div>
   );
};

export default SetBox;
