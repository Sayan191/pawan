import React from "react";
import Navbar from "./Navbar";
import {isAuthenticated} from "./helper/helper"
import Manager from "./pages/Manager";
import Member from "./pages/Member";

const PlanningPoker = () =>{
    
    const {user,teamName,manager} = isAuthenticated().teamDetails;

    return(
        <>
            <Navbar />
            {isAuthenticated() && isAuthenticated().teamDetails.Navbarmanager == true && 
                <Manager />   
            }
            {isAuthenticated() && isAuthenticated().teamDetails.manager == false && 
                <Member />            
            }
        </>    
    )
}

export default PlanningPoker;