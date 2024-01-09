import { useContext } from "react";
import { PortContext } from "../../Context";
import Layout from "../../Components/Layout";
import drmPhoto from '../../assets/img/drm.png';
import './Home.scss';

const Home = () => {

  
    return (
      <Layout>
        <section className="info">
            <article>
                <p>I´m</p>
                <h1>Donovan Rojas</h1>
                <p>Frontend Developer</p>
            </article>
            <figure>
                <span></span>
            </figure>
        </section>
      </Layout>
    );
  };
  
  export default Home;