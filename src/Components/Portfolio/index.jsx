import { useContext } from "react";
import { PortContext } from "../../Context";
import Card from "../Card";
import "./Portfolio.scss";

const Portfolio = () => {

    const {
        listProjects,
    } = useContext(PortContext);

    const renderView = () => {
        return (
            listProjects.map((project) => 
            <Card key={project.id} data={project} />)
        );
    };

    return (
        <section className="proyContainer">
            <h2>Last Projects</h2>
            <aside>
                {renderView()}
            </aside>
        </section>
    );
};

export default Portfolio;