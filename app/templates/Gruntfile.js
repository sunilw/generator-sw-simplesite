module.exports = function (grunt){
    grunt.initConfig({

        sass  : {
            dist : {
                options : {
                },
                files : {
                    'css/site.css' : 'sass/site.sass'
                }
            }
        },

        php :{
            dist : {
                options : {
                    keepalive : true,
                    port: 9000
                }
            }
        }, // ends php task

        watch : {
            styles  : {
                files : [ 'sass/*'],
                tasks : ['sass']
            }, // ends watch/styles
            templates : {
                files : ['*.php', '*.html'],
                tasks : []
            },

            reload : {
                files : ['*/*'],
                tasks : [],
                options : {
                    livereload : true
                }
            },
        },

        concurrent : {
            target1 : ['php', 'watch:styles', 'watch:templates', 'watch:reload']
        }

    });  // end task defintions

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask( 'default' , ['concurrent'] ) ;

} ;
