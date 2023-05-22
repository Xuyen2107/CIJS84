import CardImage from "../../Components/CardImage.jsx";
import "./CardImage.css";

const Lesson4 = () => {
   return (
      <div className="row">
         <CardImage imageShow = {false} />
         <div className="row__title">
            <CardImage />
            <CardImage topTitle = "right" />
         </div>
      </div>
   );
};

export default Lesson4;
