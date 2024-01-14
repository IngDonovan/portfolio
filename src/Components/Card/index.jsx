import { useContext } from "react";
import { PortContext } from "../../Context";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <a className="cardContainer" href={data.linkPage}>
      <img src={data.image} alt={data.title} />
      <figure className="hoverProy">
        <span>
          <h4>{data.title}</h4>
        </span>
        <span>{data.dev}</span>
      </figure>
    </a>
  );
};

export default Card;
