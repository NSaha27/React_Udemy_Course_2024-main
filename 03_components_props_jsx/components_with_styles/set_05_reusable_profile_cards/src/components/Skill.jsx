function Skill(props){
  return <span className="skill" style={{backgroundColor: props.bgColor, color: props.textColor}}>{props.skillName} {props.skillImoge}</span>
}

export default Skill;