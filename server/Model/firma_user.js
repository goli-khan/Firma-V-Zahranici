const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
		default: "user",
	},
});

module.exports = mongoose.model("firmaUser", Schema);
