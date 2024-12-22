function Language(props){
  return <div className="language">
    <p>
      <b className="sub-section-heading">{props.langName}: </b>
      <span>{props.langPreference}</span><br />
      <span>{props.langProficiency}</span>
    </p>
    <h4 className="sub-section-heading"></h4>
  </div>
}

export default Language;