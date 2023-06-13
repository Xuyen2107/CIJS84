import ThemeContext from "../ThemContext";
import SetBox from "./SetBox";
import SelectTheme from "./Select";
import { useState } from "react";

const Lesson9 = () => {
   const [theme, setTheme] = useState("Light");

   return (
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
         <div>
            <SetBox content="Component A" />
            <SetBox content="Component B" />
            <SetBox content="Component C" />
         </div>
         <SelectTheme />
      </ThemeContext.Provider>
   );
};

export default Lesson9;
