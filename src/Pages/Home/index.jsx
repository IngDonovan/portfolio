import Layout from "../../Components/Layout";
import Portfolio from "../../Components/Portfolio";
import Intro from "../../Components/Intro";
import InfoFooter from "../../Components/InfoFooter";

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