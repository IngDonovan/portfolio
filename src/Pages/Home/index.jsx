import { useContext } from "react";
import { PortContext } from "../../Context";
import Layout from "../../Components/Layout";
import Portfolio from "../../Components/Portfolio";
import drmPhoto from '../../assets/img/drm.png';
import './Home.scss';

const Home = () => {

  
    return (
      <Layout>
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
        <Portfolio />
      </Layout>
    );
  };
  
  export default Home;