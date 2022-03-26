import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const projectData = props.projects.projects;
  // console.log(projectData);
  return (
    <section className="projects" id="projects-section">
      <div className="heading">
        <h1>Projects</h1>
        <p>Things that i've been working on lately</p>
      </div>
      <div className="projects-list">
        {projectData.map((project) => {
          return (
            <div className="project-card" key={project.id} data-aos="fade-up">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
