import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Login from "./src/components/Login";
import PlanningPoker from "./src/components/PlanningPoker";

const Routesss = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/planningpoker" element={<PlanningPoker/>}/>
            </Routes>
        </Router>
    )
}

export default Routesss;