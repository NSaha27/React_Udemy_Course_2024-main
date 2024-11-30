import "./css/style.css";

function Avatar(props){
  return <div className="avatar">
    <img src={props.profImgPath} alt={props.profName} />
  </div>
}

export default Avatar;