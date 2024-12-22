import React from "react";

function Project(props){
  return <React.Fragment>
    <span>{props.project.name}</span> <br />
    <span><a href={props.project.link}>github link...</a></span>
  </React.Fragment>
}

export default Project;