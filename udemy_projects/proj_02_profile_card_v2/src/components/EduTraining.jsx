import React from "react";
import Education from "./Education";
import Training from "./Training";

function EduTraining({education, training}){
  return <div className="edu-training">
    {
      education.length > 0 && 
        <div className="education">
          <h4 className="sub-section-heading">Education</h4>
          {
            education.map((edu, indx, arr) => {
              return <Education eduDetails={edu} key={indx} />
            })
          }
        </div>
    }
    {
      training.length > 0 && 
        <div className="training">
          <h4 className="sub-section-heading">Training</h4>
          {
            training.map((trn, indx, arr) => {
              return <Training trnDetails={trn} key={indx} />
            })
          }
        </div>
    }
  </div>
}

export default EduTraining;