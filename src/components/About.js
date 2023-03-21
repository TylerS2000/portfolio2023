import "./About.css";
export default function About(props){
    return (
        <div className="About" ref={props.homeRef}>
        <div className="Bio-Container">
        <h3>Hello! My name is Tyler.</h3>
        <p>I'm a skilled software developer with expertise in TypeScript, JavaScript, React, Node.js, and MongoDB. I have several years of experience building web applications and specialize in frontend and backend development. Let's build something amazing together!</p>
        </div>
        </div>
    );
}