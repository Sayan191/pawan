import React from "react";
import Navbar from "./Navbar";
import {isAuthenticated} from "./helper/helper"
import Manager from "./pages/Manager";
import Member from "./pages/Member";

const PlanningPoker = () =>{
    
    const {name,team} = isAuthenticated();

    return(
        <>
            <Navbar />
            {isAuthenticated() && isAuthenticated().manager == true && 
                <Manager />   
            }
            {isAuthenticated() && isAuthenticated().manager == false && 
                <Member />            
            }
        </>    
    )
}

export default PlanningPoker;