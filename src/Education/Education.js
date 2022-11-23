import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faA, faC, faD, faE, faI, faN, faO, faSchool, faT, faU, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Education.css"

const Education = ()=>{

    const EmphasisLarge = ()=>{
        document.getElementsByClassName("EducationDiv-UniversityAct")[0].classList.toggle("Emphasis")
    }

    const EmphasisSmall1 = ()=>{
        document.getElementsByClassName("EducationDiv-Study-Child")[0].classList.toggle("Emphasis")
    }
    const EmphasisSmall2 = ()=>{
        document.getElementsByClassName("EducationDiv-Study-Child")[1].classList.toggle("Emphasis")
    }


    return(
        <div className="EducationDiv">

            {/* Page Header */}
            <p className="EducationDiv-head">
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faE} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faD} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faU} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faC} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faA} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faT} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faI} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faO} />
                <FontAwesomeIcon className="EducationDiv-headtxt" icon={faN} />
            </p>
            
            {/* Page Body */}
            <div className="EducationDiv-body">

                {/* Left Div */}
                <div className="EducationDiv-Study">
                    <div className="EducationDiv-Study-Child" style={{height:"100px"}} onClick={EmphasisSmall1}>
                        <h3 className="EducationDiv-Study-Child-header">
                            <FontAwesomeIcon icon={faSchool} />
                            <p style={{marginLeft:"10px"}}>Highschool</p>
                        </h3>
                        <p style={{marginLeft:"10px"}}>Math – Science Program at Satriwitthaya 2 school {"("}GPA 3.33{")"}</p>
                    </div>
                    <div className="EducationDiv-Study-Child" style={{height:"300px"}} onClick={EmphasisSmall2}>
                        <h3 className="EducationDiv-Study-Child-header">
                            <FontAwesomeIcon icon={faUniversity} />
                            <p style={{marginLeft:"10px"}}>University</p>
                        </h3>
                        <p style={{marginLeft:"10px"}}>Bachelor’s degree in Mechanical Engineering at
	                       King Mongkut’s Institute of Technology Ladkrabang {"("}GPA 2.93{")"}</p>
                    </div>
                </div>

                {/* Right Div */}
                <div className="EducationDiv-UniversityAct" onClick={EmphasisLarge}>
                    <h3 className="EducationDiv-UniversityAct-header">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <p style={{marginLeft:"10px"}}>University Activity</p>
                    </h3>
                    <div className="Activity-Line">
                        <p>Group Project : </p><p>C-Clamp and Table Creation</p>
                    </div>
                    <div className="Activity-Line">
                        <p>Single project : </p><p>Pipe vice AutoCAD modeling</p>
                    </div>
                    <div className="Activity-Line">
                        <p>Group project : </p><p>Exercise equipment design and AutoCAD modeling</p>
                    </div>
                    <div className="Activity-Line">
                        <p style={{width:"600px"}}>KMITL Group project :</p>
                        <p>Heat transfer characteristics and Flow pattern of air-water flow in microchannels {"("}Experimental study{")"}</p>
                    </div>
                    <div className="Activity-Line">
                        <p style={{width:"250px"}}>KMITL Project day :</p>
                        <p>Project booth staff in KMITL Project day 2018</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Education;