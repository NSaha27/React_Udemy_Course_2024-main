function Skills(props) {
  return (
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        {props.skills.map((skl, indx, arr) => {
          return <li>{skl}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skills;
