import { faA, faB, faCakeCandles, faE, faEnvelope, faHome, faM, faMessage, faMobileRetro, faO, faPortrait, faT, faU } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThinkingFace from "./Img/ThinkingFace.png"
import Profile from "./Img/Profile2.jpg"
import "./AboutMe.css"

const AboutMe = ()=>{

    const AppearPic = ()=>{

        const ParentImgDiv = document.getElementsByClassName("AboutMeDiv-imgDiv")[0]

        // eslint-disable-next-line
        if(ParentImgDiv.children[1].classList=="AboutMeDiv-PopupHidden"){
            ParentImgDiv.children[1].classList.replace("AboutMeDiv-PopupHidden","AboutMeDiv-PopupAppear")
    
            setTimeout(() => {
                ParentImgDiv.children[1].classList.replace("AboutMeDiv-PopupAppear","AboutMeDiv-PopupHidden")
            },4000);
        }
    }

    return(
        <div className="AboutMeDiv">

            {/* Page Header */}
            <p className="AboutMeDiv-head">
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faA} />
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faB} />
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faO} />
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faU} />
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faT} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faM} />
                <FontAwesomeIcon className="AboutMeDiv-headtxt" icon={faE} />
            </p>

            {/* Page Body */}
            <div className="AboutMeDiv-body">

                {/* Profile Image */}
                <div className="AboutMeDiv-imgDiv" onClick={AppearPic}>
                    <img className="AboutMeDiv-img" src={Profile} alt="Sorry, Error Loading somehow"/>
                    <div className="AboutMeDiv-PopupHidden"><img src={ThinkingFace} alt="Loading Error" width="100%"/></div>
                </div>
                

                {/* Profile Detail */}
                <div className="AboutMeDiv-section">
                    <div className="AboutMeDiv-detail">
                        <FontAwesomeIcon icon={faPortrait} style={{marginRight:"10px"}}/>
                        Name : Mr. Wisit Tangcharoen
                    </div>
                    <div className="AboutMeDiv-detail">
                        <FontAwesomeIcon icon={faCakeCandles} style={{marginRight:"10px"}}/>
                        Birthday : November 6, 1996 {"("}Age 26{")"}
                    </div>
                    <div className="AboutMeDiv-detail">
                        <FontAwesomeIcon icon={faMobileRetro} style={{marginRight:"10px"}}/> Mobile : 0877084886,&nbsp; 
                        <FontAwesomeIcon icon={faHome} style={{marginRight:"10px"}}/>Home : 025702733
                    </div>
                    <div className="AboutMeDiv-detail">
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"10px"}}/>
                        E-mail : Kriss2form@hotmail.com
                    </div>
                    <div className="AboutMeDiv-detail">
                        <FontAwesomeIcon icon={faMessage} style={{marginRight:"10px"}}/>
                        Facebook : Wisit Tangcharoen
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default AboutMe;