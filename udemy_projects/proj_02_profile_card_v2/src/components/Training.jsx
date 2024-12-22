function Training(props){
  return <div className="training">
    <h4 className="training-title sub-section-heading">{props.trnDetails.trainingTakenFrom}</h4>
    <div className="training-year">{new Date(props.trnDetails.trainingStartedFrom).getFullYear()}-{!props.trnDetails.trainingEndedOn ? "Present" : new Date().getTime() <= new Date(props.trnDetails.trainingEndedOn).getTime() ? "Present" : new Date(props.trnDetails.trainingEndedOn).getFullYear()}</div>
    <div className="training-other-info">
      Courses: <br />
      <ol>
        {
          props.trnDetails.courses.map((crs, ind, ar) => {
            return <li key={ind}>{crs}</li>
          })
        }
      </ol>
    </div>
  </div>
}

export default Training;