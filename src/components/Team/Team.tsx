import TeamMember1 from "../../assets/Team/TeamMember1.webp";
import TeamMember2 from "../../assets/Team/TeamMember2.webp";
import TeamMember3 from "../../assets/Team/TeamMember3.webp";

const Team = () => {
  return (
    <section id="team" className="team">
      <h2 className="title">Our Top Team</h2>
      <p className="description">
        Learn more about how you can save our planet's nature.
      </p>
      <div className="team__members">
        <img
          className="team__members_member-one"
          src={TeamMember1}
          alt="TeamMember1"
        />
        <img
          className="team__members_member-two"
          src={TeamMember2}
          alt="TeamMember2"
        />
        <img
          className="team__members_member-three"
          src={TeamMember3}
          alt="TeamMember3"
        />
      </div>
    </section>
  );
};

export default Team;
