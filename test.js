var _ = require('lodash');
var del = require('del');
var glob = require('glob');
var path = require('path');
var fs = require('fs');
var test = require('ava');
var mkdirp = require('mkdirp');
var tempfile = require('tempfile');
var creaturesData = require('data-creatures');

var self = require('./');

test.cb('should flatten files and rename it',function(t){
	// t.plan(3);

	var tmpFolder = tempfile();

	var creatures = creaturesData({size:3,plural:true});

	_.each(creatures,function(creature){
		_.each([
			'atk',
			'run',
			'die',
		],function(action){
			mkdirp.sync(path.join(tmpFolder,creature,action))

			_.times(_.random(1,10),function(i){
				fs.writeFileSync(path.join(tmpFolder,creature,action,_.padStart(i,3,'0')+'.png'),'Yup, that tasted purple');
			});
		})
	})


	self(path.join(tmpFolder,'/**/*'), tmpFolder,function(err,data){
		// console.log(glob.sync(path.join(tmpFolder,'/*'),{nodir:true}));

		t.falsy(err);
		t.truthy(glob.sync(path.join(tmpFolder,'/*'),{nodir:true}).length);
		t.pass();
		t.end();
	})
});
