'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var SimplesiteGenerator = module.exports = function SimplesiteGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SimplesiteGenerator, yeoman.generators.Base);

SimplesiteGenerator.prototype.askFor = function askFor() {
    var cb = this.async() ;
    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        name: 'siteName',
        message: 'What do you want to call your site?'
    }];

    this.prompt(prompts, function (props) {
        this.siteName = props.siteName;

        cb();
    }.bind(this));
};

SimplesiteGenerator.prototype.app = function app() {

    var siteName = this.siteName ;
    this.mkdir( siteName +'/app');
    this.mkdir(siteName +'/app/templates');
    this.mkdir(siteName + '/img');
    this.mkdir(siteName +'/js');
    this.mkdir(siteName +'/css') ;
    this.mkdir(siteName +'/sass');

    // put our templates in place
    this.template  ('index.html', siteName +'/index.html') ;
    this.template( 'Gruntfile.js', siteName +'/Gruntfile.js') ;
    this.template('config.rb', siteName +'/config.rb') ;
    this.template('site.sass', siteName +'/sass/site.sass') ;
    this.template('_tablet.sass', siteName + '/sass/_tablet.sass') ;
    this.template('_desktop.sass', siteName +'/sass/_desktop.sass') ;

    this.copy('_package.json', siteName +'/package.json');
    this.copy('_bower.json', siteName +'/bower.json');
    this.copy('package.json', siteName + '/package.json');

};


SimplesiteGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};
