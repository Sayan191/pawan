const Teams = require('../Models/Teams');
const Team = require('../Models/Teams');

exports.login = (req, res) => {
    const { user,teamName,manager } = req.body;
    
    Team.findOne({teamName},(err,team)=>{

        //if team doesnt exist...............
        if(err){
            const team1 = new Team(req.body);
            team1.save((err,team)=>{
                if(err){
                    return res.status(400).json({
                        error:"NOT able to save user in Database"
                    });
                }
                res.json({
                    user: team.user,
                    name : teamName,
                    manager: team.manager
                }); 
            })
        };
    });
    
}