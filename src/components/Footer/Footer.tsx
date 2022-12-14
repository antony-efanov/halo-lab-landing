import TwitterLogo from "../../assets/Footer/icons/Twitter.svg";
import FBLogo from "../../assets/Footer/icons/FB.svg";
import LinkedInLogo from "../../assets/Footer/icons/LinkedIn.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="background"></div>
      <div className="contacts">
        <h1 className="contacts__title">Contacts</h1>
        <p className="contacts__copyright">
          2019 Rootz Foundation. All rights reserved
        </p>
      </div>
      <div className="info">
        <div className="headquarters">
          <h2 className="headquarters__title">Headquarters</h2>
          <p className="headquarters__post">1234 Taliban</p>
          <p className="headquarters__city">Los Angeles, La 1234567</p>
          <p className="headquarters__number">(123) 456-7890</p>
        </div>
        <div className="social">
          <h2 className="social__title">Social media</h2>
          <div className="social__links">
            <button className="social__link">
              <img src={TwitterLogo} alt="tw_logo" />
            </button>
            <button className="social__link">
              <img src={FBLogo} alt="" />
            </button>
            <button className="social__link">
              <img src={LinkedInLogo} alt="in_logo" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
