const Teams = require('../Models/Teams');
var jwt = require('jsonwebtoken')


exports.check = (req, res,next) => {
    const { user,teamName,manager } = req.body;
    console.log(teamName);
    Teams.findOne({'teamName':teamName},(err,team)=>{
        //if team doesnt exist...............
        console.log(err,team)
        if(err==null || err){
            const team1 = new Teams(req.body);
            team1.save((err,teamN)=>{
                if(err){
                    return res.status(404).json({
                        error:"NOT able to save user in Database"
                    });
                }
                console.log(teamN)
            })
        };
    });
    next();
}

exports.login= (req,res) =>{
    const { user,teamName,manager } = req.body;
    Teams.findOne({'teamName':teamName},(err,team)=>{
        console.log(err,team)
        if(err  || team==null){
            return res.status(400).json({
                err:"aerror"
            });
        }

        // creating login session..................
        console.log(team)
        //generating JWT token
        const token = jwt.sign({teamName:team.teamName},"Pawan");
        //put in the cookie
        res.cookie("token",token,{expire: new Date() +9999});
        
        const{user, teamName, manager} = team;
        res.json({
            token,
            teamDetails:{
                name: user,
                team:teamName,
                manager:manager
            }
        }); 
    });
    
}

exports.signout =(req,res) =>{
    res.clearCookie("token")
    return res.send({
        Msg: "Session Ended"
    });
}