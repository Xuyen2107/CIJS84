import { Route, Routes } from "react-router-dom";
import Lesson2 from "../Lesson 2/LayoutSystem.jsx";
import Lesson3 from "../Lesson 3/FormRegister.jsx";
import Lesson4 from "../Lesson 4/ImageShow.jsx";
import Lesson5 from "../Lesson 5/CountNumber.jsx";
import Lesson6 from "../Lesson 6/CustomCount.jsx";
import Lesson7 from "../Lesson 7/FormList.jsx";
import Lesson8 from "../Lesson 8/LoadSelect.jsx";
import Lesson9 from "../Lesson 9/Lesson9";
import Home from "./Home.jsx";

const Navigate = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />}>
            <Route path="/Lesson2" element={<Lesson2 />}></Route>
            {/* <Route path="/Lesson3" element={<Lesson3 />}></Route>
            <Route path="/Lesson4" element={<Lesson4 />}></Route>
            <Route path="/Lesson5" element={<Lesson5 />}></Route>
            <Route path="/Lesson6" element={<Lesson6 />}></Route>
            <Route path="/Lesson7" element={<Lesson7 />}></Route>
            <Route path="/Lesson8" element={<Lesson8 />}></Route>
            <Route path="/Lesson9" element={<Lesson9 />}></Route> */}
         </Route>
      </Routes>
   );
};

export default Navigate;
