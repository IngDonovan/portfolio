import { useContext } from "react";
import { PortContext } from "../../Context";
import { NavLink } from "react-router-dom";
import './Intro.scss';

const Intro = () => {
    const {
        listProjects,
    } = useContext(PortContext);

    return (
        <section className="info">
            <article>
                <p>I'm</p>
                <NavLink to="/portfolio" className="linkClass">  
                <h1 className="ing">Donovan <span>Rojas</span></h1>
                </NavLink>
                <p>Frontend Developer</p>
            </article>
                <figure>
                        <span></span>
                </figure>
        </section>
    );
};

export default Intro;