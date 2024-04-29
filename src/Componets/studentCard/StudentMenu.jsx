

const StudentMenu = ({visibility, setVisibility})=> {
    
    return(   
        <div onClick={() => setVisibility(!visibility)}>
            show more
        {visibility && 
            <div className="menu" onClick={() => setVisibility(!visibility)}>
                nerds
                
               
            
            </div>
        }
        </div>
    )

}
export default StudentMenu;