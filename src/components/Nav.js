/* eslint-disable no-unused-expressions */
import "./Nav.css";
import React from "react";
export default function Nav(props) {
  const [change, setChange] = React.useState("")
  function handleClick(e) {
      e.preventDefault();
      if (change) {
          setChange("")
      }
      else (
          setChange("change")
      )
  }
  return (
    <div className="Nav">
      <h3 onClick={props.scrollToHome}>About</h3>
      <h3 onClick={props.scrollToProjects}>Projects</h3>
      <h3 onClick={props.scrollToContact}>Contact</h3>
      <div className={`hamburger ${change}`} onClick={handleClick}>
                <div className={`bar1`}></div>
                <div className={`bar2`}></div>
                <div className={`bar3`}></div>
            </div>
            {change && <div className="nav-pop">
                <div className="nav-pop-inner">
                    <h2 onClick={()=>{props.scrollToHome(); setChange("")}}>Home</h2>
                    <h2 onClick={()=>{props.scrollToProjects(); setChange("")}}>Projects</h2>
                    <h2 onClick={()=>{props.scrollToContact(); setChange("")}}>Contact</h2>
                </div>
            </div>}
    </div>
  );
}
