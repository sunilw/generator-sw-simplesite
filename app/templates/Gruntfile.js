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
	
	php :{	    
	    dist : { 
		options : {
		    keepalive : true,
		    open: true,
		    port: 9000
		}
	    }	    
	},    	

	watch : {
            files : ['*.html',  '*.php',  'js/*', 'sass/*', 'css/*'],
            tasks : ['compass'],
            options : {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-contrib-compass');   
     grunt.registerTask('default', ['php', 'watch']) ;

} ;
