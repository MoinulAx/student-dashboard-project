import React from "react";

//Data
import studentData from "./data/data.json"

//Components
import StudentCardContianer from "./Componets/studentCardContainer/StudentCardContainer";



function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
        <StudentCardContianer studentData={studentData}/>
      
    </div>
  );
}

export default App;
