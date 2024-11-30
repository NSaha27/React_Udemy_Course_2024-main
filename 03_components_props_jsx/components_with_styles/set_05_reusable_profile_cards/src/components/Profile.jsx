import Avatar from "./Avatar";
import Info from "./Info";
import SkillList from "./SkillList";
import "./css/style.css";

function Profile(props){
  return <div className="profile">
    <Avatar profImgPath={props.profImgPath} profName={props.profName} />
    <Info profName={props.profName} profInfo={props.profInfo} />
    <SkillList skillList={props.skillList} />
  </div>
}

export default Profile;