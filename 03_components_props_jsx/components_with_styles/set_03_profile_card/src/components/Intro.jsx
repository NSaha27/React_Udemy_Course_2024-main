import "./style.css";

function Intro(props){
  return <div className="intro">
    <h2 className="profileTitle">{props.profile.profileTitle}</h2>
    <div className="profileIntro">{props.profile.profileIntro}</div>
  </div>
}

export default Intro;