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


    this.template('index.html', 'index.html') ;
    this.template('Gruntfile.js', 'Grunfile.js')
    

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
};


SimplesiteGenerator.prototype.css = function css() {
    this.mkdir('css');

};

SimplesiteGenerator.prototype.sass = function sass() {
    this.mkdir('sass');

};

SimplesiteGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};