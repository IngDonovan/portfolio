import { useContext } from "react";
import { PortContext } from "../../Context";
import Card from "../Card";
import "./Portfolio.sass";

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
            <aside>
                {renderView()}
            </aside>
        </section>
    );
};

export default Portfolio;