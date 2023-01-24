"use strict";
const { Model } = require("sequelize");
const category = require("./category");
module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ transaction, category }) {
			// define association here
			this.hasMany(transaction, { foreignKey: "product_id" });
			this.belongsTo(category, { foreignKey: "category_id" });
		}
	}
	product.init(
		{
			name: DataTypes.STRING,
			price: DataTypes.INTEGER,
			stock: DataTypes.INTEGER,
			img: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "product",
			freezeTableName: true,
			timestamps: false,
		}
	);
	return product;
};
