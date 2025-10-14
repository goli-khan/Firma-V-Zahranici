const firmaUser = require("../Model/firma_user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
	const { email, password, role } = req.body;

	if (!email || !password) throw new Error("email or password missing");

	try {
		const already_user = await firmaUser.findOne({ email });
		if (already_user) throw new Error("User already in database");
		console.log("one");
		const hash_password = await bcrypt.hash(password, 10);
		console.log(hash_password);
		const newUser = await firmaUser.create({
			email,
			password: hash_password,
			role,
		});
		console.log("three");
		res.json({
			message: "suckseeded",
			newUser,
		});
	} catch (error) {
		console.error(error);
	}
};

const loginController = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) throw new Error("missing email | password");

	try {
		const user_exist = await firmaUser.findOne({ email });
		if (!user_exist) throw new Error("there is no user like this");

		const password_compare = await bcrypt.compare(
			password,
			user_exist.password,
		);

		if (!password_compare) throw new Error("the passowrd is wrong");

		const token = jwt.sign(
			{ email: user_exist.email, id: user_exist._id, role: user_exist.role },
			process.env.SECRET,
			{ expiresIn: "9d" },
		);

		res.send({
			message: "suckseed",
			token,
			user_exist,
		});
	} catch (error) {
		console.error(error);
	}
};

module.exports = { loginController, registerController };
