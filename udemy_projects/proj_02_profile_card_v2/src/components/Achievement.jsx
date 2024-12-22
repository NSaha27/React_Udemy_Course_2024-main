import Project from "./Project";

function Achievement({achievements, projects}){
  return <div className="achievement">
    {
      achievements.map((achv, ind, arr) => {
        return <p key={ind}>{achv}</p>
      })
    }
    <h4 className="sub-section-heading">GitHub links of the Projects</h4>
    <p>
      <ol>
        {
          projects.map((proj, indx, arr) => {
            return <li><Project project={proj} key={indx} /></li>
          })
        }
      </ol>
    </p>
  </div>
}

export default Achievement;