var mongoose = require('mongoose');
 
describe('mongoose',function(){
	it('connect to host',function(done){
		var promise = mongoose.connect('mongodb://admin:dKLvQe@cluster0-shard-00-00-zq8p9.mongodb.net:27017,cluster0-shard-00-01-zq8p9.mongodb.net:27017,cluster0-shard-00-02-zq8p9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
		done();
	})
})
