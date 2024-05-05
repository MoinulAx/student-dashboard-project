import React from "react";
import "./studentmenu.css"

const StudentMenu = ({visibility, setVisibility})=> {
    
    return(   
        <div onClick={() => setVisibility(!visibility)}>
            {visibility? <span>show less</span> : <span>show more</span>}
        {visibility && 
            <div className="menu" onClick={() => setVisibility(!visibility)}>
                
                <div className="menu-container">
                        <div className="menu-items">
                            <h1>Codewars</h1>
                            <p>Current Total:</p>
                            <p>Last Week:</p>
                            <p>Goal:</p>
                            <p>Percent of Goal Achieved:</p>
                        </div>
                        <div className="menu-items">
                            <h1>Scores:</h1>
                            <p>Assignments:</p>
                            <p>Projects:</p>
                            <p>Assessments:</p>
                        </div>
                        <div className="menu-items">
                            <h1>Certifications</h1>
                            <p>Resume:</p>
                            <p>Linkedin:</p>
                            <p>Mock Interview:</p>
                            <p></p>
                        </div>
                </div>
            
            </div>
        }
        </div>
    )

}
export default StudentMenu;