import "./About.css";
export default function About(props){
    return (
        <div className="About" ref={props.homeRef}>
        <div className="Bio-Container">
        <h3>Hello! My name is Tyler.</h3>
        <p>I'm a skilled software developer with expertise in TypeScript, JavaScript, React, Node.js, and MongoDB. I have experience building web applications that solve real world problems. Let's build something amazing together!</p>
        </div>
        </div>
    );
}