const jwt = require("jsonwebtoken");

module.exports = {
	createToken: (payload) => {
		return jwt.sign(payload, "token123", {
			expiresIn: "30d",
		});
	},
	verifyToken: (token) => {
		return jwt.verify(token, "token123");
	},
};
