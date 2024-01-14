import { useContext } from "react";
import { PortContext } from "../../Context";
import "./Card.scss";

const Card = ({ data }) => {
   const iconosdev = data.dev;
   const icoDev = iconosdev.map((ico) => {
      return (
         <img className="devIco" src={ico} alt='icono' />
      );
   });

  return (
    <a className="cardContainer" href={data.linkPage}>
      <img src={data.image} alt={data.title} />
      <figure className="hoverProy">
        <span>
          <p>{data.title}</p>
        </span>
        <span>{icoDev}</span>
      </figure>
    </a>
  );
};

export default Card;
