import React, { useEffect } from "react";
import StudentCard from "../studentCard/StudentCard";
import "./studentCardContainer.css"

const StudentCardContainer = ({studentData,students, cohort, setStudents}) => {
    const totalStudents = students.length

    useEffect(() => {
      const filtered = studentData.filter(student =>{ 
        if(cohort === "All Students"){return true}
        return student.cohort.cohortCode === cohort
      })
      setStudents(filtered)
    },[cohort])

    return(
        <div className="student-card-container">
            <h1>All Students</h1>
            <p>Total Students: {totalStudents}</p>
        {students.map(student=>{
            return(
            
              <StudentCard student = {student} key = {student.id}/>
            
            )
        })}

      </div>
        

    )

}

export default StudentCardContainer;