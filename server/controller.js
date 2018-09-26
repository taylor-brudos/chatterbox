var mongoose = require("mongoose")
var Box = mongoose.model("Box")
var Message = mongoose.model("Message")

module.exports = {
    allBoxes: function(req,res) {
        Box.find({},function(err,boxes) {
            if(err) {
                res.json({message:"Error", error:err});
            } else {
                res.json({message:"Success", Boxes: boxes});
            }
        })
    },

    
}