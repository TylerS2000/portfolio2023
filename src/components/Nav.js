import "./Nav.css";
export default function Nav(props) {
  return (
    <div className="Nav">
      <h3 onClick={props.scrollToHome}>About</h3>
      <h3 onClick={props.scrollToProjects}>Projects</h3>
      <h3 onClick={props.scrollToContact}>Contact</h3>
    </div>
  );
}
