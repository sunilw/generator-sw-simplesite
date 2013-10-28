module.exports = function (grunt){

    grunt.initConfig({

        compass : {
            dist : {
                options : {
		    config : "config.rb"
                }
            }
        },

        connect : {
            uses_defaults : {}
        },

        watch : {
            files : ['*.html', 'js/*', 'sass/*', 'css/*'],
            tasks : ['compass'],
            options : {
                livereload: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch') ;
    grunt.loadNpmTasks('grunt-contrib-connect') ;
    grunt.loadNpmTasks('grunt-contrib-compass') ;
    grunt.registerTask('default', ['connect','watch'])

} ;