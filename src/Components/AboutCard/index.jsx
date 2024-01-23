import { useContext } from "react";
import { PortContext } from "../../Context";
import { IoMdDownload } from "react-icons/io";
import "./AboutCard.scss";

const AboutCard = () => {
    const {
        listPersonal,
    } = useContext(PortContext);

    const renderPI = () => {
        const firstItem = listPersonal[0].person;
        const title = firstItem.title;
        const name = firstItem.name;
        const last = firstItem.last;
        const nationality = firstItem.nationality;
        const languages = firstItem.languages;

        return (
            <article className="aboutPI design">
                <h3>{title}</h3>
                <div>
                    <span><p>Name:</p><p>{name}</p></span>
                    <span><p>Last Name:</p><p>{last}</p></span>
                    <span><p>Nationality:</p><p>{nationality}</p></span>
                    <span><p>Languages:</p><p>{`${languages[0]}, ${languages[1]}`}</p></span>
                </div>
            </article>
        );
    };
    const renderDev = () => {
        const firstItem = listPersonal[0].skills;
        const title = firstItem.title;

        const skillIcons = Object.entries(firstItem)
        .filter(([key]) => key !== 'title')
        .map(([key, value]) => (
            <figure key={key}>
                <img className="devIco icoRDsgn" src={value} alt={key} />
            </figure>
        ));

        return (
            <article className="aboutSkills design">
            <h3>{title}</h3>
            <div>
                {skillIcons}
            </div>
        </article>
        );
    };
    const renderDwnl = () => {
        return (
            <article className="aboutDwnload design">
                <h3>CV</h3>
                <div>
                    <p>For more information:</p>
                        <a href={listPersonal[0].cv.link} target="_blank">
                            <button className="button" type="button">
                                    Download
                                    <span>
                                        <IoMdDownload className="icoSocial"/>
                                    </span>
                            </button>
                        </a>
                </div>
            </article>
        );
    };

  return (
      <section className="aboutContainer">
        <article className="aboutSummary design">
            <span>I'm <strong>Frontend Developer</strong> with a solid foundation in <strong>React, Vite.js, Sass, Tailwind, Node.js,</strong> and proficiency in using <strong>npm and Git.</strong> Eager to learn and passionate about creating efficient and dynamic user interfaces. Dedicated to delivering high-quality, responsive web applications. Actively seeking opportunities to enhance my skills and make valuable contributions to your company.</span>
        </article>
        {renderPI()}
        {renderDev()}
        {renderDwnl()}
    </section>
  );
};

export default AboutCard;