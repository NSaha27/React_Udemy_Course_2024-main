function Skill(props){
  return <div className="skill">
    <h4 className="sub-section-heading">{props.skillType}-</h4>
    <ul>
      {
        props.skills.map((skl, indx, arr) => {
          return <li key={indx}>{skl}</li>
        })
      }
    </ul>
  </div>
}

export default Skill;