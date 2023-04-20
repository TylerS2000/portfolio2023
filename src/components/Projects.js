import "./Projects.css";
import wordle from "./wordle.png";
import phone from "./acctble-phone.png"
import engineer from "./engineer.png"
import mobile from "./mobile.png"
import dietetic from "./dietetic.png"
export default function Projects() {
  const projects = [
    {
      name: 'Acctble.',
      technology: 'React, Javascript, Node, Express, MongoDB',
      description: 'A social media app for sharing self improvements anonymously.',
      image: phone,
      link: 'https://google.com'
    },
    {
      name: 'Wordle Clone',
      description: 'A clone of the popular word game.',
      technology: 'React, Typescript',
      image: wordle,
      link: 'https://google.com',
    },
    {
      name:"Engineering Calculator",
      description:"An instant conversion calculator commisioned by mechanical engineer.",
      technology: "React, Javascript",
      image:engineer,
      link:"https://conversion-calculator-flax.vercel.app/",

    },
    {
      name: "Le Cook",
      description:"An app that uses ingredients the user already has to find recipes. Made to reduce food waste and save money. Runner-up for best design at the RevolutionUC hackathon",
      technology:"React Native, Javascript",
      image:mobile, 
      link:"https://devpost.com/software/le-cook"
    },
    {
      name:"Dietitian's Calculator",
      description:"A calculator to determine nutritional needs based off of height and weight. Saves a dietitan 15 minutes per day and works well to train new hires on nutritional needs.",
      technology:"Javascript, HTML, CSS",
      image:dietetic,
      link:"dietetic.netlify.app"
    }
    ]
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
                    <img className="image"src={project.image} alt="project" />
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