import "./Card.css";
const Card = (props) => {
   const { imageShow = true, topTitle = "top" } = props;
   return (
      <div>
         {topTitle === "top" && <h3>Nhân dân tệ xuống thấp nhất 5 tháng so với USD</h3>}
         <div className="row">
            {imageShow && (
               <div className="card-img">
                  <img
                     className="img"
                     src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
                     alt=""
                     width="200"
                     height="200"
                  ></img>
               </div>
            )}
            <div className="right">
               {topTitle !== "top" && <h3>Nhân dân tệ xuống thấp nhất 5 tháng so với USD</h3>}
               <p className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque architecto velit laboriosam ratione tempore nam possimus debitis temporibus dolores, voluptates labore
                  praesentium doloremque eaque reiciendis, quis cupiditate aliquam consequatur.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Card;
