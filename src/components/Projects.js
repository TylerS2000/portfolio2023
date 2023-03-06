import "./Projects.css";
export default function Projects() {
  const projects = [
    {
      name: 'Acctble.',
      technology: 'React, Node, Express, MongoDB',
      description: 'A social media app for sharing self improvements anonymously.',
      image: "./acctble.png",
      link: 'https://google.com'
    },
    {
      name: 'Wordle Clone',
      description: 'A clone of the popular word game.',
      technology: 'React, Typescript',
      image: './acctble.png',
      link: 'https://google.com'
    }]
  return (
    <div className="Projects">
        {projects.map((project) => {
          return (
            <div className="Project">
              <div className="img-container">
              <img src={require("./acctble.png")} alt={project.name}/>
              </div>
              <div className="text-container">
              <h2>{project.name}</h2>
              <p>Tools: {project.technology}</p>
              <p>{project.description} made with {project.technology}</p>
              </div>
              </div>
          )
        })}
    </div>
  );
}