import { QnA } from "./components/QnA";
import { Questions, Answers } from "./enums";

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="call">
        <h1 className="call__title">Ready to Get started?</h1>
        <p className="call__description">
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <a href="#contact">
          <button className="generic-button call__btn">Contact us</button>
        </a>
      </div>
      <div className="questions">
        <QnA
          question={Questions.ProtectPlanet}
          answer={Answers.ProtectPlanet}
        />
        <QnA question={Questions.SaveEcology} answer={Answers.ProtectPlanet} />
        <QnA
          question={Questions.NatureConversation}
          answer={Answers.ProtectPlanet}
        />
      </div>
    </section>
  );
};

export default FAQ;
