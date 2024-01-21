import Layout from "../../Components/Layout";
import Intro from "../../Components/Intro";
import AboutCard from "../../Components/AboutCard";
import InfoFooter from "../../Components/InfoFooter";

import './AboutMe.scss';

const AboutMe = () => {

  
    return (
      <Layout>
        <Intro />
        <AboutCard />
        <InfoFooter />
      </Layout>
    );
  };
  
  export default AboutMe;