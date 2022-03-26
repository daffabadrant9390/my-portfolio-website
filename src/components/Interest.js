import InterestCard from "./InterestCard";
import "../App.css";

const Interest = (props) => {
  const interests = props.interests.interest;
  // console.log(interests);

  return (
    <section className="interests" id="interest-section">
      <div className="heading">
        <h1>Interests</h1>
        <p>Things that i am doing</p>
      </div>
      <div className="interests-list" data-aos="fade-up">
        {interests &&
          interests.map((interest) => {
            return (
              <div className="interest-card" key={interest.id}>
                <InterestCard interest={interest} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Interest;
