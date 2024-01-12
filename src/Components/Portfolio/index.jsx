import { useContext } from "react";
import { PortContext } from "../../Context";
import Card from "../Card";
import "./Portfolio.scss";

const Portfolio = () => {

    const {
        listProyects,
    } = useContext(PortContext);

    const renderView = () => {
        return (
            listProyects.map((proyect) => 
            <Card key={proyect.id} data={proyect} />)
        );
    };

    return (
        <section className="proyContainer">
            <h2>Last Proyects</h2>
            <aside>
                {renderView()}
            </aside>
        </section>
    );
};

export default Portfolio;