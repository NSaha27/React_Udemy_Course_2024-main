function Status(props){
  return <div className="status">
    <h2 className={props.status === "matched" ? "success" : "danger"}>{props.status}</h2>
  </div>
}

export default Status;