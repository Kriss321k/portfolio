import { faA, faC, faE, faG, faI, faJ, faM, faN, faO, faP, faR, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProgProject.css"

const ProgProject = ()=>{

    const ToggleProgList = ()=>{
        const ParentList = document.getElementById("ProgDiv-scroll");

        // eslint-disable-next-line
        if(ParentList.children[1].classList=="ProgDiv-scroll-listHidden"){
            ParentList.children[1].classList.replace("ProgDiv-scroll-listHidden","ProgDiv-scroll-listAppear") }
        else{ ParentList.children[1].classList.replace("ProgDiv-scroll-listAppear","ProgDiv-scroll-listHidden") }
    }

        const Sliding1 = ()=>{
            window.scrollTo( {top: 180, behavior: 'smooth'} );
        }
        const Sliding2 = ()=>{
            window.scrollTo( {top: 3140, behavior: 'smooth'} );
        }
        const Sliding3 = ()=>{
            window.scrollTo( {top: 4830, behavior: 'smooth'} );
        }
        const Sliding4 = ()=>{
            window.scrollTo( {top: 7770, behavior: 'smooth'} );
        }
        const Sliding5 = ()=>{
            window.scrollTo( {top: 11560, behavior: 'smooth'} );
        }
        const SlidingP = ()=>{
            window.scrollTo( {top: 12735, behavior: 'smooth'} );
        }
     

    return(
        <div className="ProgDiv">

            {/* Page Header */}
            <p className="ProgDiv-head">
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faP} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faR} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faO} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faG} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faR} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faA} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faM} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faM} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faI} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faN} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faG} />
                <FontAwesomeIcon className="ProgDiv-headtxt" style={{marginLeft:"30px"}} icon={faP} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faR} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faO} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faJ} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faE} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faC} />
                <FontAwesomeIcon className="ProgDiv-headtxt" icon={faT} />
            </p>

            {/* Page Scroll Helper */}
            <div id="ProgDiv-scroll">
                <button className="ProgDiv-scroll-btn" onClick={ToggleProgList}>Scroll Helper</button>
                <div className="ProgDiv-scroll-listHidden">
                    <p onClick={Sliding1}>1st Project</p>
                    <p onClick={Sliding2}>2nd Project</p>
                    <p onClick={Sliding3}>3rd Project</p>
                    <p onClick={Sliding4}>4th Project</p>
                    <p onClick={Sliding5}>{"(Additional)"} Figma</p>
                    <p onClick={SlidingP}>Portfolio</p>
                </div>
            </div>
            
            
            {/* Page Body */}
            <div className="ProgDiv-body">
                
                {/* Calculation Website */}
                <div className="ProgDiv-body-row">
                    <h2>1st Project : Calculation Website</h2>
                    <p>Language used :&nbsp; HTML, CSS, Javascript</p>
                    <p>Library :&nbsp; no Library used</p>
                    <h4>Preview</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./CalculationWebMain.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./CalculationWebComp1.png" alt="Loading"/>
                            <img className="ProgDiv-img" src="./CalculationWebComp2.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./CalculationWebComp3.png" alt="Loading"/>
                            <img className="ProgDiv-img" src="./CalculationWebComp4.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./CalculationWebComp5.png" alt="Loading"/>
                        </div>
                    <h4>Structure</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./CalculationWebStructure.png" alt="Loading"/>
                        </div>
                    <h4>Link to Page</h4>
                        <div className="ProgDiv-prev" style={{marginRight:"75%"}}>
                            <a href="https://calculationcompanion.netlify.app/" target="_blank" rel="noreferrer">
                                Click Here for Link
                            </a>
                        </div>
                </div>

                {/* To-do List */}
                <div className="ProgDiv-body-row">
                    <h2>2nd Project : To-do List</h2>
                    <p>Language used :&nbsp; HTML, CSS, Javascript</p>
                    <p>Library :&nbsp; no Library used</p>
                    <h4>Preview</h4>
                    <div className="ProgDiv-prev">
                        <img className="ProgDiv-img" src="./ToDo1.png" alt="Loading"/>
                        <img className="ProgDiv-img" src="./ToDo2.png" alt="Loading"/>
                    </div>
                    <h4>Structure</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ToDoStructure.png" alt="Loading"/>
                        </div>
                    <h4>Link to Page</h4>
                        <div className="ProgDiv-prev" style={{marginRight:"75%"}}>
                            <a href="https://321todo.netlify.app/" target="_blank" rel="noreferrer">
                                Click Here for Link
                            </a>
                        </div>
                </div>

                {/* Myaccount Website */}
                <div className="ProgDiv-body-row">
                    <h2>3rd Project : MyAccount Website</h2>
                    <p>Language used :&nbsp; HTML, CSS, Javascript</p>
                    <p>Library :&nbsp; React, React router DOM, FontAwesome, React-Chart.js, UUID</p>
                    <h4>Preview</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./MyAccountForm1.png" alt="Loading"/>
                            <img className="ProgDiv-img" src="./MyAccountForm2.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev" >
                            <img className="ProgDiv-img" style={{height:"800px"}} src="./MyAccountForm3.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" style={{transform: "scale(1.2)"}} src="./MyAccountRandom.png" alt="Loading"/>
                        </div>
                    <h4>Structure</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./MyAccountStructure.png" alt="Loading"/>
                        </div>
                    <h4>Link to Page</h4>
                        <div className="ProgDiv-prev" style={{marginRight:"75%"}}>
                            <a href="https://myaccountweb.netlify.app/" target="_blank" rel="noreferrer">
                                Click Here for Link
                            </a>
                        </div>
                </div>

                {/* ECShopping Website */}
                <div className="ProgDiv-body-row">
                    <h2>4th Project : ECShopping Website</h2>
                    <p>Language used :&nbsp; ReactJS {"("}including HTML, CSS, Javascript{")"}</p>
                    <p>Library :&nbsp; React, React router DOM, FontAwesome, MUI {"("}Progressive Bar{")"}, React intersesction observer</p>
                    <h4>Preview</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingShop1.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingShop2.png" alt="Loading"/>
                            <img className="ProgDiv-img" src="./ECShoppingShop3.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingShop4.png" alt="Loading"/>
                            <img className="ProgDiv-img" style={{width:"400px"}} src="./ECShoppingShop5.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingShop6.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingUser1.png" alt="Loading"/>
                            <img className="ProgDiv-img" style={{width:"300px"}} src="./ECShoppingUser2.png" alt="Loading"/>
                        </div>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingStat1.png" alt="Loading"/>
                            <img className="ProgDiv-img" src="./ECShoppingStat2.png" alt="Loading"/>
                        </div>
                    <h4>Structure</h4>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./ECShoppingStructure.png" alt="Loading"/>
                        </div>
                    <h4>Link to Page</h4>
                        <div className="ProgDiv-prev" style={{marginRight:"75%"}}>
                            <a href="https://ecshopping.netlify.app/" target="_blank" rel="noreferrer">
                                Click Here for Link
                            </a>
                        </div>
                </div>

                {/* (Additional) Figma Design */}
                <div className="ProgDiv-body-row">
                    <h2>{"(Additional)"} Figma Design</h2>
                        <p>Diagram</p>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" src="./Diagram Example.png" alt="Loading"/>
                        </div>
                        <p>Webpage</p>
                        <div className="ProgDiv-prev">
                            <img className="ProgDiv-img" style={{marginRight:"120px"}} src="./webpage1.png" alt="Loading"/>
                            <img className="ProgDiv-img" style={{width:"250px", marginRight:"50px"}} src="./CoffeeMobileAppPage1.png" alt="Loading"/>
                        </div>
                </div>

                {/* My portfolio */}
                <div className="ProgDiv-body-row">
                    <h2>My Portfolio</h2>
                    <p>Language used :&nbsp; HTML, CSS, Javascript</p>
                    <p>Library :&nbsp; React, React-router DOM, FontAwesome, React-chart.js</p>
                </div>

            </div>

        </div>
    )
}

export default ProgProject;