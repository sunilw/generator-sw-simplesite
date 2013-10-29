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
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        name: 'siteName',
        message: 'What do you want to call your site?'
    }];

    this.prompt(prompts, function (props) {
        this.someOption = props.someOption;

        cb();
    }.bind(this));
};

SimplesiteGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.mkdir('app/templates');
    this.mkdir('img');
    this.mkdir('js');
    this.mkdir('css') ;
    this.mkdir('sass');

    // put our templates in place
    this.template('index.html', 'index.html') ;
    this.template('Gruntfile.js', 'Gruntfile.js') ;
    this.template('config.rb', 'config.rb') ;
    this.template('site.sass', 'sass/site.sass') ;
    this.template('_tablet.sass', 'sass/_tablet.sass') ;
    this.template('_desktop.sass', 'sass/_desktop.sass') ;
    
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');


};


SimplesiteGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};