"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class transaction extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ product, user }) {
			// define association here
			this.belongsTo(user, { foreignKey: "user_id" });
			this.belongsTo(product, { foreignKey: "product_id" });
		}
	}
	transaction.init(
		{
			price: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "transaction",
			freezeTableName: true,
		}
	);
	return transaction;
};
