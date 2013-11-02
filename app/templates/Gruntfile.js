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
    
    grunt.registerTask('default', ['connect','watch'])

} ;