import './App.css';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import ProgProject from './ProgProject/ProgProject';
import Skill from './Skill/Skill';
import WorkExp from './WorkExp/WorkExp';
import Home from './Home/Home';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className='App-Body'> 
      
      <div className='App-banner'>
        <NavLink to="/" className='banner-txt'>
        <p><FontAwesomeIcon icon={faFileAlt} className='banner-txt-icon' />My Portfolio</p>
        </NavLink>

        <div className='banner-btndiv'>
          <NavLink to="/AboutMe" className="banner-btn">About Me</NavLink>
          <NavLink to="/Education" className="banner-btn">Education</NavLink>
          <NavLink to="/ProgProject" className="banner-btn" style={{width:"450px"}}>Programming Project</NavLink>
          <NavLink to="/WorkExp" className="banner-btn" style={{width:"350px"}}>Work Experience</NavLink>
          <NavLink to="/Skill" className="banner-btn" style={{marginRight:"30px"}}>Skill</NavLink>
        </div>
      </div>

      <div className='App-div'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutMe" element={<AboutMe/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/WorkExp" element={<WorkExp/>}/>
          <Route path="/Skill" element={<Skill/>}/>
          <Route path="/ProgProject" element={<ProgProject/>}/>  
        </Routes>
      </div>
      
      <div className='App-footer'>

      </div>

    </div>
  );
}

export default App;
