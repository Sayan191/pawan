const Teams = require('../Models/Teams');
var jwt = require('jsonwebtoken')


exports.login = (req, res) => {
    const { teamName } = req.body;

    Teams.find({'teamName':teamName},(err,team)=>{
        //if team doesnt exist...............
        //console.log("1",team)
        if(err){
            const team1 = new Teams(req.body);
            team1.save((err,team)=>{
                if(err){
                    return res.status(404).json({
                        error:err
                    });
                }   
                //creating login session..................
                //console.log(team)
                //generating JWT token
                const token = jwt.sign({teamName:team.teamName},team.teamName);
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
            })
        }
        // if team exist ..........
        else{
            if(req.body.manager == true){
                for(var i=0;i<team.length;i++ ){
                    if(team[i]["teamName"] == teamName){
                        if(team[i]["manager"] == true){
                            if(team[i]["user"] != req.body.user){
                                return res.status(400).send({
                                    error: team[i]["user"]+" is already the manager for the current session"
                                })
                            }
                        }
                    } 
                }
            }


            var flag = false;
            for(var i=0; i<team.length;i++){
                if(team[i]["user"] == req.body.user){
                    if (team[i]["manager"] = req.body.manager){
                        flag = true;
                        break;
                    }
                }
            }
            if (!flag){
                const team1 = new Teams(req.body);
                team1.save((err,team)=>{
                    if(err){
                        return res.status(404).json({
                            error:err
                        });
                    }
                    //creating login session..................
                    //console.log(team)
                    //generating JWT token
                    const token = jwt.sign({teamName:team.teamName},team.teamName);
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
            else{
                //creating login session..................
                //console.log(team)
                //generating JWT token
                const token = jwt.sign({teamName:team[i]["teamName"]},team[i]["teamName"]);
                //put in the cookie
                res.cookie("token",token,{expire: new Date() +9999});
                res.json({
                    token,
                    teamDetails:{
                        name: team[i]["user"],
                        team:team[i]["teamName"],
                        manager:team[i]["manager"]
                    }
                });
            }
        }
    });
}


exports.signout =(req,res) =>{
    res.clearCookie("token")
    return res.send({
        Msg: "Session Ended"
    });
}