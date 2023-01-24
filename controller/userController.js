const { Op } = require("sequelize");
const db = require("../sequelize/models");

module.exports = {
	register: async (req, res) => {
		const validation = "admin";
		const { username, email, password, key } = req.body;
		try {
			if (key !== validation) {
				throw res.status(400).send({
					isError: true,
					message: "Admin key is not valid",
					data: null,
				});
			}
			await db.user.create({ username, email, password, role: "admin" });
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
		const { username, password } = req.query;
		try {
			let { uid, role } = await db.user.findOne({
				where: {
					[Op.and]: [{ username }, { password }],
				},
			});
			return res.status(200).send({
				isError: false,
				message: "Login Success",
				data: {
					uid,
					role,
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
