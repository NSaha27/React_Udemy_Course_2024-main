function ProfExperience({company, jobType, jobStartedFrom, jobEndedOn, experiences}){
  return <div className="prof-exp">
    <h4 className="sub-section-heading">{company} - {jobType}</h4>
    <p>{new Date(jobStartedFrom).getFullYear()} - {!jobEndedOn ? "Present" : new Date().getTime() <= new Date(jobEndedOn).getTime() ? "Present" : new Date(jobEndedOn).getFullYear()}</p>
    <ul>
      {
        experiences.map((exp, indx, arr) => {
          return <li key={indx}>{exp}</li>
        })
      }
    </ul>
  </div>
}

export default ProfExperience;