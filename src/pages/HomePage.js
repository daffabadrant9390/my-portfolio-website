import About from "../components/About.js";
import Hero from "../components/Hero.js";
import Interest from "../components/Interest.js";
import Projects from "../components/Projects.js";
import Skills from "../components/Skills.js";
import useFetch from "../hooks/useFetch.js";

const HomePage = () => {
  const { data: interestsData } = useFetch("./data/interest.json");
  const { data: skillsData } = useFetch("./data/skills.json");
  const { data: projectsData } = useFetch("./data/projects.json");

  return (
    <>
      <Hero />
      <About />
      {interestsData && <Interest interests={interestsData} />}
      {projectsData && <Projects projects={projectsData} />}
      {skillsData && <Skills skills={skillsData} />}
    </>
  );
};

export default HomePage;
