import { faI, faK, faL, faS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skill.css"
import ToeicGraph from "./ToeicGraph";

const Skill = ()=>{

    function ExpendDiv (event) {
        // eslint-disable-next-line
        if(event.target.classList=="SkillDiv-row-shrink"){
            event.target.classList.replace("SkillDiv-row-shrink","SkillDiv-row-expand")
                setTimeout(()=>{event.target.children[0].classList.replace("HiddenText","AppearText")},500)
        }else {
            event.target.children[0].classList.replace("AppearText","HiddenText")
                event.target.classList.replace("SkillDiv-row-expand","SkillDiv-row-shrink")
        }
    }

    return(
        <div className="SkillDiv">

            {/* Page Header */}
            <p className="SkillDiv-head">
                <FontAwesomeIcon className="SkillDiv-headtxt" icon={faS} />
                <FontAwesomeIcon className="SkillDiv-headtxt" icon={faK} />
                <FontAwesomeIcon className="SkillDiv-headtxt" icon={faI} />
                <FontAwesomeIcon className="SkillDiv-headtxt" icon={faL} />
                <FontAwesomeIcon className="SkillDiv-headtxt" icon={faL} />
            </p>

            {/* Page Body */}
            <div className="SkillDiv-body">

                <div onClick={ExpendDiv} className="SkillDiv-row-shrink">
                    Computer Skill
                    <p className="HiddenText">
                        <p className="AppearText-detail" style={{textDecoration:"underline"}}><b>Engineering</b></p>
                        <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>
                            {"1.) AutoCAD"} &nbsp;{"2.) Solid Work"} &nbsp;{"3.) MATLAB"} &nbsp;{"4.) Graph Digitizer"}
                        </p>
                        <p className="AppearText-detail" style={{textDecoration:"underline"}}><b>Computer Programming</b></p>
                            <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>
                                Program : &nbsp;{"1.) VS Code"} &nbsp;{"2.) Dev-C++"}
                            </p>
                            <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px",marginTop:"0"}}>
                                Framework : &nbsp;ReactJS {"(willing to learn other Framework uses)"}
                            </p>
                            <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px",marginTop:"0"}}>
                                Language : &nbsp;{"1.) HTML"} &nbsp;{"2.) CSS"} &nbsp;{"3.) JavaScript"} &nbsp;{"4.) C"}
                            </p>
                            <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px",marginTop:"0"}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tool : &nbsp;{"1.) Git/Github"} &nbsp;{"2.) Netlify"}
                            </p>
                            
                        <p className="AppearText-detail" style={{textDecoration:"underline"}}><b>Presentation/Decoration</b></p>
                            <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>- Word/Excel/PowerPoint</p>
                            <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px",marginTop:"0"}}>- Figma</p>
                    </p>
                </div>

                <div onClick={ExpendDiv} className="SkillDiv-row-shrink">
                    &nbsp;Language Skill
                    <div className="HiddenText">
                        <p className="AppearText-detail"><b>TOEIC/Rank :</b>&nbsp;880 {"(Latest)"} {"/Working Proficiency Plus"}</p>
                        <p className="AppearText-detail" style={{marginLeft: "4px"}}><b>Avg. TOEIC :</b>&nbsp;Listening = 454, Reading = 387</p>
                        <p className="AppearText-detail" style={{marginLeft:"79px"}}>
                            <b>Other :</b>
                            &nbsp;Speaking = Good, Writing = Good
                        </p>
    
                        <div className="AppearText-graph"><ToeicGraph/></div>
                    </div>
                </div>

                <div onClick={ExpendDiv} className="SkillDiv-row-shrink">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other Skill
                    <p className="HiddenText">
                        <p className="AppearText-detail" style={{textDecoration:"underline"}}><b>Free-time Hobby</b></p>
                        <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>
                            {"1.) Internet"} &nbsp;{"2.) Badminton"} &nbsp;{"3.) Chess"} &nbsp;{"4.) LEGO"}
                        </p>
                        <p className="AppearText-detail" style={{textDecoration:"underline"}}><b>Strength</b></p>
                        <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>
                            &nbsp;- Highly analytical, &nbsp;Planning/Managing, &nbsp;Initiative
                        </p>
                        <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>
                            &nbsp;- Punctual, &nbsp;Responsible, &nbsp;Self-Developing
                        </p>
                        <p className="AppearText-detail" style={{textDecoration:"underline"}}><b>Weakness</b></p>
                        <p className="AppearText-detail" style={{marginLeft:"20px",fontSize:"21px"}}>
                            &nbsp;{"- Indecisive sometimes (Required working to get used to)"}
                        </p>
                    </p>
                </div>

                <div onClick={ExpendDiv} className="SkillDiv-row-shrink">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other Skill
                    <p className="HiddenText">
                        <p className="AppearText-detail">
                            <img src="./SkillMap.png" alt="Loading" className="SkillImg"></img>
                        </p>
                    </p>
                </div>

            </div>
            
        </div>
    )
}

export default Skill;