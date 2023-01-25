const { Op } = require("sequelize");
const { hash, hashMatch } = require("../lib/hash");
const { createToken } = require("../lib/jwt");
const db = require("../sequelize/models");

module.exports = {
	register: async (req, res) => {
		const validation = "admin";
		const { username, email, password, key } = req.body;
		try {
			if (key !== validation) {
				return res.status(400).send({
					isError: true,
					message: "Admin key is not valid",
					data: null,
				});
			}
			await db.user.create({ username, email, password: await hash(password), role: "admin" });
			return res.status(201).send({
				isError: false,
				message: "Admin Created",
				data: null,
			});
		} catch (error) {
			return res.status(400).send({
				isError: true,
				message: error.message,
				data: error,
			});
		}
	},
	login: async (req, res) => {
		const { username, password } = req.body;
		try {
			let data = await db.user.findOne({
				where: { username },
			});
			if (!hashMatch(password, data.password)) {
				throw res.status(400).send({
					isError: true,
					message: "Invalid Password",
					data: null,
				});
			}
			return res.status(200).send({
				isError: false,
				message: "Login Success",
				data: {
					uid: createToken(data.uid),
					role: data.role,
				},
			});
		} catch (error) {
			return res.status(400).send({
				isError: true,
				message: error.message,
				data: error,
			});
		}
	},
};
