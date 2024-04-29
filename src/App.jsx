import React, { useState } from "react";

//Data
import studentData from "./data/data.json"

//Components
import StudentCardContainer from "./Componets/studentCardContainer/StudentCardContainer";
import CohortList from "./Componets/cohortList/CohortList";





function App() {
  const [cohort ,setCohort] = useState("All Students")
  const [students, setStudents] = useState(studentData)
  return (
    <div >

      <h1>Student Dashboard</h1>
          

        <div className="container">
          <CohortList studentData = {studentData} cohort={cohort}
          setCohort ={setCohort}/>
          <StudentCardContainer studentData={studentData} students={students} cohort={cohort}
          setCohort ={setCohort} setStudents={setStudents}/>
      
        </div>
        
    </div>
  );
}

export default App;
