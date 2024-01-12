import { useContext } from "react";
import { PortContext } from "../../Context";

const Card = ({ data }) => {

 return(
    <a className="cardProyContainer" href={data.linkPage}>
        <figure>
         <img src="" alt="" />
        </figure>
        <figure>
         <img src="" alt="" />
         <span>
            <h4>{data.title}</h4>
         </span>
         <span>
            {data.dev}
         </span>
        </figure>
    </a>
 );
};

export default Card; 
