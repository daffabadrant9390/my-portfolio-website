const Skills = (props) => {
  const skillsData = props.skills.skills;
  //   console.log(skillsData);
  return (
    <section className="skills" id="skills-section">
      <div className="heading">
        <h1>Skills</h1>
        <p>
          What kind of skills that i have, and also softwares that i used during
          my design and development processes.
        </p>
      </div>
      <div className="skills-list">
        {skillsData &&
          skillsData.map((skill) => {
            return (
              <div className="skill-card" key={skill.id}>
                <img src={skill.imgUrl} alt={skill.title} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
