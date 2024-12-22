function Education(props){
  return <div className="degree">
    <h4 className="degree-title sub-section-heading">{props.eduDetails.degreeTitle}</h4>
    <div className="degree-other-info">
      <ul>
        <li>Board: {props.eduDetails.board}</li>
        <li>GPA: {props.eduDetails.gpa}%</li>
        <li>Year: {props.eduDetails.year}</li>
      </ul>
    </div>
  </div>
}

export default Education;