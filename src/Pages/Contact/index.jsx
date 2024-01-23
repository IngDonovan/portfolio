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
            <div className="card">
              <span className="contact-links">
                <a href="https://wa.me/+573138707901" target="_blank">
                <span id="whatsapp" className="contact-btn flex-center">
                  <FaWhatsapp className="devIco icoRDsgn" />
                  <p>+57 3138707901</p>
                </span>
                </a>
              </span>
              <p className="heading">
              Contact:
              </p>
              <p>
               if you are interested, write me:
              </p>
              <a href="mailto:rojasdrm03@gmail.com" target="_blank">
                <p>
                  rojasdrm03@gmail.com
                </p>
              </a>
            </div>
          </article>
        </section>
        <InfoFooter />
      </Layout>
    );
  };
  
  export default Contact;