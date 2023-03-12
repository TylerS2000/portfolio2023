import "./Projects.css";
export default function Projects() {
  const projects = [
    {
      name: 'Acctble.',
      technology: 'React, Node, Express, MongoDB',
      description: 'A social media app for sharing self improvements anonymously.',
      image: "./acctble.png",
      link: 'https://google.com',
      layout:""
    },
    {
      name: 'Wordle Clone',
      description: 'A clone of the popular word game.',
      technology: 'React, Typescript',
      image: './acctble.png',
      link: 'https://google.com',
      layout:"2"
    }]
  return (
    <div className="Projects">
      <h1 className="title">My Work</h1>
        <div className="container">
        {projects.map((project) => {
          return (
            <div className="Project row">
              <div className={"img-container"+project.layout+" seven columns"}>
              <img src={require("./acctble.png")} alt={project.name} />
              </div>
           
              <div className={"text-container"+project.layout+" six columns"}>
              <h2>{project.name}</h2>
              <div className="description">
              <p>Tools: {project.technology}</p>
              <p>{project.description} made with {project.technology}</p>
              </div>
              <div className={`logo-container`+project.layout}>
              <img src={require("./github.png")} alt={project.name} className="logo" />
              <img src={require("./link.png")} alt={project.name} className="logo"/>
              </div>
              </div>
              </div>
          )
        })}
        </div>
    </div>
  );
}