import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <h1>Đây là trang React</h1>

         <div>
            <Link to="/Lesson2">Lesson2</Link>
         </div>
         <div>
            <Link to="/Lesson3">Lesson3</Link>
         </div>
         <div>
            <Link to="/Lesson4">Lesson4</Link>
         </div>
         <div>
            <Link to="/Lesson5">Lesson5</Link>
         </div>
         <div>
            <Link to="/Lesson6">Lesson6</Link>
         </div>
         <div>
            <Link to="/Lesson7">Lesson7</Link>
         </div>
         <div>
            <Link to="/Lesson8">Lesson8</Link>
         </div>
         <div>
            <Link to="/Lesson9">Lesson9</Link>
         </div>
         <Outlet />
      </div>
   );
};

export default Home;
