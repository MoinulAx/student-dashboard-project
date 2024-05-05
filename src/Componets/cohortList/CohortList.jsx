import "./cohortList.css"
const cohortList = ({studentData, cohort, setCohort}) =>{
    let cohortArr = []
    studentData.forEach(student =>{
        if(!cohortArr.includes(student.cohort.cohortCode)){
            cohortArr.push(student.cohort.cohortCode)
        }
    })
    function handleClick(event){
        setCohort(event.target.id)

    }
    return (
        <div className="cohort-list">
            <div className="cohort-list__heading">Choose a Class by Start Date</div>
            <div>{cohort}</div>
            
            {cohortArr.map(cohort =>{
               return(
                <div onClick = {handleClick} className="cohort-list__item" id={cohort}>
                    {cohort}
                </div>
                    
               )

            })}

        </div>
    
    )

}


export default cohortList;