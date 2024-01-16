import { useContext } from "react";
import { PortContext } from "../../Context";
import './Intro.scss';

const Intro = () => {
    const {
        listProjects,
    } = useContext(PortContext);

    return (
        <section className="info">
            <article>
                <p>I'm</p>
                <h1 className="ing">Donovan <span>Rojas</span></h1>
                <p>Frontend Developer</p>
            </article>
            <figure>
                <span></span>
            </figure>
        </section>
    );
};

export default Intro;