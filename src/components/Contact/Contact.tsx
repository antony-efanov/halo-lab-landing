import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  return (
    <section id="contact" className="contact">
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
        <input
          className="form__name-input input"
          type="text"
          placeholder="Name"
          required
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={formData.name}
        />
        <input
          value={formData.email}
          className="form__email-input input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <button className="generic-button form__submit-btn" type="submit">
          Book a demo
        </button>
      </form>
    </section>
  );
};

export default Contact;
