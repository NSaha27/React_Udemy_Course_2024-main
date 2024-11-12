import "./style.css";

function Avatar(props){
  return <div className="profileImg">
    <img src={props.profile.profileImg} alt={props.profile.profileTitle} />
  </div>
}

export default Avatar;