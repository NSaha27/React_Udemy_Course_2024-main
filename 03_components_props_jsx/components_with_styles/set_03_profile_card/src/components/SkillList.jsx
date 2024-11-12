import "./style.css";

function SkillList(props){
  return <div className="skills">
    <ul>
      {
        props.profile.profileSkills.map((skill, indx) => {
          return <li className="skill" key={indx} style={{backgroundColor: skill.bg}}>{skill.name} {skill.emoji}</li>
        })
      }
    </ul>
  </div>
}

export default SkillList;