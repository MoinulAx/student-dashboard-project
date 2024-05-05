import React, { useCallback, useState } from "react";
import StudentMenu from "./StudentMenu";
import "./studentCard.css"

const  studentCard = ({student}) =>{
  const [visibility, setVisibility] = useState(false)
  const {resume,linkedin, github, mockInterview} = student.certifications

  let progress =  resume && linkedin && github && mockInterview

    


    return (
        

           <div className="student-card" >
              <div className="student-card__img">
                <img  src= {student.profilePhoto} alt="" />
              </div>
              <div className="student-card__info">
                <div className="student-card__name">
                  <strong>{student.names.preferredName + student.names.middleName + student.names.surname}</strong>
                </div>
                <div className="student-card__email">
                  {student.username}
                </div>
                <div className="student-card__DOB">
                  Birthday: {student.dob}
                </div>
                <StudentMenu visibility={visibility} setVisibility={setVisibility}/>
              </div>
              {progress ? (<span>On Track</span>) : (<span>Off Track</span>)}
                
              
              
              
          </div>
  )
  
          
    

}

export default studentCard;