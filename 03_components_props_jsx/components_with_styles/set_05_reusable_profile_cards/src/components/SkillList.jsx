import Skill from "./Skill";
import "./css/style.css";

function SkillList(props){
  return <div className="skillList">
    <ul className="">
      {
        props.skillList.map((skill, indx) => {
          return <li key={indx}> <Skill bgColor={skill.bgColor} textColor={skill.textColor} skillName={skill.skillName} skillImoge={skill.skillImoge} /></li>
        })
      }
    </ul>
  </div>
}

export default SkillList;