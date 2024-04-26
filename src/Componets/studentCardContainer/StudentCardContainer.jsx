import React from "react";
import StudentCard from "../studentCard/StudentCard";
import "./studentCardContainer.css"

const StudentCardContianer = ({studentData}) => {
    const totalStudents = studentData.length
    return(
        <div className="student-card-container">
            <h1>All Students</h1>
            <p>Total Students: {totalStudents}</p>
        {studentData.map(student=>{
            return(
            
              <StudentCard student = {student} key = {student.id}/>
            
            )
        })}

      </div>
        

    )

}

export default StudentCardContianer;