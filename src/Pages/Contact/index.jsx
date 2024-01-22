import Layout from "../../Components/Layout";
import Intro from "../../Components/Intro";
import InfoFooter from "../../Components/InfoFooter";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import './Contact.scss';

const Contact = () => {

  
    return (
      <Layout>
        <Intro />
        <section>
          <article>
            <h3>Contact:</h3>
            <p>If you are interested and want to contact me:</p>
            <span className="contact-links">
              <span id="whatsapp" className="contact-btn flex-center">
                <FaWhatsapp className="devIco" />
                <p>+57 3138707901</p>
              </span>
              <span id="gmail" className="contact-btn flex-center">
                <TfiEmail className="devIco"/>
                <p>rojasdrm03@gmail.com</p>
              </span>
            </span>
          </article>
        </section>
        <InfoFooter />
      </Layout>
    );
  };
  
  export default Contact;