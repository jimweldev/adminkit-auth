const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		email: {
			type: String,
			require: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
