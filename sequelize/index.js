const { sequelize } = require("./models");

sequelize
	.authenticate()
	.then(() => {
		return sequelize.sync({ alter: true });
	})
	.then(() => {
		return console.log("Synced");
	})
	.catch((err) => {
		return console.log(err);
	});
