"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ transaction }) {
			// define association here
			this.hasMany(transaction, { foreignKey: "user_id" });
		}
	}
	user.init(
		{
			uid: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
			},
			username: {
				type: DataTypes.STRING,
				unique: { msg: "Username not available" },
			},
			email: {
				type: DataTypes.STRING,
				unique: { msg: "Email not available" },
				validate: {
					isEmail: { msg: "Invalid Email" },
				},
			},
			password: DataTypes.STRING,
			role: {
				type: DataTypes.STRING,
				defaultValue: "cashier",
			},
		},
		{
			sequelize,
			modelName: "user",
			freezeTableName: true,
		}
	);
	return user;
};
