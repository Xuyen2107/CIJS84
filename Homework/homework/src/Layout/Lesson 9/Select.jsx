import { useContext } from "react";
import Select from "../../Components/Select.jsx";
import ThemeContext from "../ThemContext.jsx";

const dataOption = [
   { key: "Light", name: "Light" },
   { key: "Dark", name: "Dark" },
];

const SelectTheme = () => {
   const themeCtx = useContext(ThemeContext);

   const onSelectTheme = (e) => {
      themeCtx.setTheme(e.target.value);
   };

   return (
      <div>
         <Select
            title="Theme"
            dataOption={dataOption}
            value={themeCtx.theme}
            onChange={(e) => {
               onSelectTheme(e);
            }}
         />
      </div>
   );
};

export default SelectTheme;
