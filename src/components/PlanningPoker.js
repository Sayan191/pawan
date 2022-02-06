import React, { useState } from "react";
import Navbar from "./Navbar";
import {isAuthenticated} from "./helper/helper"
import Manager from "./pages/Manager";
import Member from "./pages/Member";
import StoryPoints from "./pages/StoryPoints" 

const PlanningPoker = () =>{
    
    const [showContent, setShowContent] = useState(false);
    const [showDays , setShowDays] = useState("");

    console.log(showContent)

    return(
        <>
            <Navbar
                showContent={false}
                setShowContent={setShowContent}
            />
            {isAuthenticated() && isAuthenticated().teamDetails.manager == true && 
                <Manager />   
            }
            {isAuthenticated() && isAuthenticated().teamDetails.manager == false && 
                <Member />            
            }
            {showContent && <StoryPoints />}
        </>    
    )
}

export default PlanningPoker;