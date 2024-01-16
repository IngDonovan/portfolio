import { useContext } from "react";
import { PortContext } from "../../Context";
import Layout from "../../Components/Layout";
import Portfolio from "../../Components/Portfolio";
import Intro from "../../Components/Intro";
import InfoFooter from "../../Components/InfoFooter";
import drmPhoto from '../../assets/img/drm.png';
import './Home.scss';

const Home = () => {

  
    return (
      <Layout>
        <Intro />
        <Portfolio />
        <InfoFooter />
      </Layout>
    );
  };
  
  export default Home;