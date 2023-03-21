import "./Projects.css";
import acctble from "./acctble.png";
import wordle from "./wordle.png";
export default function Projects() {
  const projects = [
    {
      name: 'Acctble.',
      technology: 'React, Node, Express, MongoDB',
      description: 'A social media app for sharing self improvements anonymously.',
      image: acctble,
      link: 'https://google.com',
      layout: ""
    },
    {
      name: 'Wordle Clone',
      description: 'A clone of the popular word game.',
      technology: 'React, Typescript',
      image: wordle,
      link: 'https://google.com',
      layout: "2"
    },
    {
      name: 'Wordle Clone',
      description: 'A clone of the popular word game.',
      technology: 'React, Typescript',
      image: wordle,
      link: 'https://google.com',
      layout: "2"
    },
    {
      name: 'Wordle Clone',
      description: 'A clone of the popular word game.',
      technology: 'React, Typescript',
      image: wordle,
      link: 'https://google.com',
      layout: "2"
    }]
  return (
    <div className="Projects">
      <div className="container">
        <div>
          {projects.map((project) => {
            return (
              <div className="row">
                <div className="project-container">
                  <div className="projectInfo six columns">
                    <h4><a href={project.link} style={{ color: "black" }}>{project.name}</a></h4>
                    <p>{project.technology}</p>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-img six columns">
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}