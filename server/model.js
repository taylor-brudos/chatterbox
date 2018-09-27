var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/chatterbox')

var UserSchema = new mongoose.Schema(
	{
		username: {
			type: String, required: [true, "Username must be provided"]
		},

		location: {
			type: String, required: [true, "Location must be provided"]
		},
		
		funfact: {
			type: String, required: [true, "Fun fact must be provided. (come on!)"]
		},
	},
	{ timestamps: true }

);

var MessageSchema = new mongoose.Schema(
	{
		username: {
			type: String, required: [true, "Username must be provided"]
		},

		content: {
			type: String, required:[true, "Message must have content!"]
		}
	},
	{ timestamps: true }

);

var BoxSchema = new mongoose.Schema(
	{
		topic: {
			type:String, required: [true, "Topic cannot be empty!"],
			minlength: [3, "Topic must be at least 3 characters long"]
		},
		
		desc: {
			type: String, required: [true,"Description cannot be empty!"],
			minlength: [5, "Description must be at least 5 characters long"]
		},

		welcome: {
			type: String, required: [true,"Must have a welcome message!"],
			minlength: [5, "Welcome msg must be at least 5 characters"]
		},

	messages: [MessageSchema]

	}, 
	{timestamps:true}

)

mongoose.model("User", UserSchema)
mongoose.model("Message", MessageSchema)
mongoose.model("Box", BoxSchema)
