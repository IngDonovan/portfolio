import Layout from "../../Components/Layout";
import Intro from "../../Components/Intro";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import './Contact.scss';

const Contact = () => {

  
    return (
      <Layout>
        <Intro />
        <section>
            <h2>Contact</h2>
            <p>if you are interested:</p>
            <article className="design">
                <h3>Write me!</h3>
                <div>
                  <span className="contact-links">
                  <a href="https://wa.me/+573138707901" target="_blank">
                  <span id="whatsapp" className="contact-btn flex-center">
                    <FaWhatsapp className="devIco icoRDsgn" />
                    <p>+573138707901</p>
                  </span>
                  </a>
              </span>
                </div>
            </article>
            <article className="design">
              <h3>Send me!</h3>
              <div>
                <span className="contact-links">
                  <a href="mailto:rojasdrm03@gmail.com" target="_blank">
                    <span id="gmail" className="contact-btn flex-center">
                      <SiGmail className="devIco icoRDsgn" />
                      <p>rojasdrm03@gmail.com</p>
                    </span>
                  </a>
                </span>
              </div>
            </article>
            <article className="design">
              <h3>Or follow me!</h3>
              <div>
                <span className="contact-links">
                  <a href="https://discord.com/" target="_blank">
                    <span id="discord" className="contact-btn flex-center">
                      <FaDiscord className="devIco icoRDsgn" />
                      <p>/ingdrm03</p>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/ingdonovanrm/" target="_blank">
                    <span id="linkedin" className="contact-btn flex-center">
                      <FaLinkedinIn  className="devIco icoRDsgn" />
                      <p>/in/ingdonovanrm</p>
                    </span>
                  </a>
                  <a href="https://github.com/IngDonovan" target="_blank">
                    <span id="github" className="contact-btn flex-center">
                      <FaGithub  className="devIco icoRDsgn" />
                      <p>/IngDonovan</p>
                    </span>
                  </a>
                </span>
              </div>
            </article>
        </section>
      </Layout>
    );
  };
  
  export default Contact;