var mongoose = require("mongoose")
var User = mongoose.model("User")
var Box = mongoose.model("Box")
var Message = mongoose.model("Message")

module.exports = {
    allBoxes: function(req,res) {
        Box.find({},function(err,boxes) {
            if(err) {
                res.json({ServerMessage:"Error", error:err});
            } else {
                res.json({ServerMessage:"Success", Boxes: boxes});
            }
        })
    },

    createBox: function(req,res) {
        Box.create(req.body, function(err, box) {
            if(err) {
                res.json({ServerMessage: "Error", Error: err})
            } else {
                res.json({ServerMessage: "Success", Box: box})
            }
        })
    },

    showBox: function(req,res) {
        Box.findOne({_id: req.params.id}, function(err, box) {
            if(err) {
                res.json({ServerMessage: "Error", Error: err})
            } else {
                res.json({ServerMessage: "Success", Box: box})
            }
        })
    },

    updateBox: function(req,res) {
        Box.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err) {
            if(err) {
                res.json({ServerMessage: "Error", Error: err})
            } else {
                res.json({ServerMessage: "Success"})
            }
        })
    },

    destroyBox: function(req,res) {
        Box.remove({_id: req.params.id}, function(err) {
            if(err) {
                res.json({ServerMessage:"Error", Error: err})
            } else {
                res.json({ServerMessage:"Success"})
            }
        })
    },

    createMessage: function(req,res) {
        Message.create(req.body, function(err, message) {
            if(err) {
                res.json({ServerMessage:"Error", Error: err})
            } else {
                Box.findOneAndUpdate({_id: req.params.id}, {$push: {messages: message}}, function(err, box) {
                    if(err) {
                        res.json({ServerMessage:"Error", Error: err})
                    } else {
                        res.json({ServerMessage:"Success", Box: box})
                    }
                })
            }
        })
    },

    deleteMessage: function(req,res) {
        Message.remove({_id: req.params.sid}, function(err) {
            if(err) {
                res.json({ServerMessage: "Error", Error: err})
            } else {
                Box.findOneAndUpdate({_id:req.params.id}, {$pull: {messages:{_id:req.params.sid}}}, function(err, box) {
                    if(err) {
                        res.json({ServerMessage: "Error", Error: err})
                    } else {
                        res.json({ServerMessage: "Success", Box: box})
                    }
                })
            }
        })
    },

	createUser: function(req,res) {
        User.create(req.body, function(err, user) {
			console.log("300 controller.js createUser.  req.body = ",req.body);
            if(err) {
				console.log("310 controller.js createUser err.  err = ",err);
                res.json({ServerMessage: "Error", Error: err, status: false})
            } else {
				console.log("320 controller.js createUser user.  user = ",user);
                res.json({ServerMessage: "Success", User: user, status: true})
            }
        })
    },
}