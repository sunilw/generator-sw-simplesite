var phpMiddleware = require('connect-php');

module.exports = function (grunt){

    grunt.initConfig({

        compass : {
            dist : {
                options : {
                    cssDir : 'css',
                    sassDir : 'sass',
                    debugInfo : true
                }
            }
        },

        connect : {
            uses_defaults : {},
	    
	    options: {
		port: 9000,
		livereload: 35729,
		hostname: 'localhost',
		middleware: function(connect, options) {
		    var middlewares = [];
		    var directory = options.directory ||
			    options.base[options.base.length - 1];
		    if (!Array.isArray(options.base)) {
			options.base = [options.base];
		    }

		    // Here comes the PHP middleware
		    middlewares.push(phpMiddleware(directory));

		    // Same as in grunt-contrib-connect
		    options.base.forEach(function(base) {
			middlewares.push(connect.static(base));
		    });

		    middlewares.push(connect.directory(directory));
		    return middlewares;
		}
		
        },

        watch : {
            files : ['*.html', 'js/*', 'sass/*', 'css/*'],
            tasks : ['compass'],
            options : {
                livereload: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-contrib-compass');
   
    grunt.registerTask('default', ['connect','watch'])

} ;
