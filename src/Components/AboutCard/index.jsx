import { useContext } from "react";
import { PortContext } from "../../Context";
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
                <img className="devIco" src={value} alt={key} />
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
                    <button className="button" type="button">
                        Download
                        <span></span>
                        </button>
                </div>
            </article>
        );
    };

  return (
      <section className="aboutContainer">
        <article className="aboutSummary design">
            <span>{listPersonal[0].person.summary}</span>
        </article>
        {renderPI()}
        {renderDev()}
        {renderDwnl()}
    </section>
  );
};

export default AboutCard;