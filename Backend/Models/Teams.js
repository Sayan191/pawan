var mongoose = require("mongoose");
const {Schema} = mongoose;


var teamScehma = new Schema({
    user: {
        type: String,
        required: true
    },
    teamName:{
        type: String,
        required: true
    },
    manager:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Teams", teamScehma);