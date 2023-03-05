import "./Projects.css";
export default function Projects() {
  const projects = [
    {
      name: 'Acctble.',
      technology: 'React, Node, Express, MongoDB',
      description: 'A social media app for sharing self improvements anonymously.',
      image: 'https://via.placeholder.com/150',
      link: 'https://google.com'
    },
    {
      name: 'Project 2',
      description: 'This is a project',
      image: 'https://via.placeholder.com/150',
      link: 'https://google.com'
    }]
  return (
    <div className="Projects">
        {projects.map((project) => {
          return (
            <div className="Project">
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.name}/>
              <p>{project.technology}</p>
              <p>{project.description}</p>
              </div>
          )
        })}
    </div>
  );
}