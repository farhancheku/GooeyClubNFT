
import React from "react";
import { useState } from "react";
import NavBar from "./Component/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import data from "./Pages/TeamData";
import Index from "./Component/Index";
import Footer from "./Component/Footer";
import WhiteList from "./Component/WhiteList";
import About from "./Component/About";
import RoadMap from "./Component/RoadMap";
import Team from "./Component/Team";
import "./app.css"

function App() {

// const [teamdata, setTeamdata] = useState(data)
// console.log(data, "Test");


  return (
  <>
    <Router>
     <NavBar/>
                              {/* <Routes>
                                <Route index element={<LeagueStandings />} />
                              </Routes> */}
      <Index/>
      <About />
      <WhiteList/>
      <RoadMap/>
      <Team/>
      <Footer/>
     </Router>  
  </>
    )
}

export default App;
