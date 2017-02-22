var path = require('path');
var fs = require('fs-extra');
var glob = require('glob');
var async = require('async');
var _ = require('lodash');

// insert defaults here
var defaults = {
	split:'_$_'
}

var self = function(src, dest, options, done){
	if(typeof options==='function') {
		var tmpVar = options;
		options = done ? done : {};
		done = tmpVar;
	}
	options = _.extend({},defaults,options);

	async.auto({
		files:function(callback){
			glob(src,{nodir:true},callback);
		},
		rename:['files',function(results,callback){
			var run = [];

			_.each(results.files,function(file){
				var data = path.parse(file);

				var newName = path.format({
					// dir:dest,
					name:file.replace(/\//g,options.split),
					ext:'',
				});

				run.push(function(callback){
					fs.copy(file,path.join(dest,newName),callback);
				});
			});

			async.parallel(run,callback);
		}]
	},function(err,results){
		if(done) done(err,results);
	})
}

module.exports = self;
