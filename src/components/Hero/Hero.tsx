import { ReactComponent as Headline } from "../../assets/Hero/Headline.svg";
import { ReactComponent as Parrot } from "../../assets/Hero/Parrot.svg";
import { ReactComponent as HeadWithHeart } from "../../assets/Hero/icons/HeadWithHeart.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="label">
        <Headline className="label__headline" />
        <p className="label__text">
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </p>
        <div className="label__search">
          <input
            className="label__search--input"
            type="text"
            placeholder="Find the place to help"
          />
          <button className="label__search--searchBtn">SEARCH</button>
        </div>
      </div>
      <div className="parrot">
        <Parrot className="parrot" />
        <div className="membersCard">
          <HeadWithHeart />
          <div className="members">
            <p className="members__title">Members</p>
            <p className="members__amount">29 128</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
