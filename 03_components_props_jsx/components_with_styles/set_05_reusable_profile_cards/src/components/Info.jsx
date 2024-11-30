import "./css/style.css";

function Info(props){
  return <div className="info">
    <h2 className="profName">{props.profName}</h2>
    <div className="profInfo">{props.profInfo}</div>
  </div>
}

export default Info;