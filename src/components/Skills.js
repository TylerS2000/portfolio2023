import "./Skills.css"
export default function Skills() {
    const Skills = [
        {name: "React.js",
        description: "I have a strong understanding of React.js and how to use it to create a well-structured website.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},
        {
            name: "HTML",
            description: "I have a strong understanding of HTML and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
        },
        {
            name: "CSS",
            description: "I have a strong understanding of CSS and how to use it to style a website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
        },
        {
            name: "JavaScript",
            description: "I have a strong understanding of JavaScript and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
            name: "Node.js",
            description: "I have a strong understanding of Node.js and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
        },
        {
            name: "Express.js",
            description: "I have a strong understanding of Express.js and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png"
        },
        {
            name: "MongoDB",
            description: "I have a strong understanding of MongoDB and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png"
        },
        {
            name: "TypeScript",
            description: "I have a strong understanding of TypeScript and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        },
        {
            name: "React Native",
            description: "I have a strong understanding of React Native and how to use it to create a well-structured website.",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        }
        ]
    return (
        <div className="Skills">
            {Skills.map((skill) => {
                return (
                    <div className="Skill-Container">
                        <div className="img-container">
                        <img src={skill.icon} alt="icon"/>
                        </div>
                        <h3>{skill.name}</h3>
                    </div>
                )
            }
            )}
        </div>
    )
    }