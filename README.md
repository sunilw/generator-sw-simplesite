# generator-simplesite

A generator for [Yeoman](http://yeoman.io).

### simplesite

Simple website generator. 
Provides a grunt task for compiling compass/sass on file save, and connecting to 
the chrome 'livereload' extension.

By default, the compass task generates sass debugging symbols for browser 
extensions like firesass.

This project can be used for scaffolding for test cases or substantial static 
sites.


## Deps

You will need yeoman, grunt and bower.
   
   To get this working, you need node.js and npm installed. 
   You need the following modules:

	  * grunt-contrib-watch
	  * grunt-contrib-compass
	  * grunt-php
	  * grunt-concurrent


Bower will automatically install these for you when you run 'yo simplesite'.
You also need sass and compass installed.

## Recent Changes

Project no longer uses the connect task, enabled by 'grunt-contrib-connect'.
We now use 'grunt-php' and 'grunt-concurrent', to run php as a the server,
and concurrently watch for changes.

## License

MIT license
https://github.com/sunilw/generator-simplesite/LICENSE-MIT


