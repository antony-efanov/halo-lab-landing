const Contact = () => {
  return (
    <section className="contact">
      <div className="description">
        <h1 className="description__title">Get started today!</h1>
        <p className="description__text">
          Learn more about how you can save our planet's nature. From smart
          consumption to switching to renewable energy, each of us can do our
          part to save the planet.
        </p>
      </div>
      <form className="form" action="#">
        <legend className="form__title">Log In</legend>
        <input className="form__nameInput" type="text" placeholder="Name" />
        <input
          className="form__emailInput"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <button className="form__submitBtn" type="submit">
          BOOK A DEMO
        </button>
      </form>
    </section>
  );
};

export default Contact;
