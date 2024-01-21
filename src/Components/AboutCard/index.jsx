import { useContext } from "react";
import "./AboutCard.scss";
import { PortContext } from "../../Context";

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
            <article>
                <h3>{title}</h3>
                <div>
                    <span><p>Name:</p><p>{name}</p></span>
                    <span><p>Last Name:</p><p>{last}</p></span>
                    <span><p>Nationality:</p><p>{nationality}</p></span>
                    <span><p>Languages:</p><p>{languages}</p></span>
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
            <article>
            <h3>{title}</h3>
            <div>
                {skillIcons}
            </div>
        </article>
        );
    };
    const renderDwnl = () => {
        return (
            <article>
                <h3>CV</h3>
                <div>
                    <p>Download:</p>
                    <button className="button" type="button"></button>
                </div>
            </article>
        );
    };

  return (
      <section>
        {renderPI()}
        {renderDev()}
        {renderDwnl()}
    </section>
  );
};

export default AboutCard;