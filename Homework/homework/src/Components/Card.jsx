const Card = (props) => {
   const { image, title, description } = props;
   return (
      <div className="grid__colum">
         <span className="grid__top">
            <img
               className="grid__img"
               width="40"
               height="40"
               src={image}
               data-src={image}
               alt={title}
            />
         </span>
         <span className="grid__bottom">
            <p class="grid__title">{title}</p>
            <p class="grid__description">{description}</p>
         </span>
      </div>
   );
};

export default Card;
