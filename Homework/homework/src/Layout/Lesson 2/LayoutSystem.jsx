import Card from "../../Components/Card.jsx";
import { data } from "./Data.js";
import "./Card.css";

const Lesson2 = () => {
   return (
      <div>
         <div className="row">
            <h1 className="row__title">The Future of WYSIWYG</h1>
            <div className="grid">
               {data.map((item) => (
                  <Card title={item.title} image={item.image} description={item.description} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Lesson2;
