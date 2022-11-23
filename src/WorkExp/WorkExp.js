/*eslint-disable */
import { faC, faE, faI, faK, faN, faO, faP, faR, faW, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WorkExp.css"

const WorkExp = ()=>{

    const ToggleProgList = ()=>{
        const ParentList = document.getElementById("WorkExpDiv-scroll");

        if(ParentList.children[1].classList=="WorkExpDiv-scroll-listHidden"){
            ParentList.children[1].classList.replace("WorkExpDiv-scroll-listHidden","WorkExpDiv-scroll-listAppear") }
        else{ ParentList.children[1].classList.replace("WorkExpDiv-scroll-listAppear","WorkExpDiv-scroll-listHidden") }
    }

    const SlidingI = ()=>{
        window.scrollTo( {top: 0, behavior: 'smooth'} );
    }
    const SlidingT = ()=>{
        window.scrollTo( {top: 390, behavior: 'smooth'} );
    }
    const Sliding1 = ()=>{
        window.scrollTo( {top: 840, behavior: 'smooth'} );
    }
    const Sliding2 = ()=>{
        window.scrollTo( {top: 1650, behavior: 'smooth'} );
    }
    const Sliding3 = ()=>{
        window.scrollTo( {top: 2470, behavior: 'smooth'} );
    }
    const SlidingA = ()=>{
        window.scrollTo( {top: 3270, behavior: 'smooth'} );
    }

    return(
        <div className="WorkExpDiv">

            <p className="WorkExpDiv-head">
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faW} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faO} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faR} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faK} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faE} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faX} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faP} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faE} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faR} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faI} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faE} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faN} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faC} />
                <FontAwesomeIcon className="WorkExpDiv-headtxt" icon={faE} />
            </p>

            <div id="WorkExpDiv-scroll">
                <button className="WorkExpDiv-scroll-btn" onClick={ToggleProgList}>Scroll Helper</button>
                <div className="WorkExpDiv-scroll-listHidden">
                    <p onClick={SlidingI}>Intership</p>
                    <p onClick={SlidingT}>Training</p>
                    <p onClick={Sliding1}>1st Workplace</p>
                    <p onClick={Sliding2}>2nd Workplace</p>
                    <p onClick={Sliding3}>3rd Workplace</p>
                    <p onClick={SlidingA}>Additional {"(Free Time)"}</p>
                </div>
            </div>

            <div className="WorkExpDiv-Children">
                <div className="WorkExpDiv-Children-head">Intership</div>
                <div className="WorkExpDiv-Children-detail" >
                    <p style={{marginLeft:"40px"}}>Position : Service station maintenance trainee</p>
                    <p>Workplace : PTT Public Company Limited</p>
                </div>
            </div>

            <div className="WorkExpDiv-Children">
                <div className="WorkExpDiv-Children-head">Training</div>
                <div className="WorkExpDiv-Children-detail" >
                    <p>Course Name : Get anyone to do anything</p>
                    <p style={{marginLeft:"110px"}}>Place : Technology Promotion Association {"(Thai-Japan)"}</p>
                </div>
            </div>

            <div className="WorkExpDiv-Children">
                <div className="WorkExpDiv-Children-head">1st Workplace</div>
                <div className="WorkExpDiv-Children-detail" >
                    <p style={{marginLeft:"40px"}}>Position : Procurement Engineer {"(Commercial Vehicle Cab parts)"}</p>
                    <p>Workplace : Isuzu Global CV Engineering Center Co.,Ltd.</p>
                    <p style={{marginLeft:"30px"}}>Duration : 1.5 years</p>
                    <p style={{textDecoration:"underline"}}>Resbonsibilities</p>
                        <div className="WorkExpDiv-Children-subdetail">
                            <p>- Cooperate with internal for specified task</p>
                            <p>- Sourcing and negotiating price for parts</p>
                            <p>- Attend meeting to discuss on specific problem + Conduct Meeting memo</p>
                        </div>
                </div>
            </div>
            
            <div className="WorkExpDiv-Children">
                <div className="WorkExpDiv-Children-head">2nd Workplace</div>
                <div className="WorkExpDiv-Children-detail" >
                    <p style={{marginLeft:"40px"}}>Position : Coordinator and Operator support</p>
                    <p>Workplace : 1193 Call center of Highway Police Department (HWPD)</p>
                    <p style={{marginLeft:"30px"}}>Duration : 9 months</p>
                    <p style={{textDecoration:"underline"}}>Resbonsibilities</p>
                        <div className="WorkExpDiv-Children-subdetail">
                            <p>- Related project plan and coordination</p>
                            <p>- Document preparation {"(Summary, Report, Bidding document)"}</p>
                            <p>- Support Police works and Operator on calls {"(If necessary)"}</p>
                        </div>
                </div>
            </div>

            <div className="WorkExpDiv-Children">
                <div className="WorkExpDiv-Children-head">3rd Workplace</div>
                <div className="WorkExpDiv-Children-detail" >
                    <p style={{marginLeft:"40px"}}>Position : General Administration Officer {"(Supply Division)"}</p>
                    <p>Workplace : Thai Government Public Relations Department</p>
                    <p style={{marginLeft:"30px"}}>Duration : 5.5 months</p>
                    <p style={{textDecoration:"underline"}}>Resbonsibilities</p>
                        <div className="WorkExpDiv-Children-subdetail">
                            <p>- Input information and assign number for Goods using GFMIS and PRDIntranet system</p>
                            <p>- Follow up Documents regarding the Annual Goods Inspection/Distribution</p>
                            <p>- Support other works assigned by seniors</p>
                        </div>
                </div>
            </div>

            <div className="WorkExpDiv-Children">
                <div className="WorkExpDiv-Children-head">Additional {"(Free Time)"}</div>
                <div className="WorkExpDiv-Children-detail" >
                    <p style={{marginLeft:"40px",fontWeight:"bolder"}}>- Study Programming</p>
                    <p style={{marginLeft:"40px"}}>- Stock trader</p>
                    <p style={{marginLeft:"40px"}}>- Economic research</p>
                    <p style={{marginLeft:"40px"}}>- English practice</p>
                </div>
            </div>
            
        </div>
    )
}

export default WorkExp;