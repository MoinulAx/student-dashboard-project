import React from "react";
import "./studentCard.css"

const  studentCard = ({student}) =>{
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
  
              </div>
          </div>
  )
  
          
    

}

export default studentCard;