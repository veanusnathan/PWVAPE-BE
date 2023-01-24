const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = async (password) => {
	try {
		return await bcrypt.hash(password, saltRounds);
	} catch (error) {
		return null;
	}
};

const hashMatch = async (passwordLogin, passwordDB) => {
	try {
		const match = await bcrypt.compare(passwordLogin, passwordDB);
		return match;
	} catch (error) {
		return false;
	}
};

module.exports = {
	hash,
	hashMatch,
};
