const users = require('./db');



module.exports.get = () => {
	var promise = users.find({}).exec();
	return promise;
}

module.exports.create = (user) => {
	var promise = users.create(user);
	return promise;
}

module.exports.update = (user) => {
	var promise = users.where({ username: user.username }).update({ $set: user}).exec();
	return promise;
}

module.exports.delete = (username) => {
	var promise = users.where({username:username}).findOneAndRemove().exec();
	return promise;
}
