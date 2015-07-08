# Welcome to your theme's workflow guide!
This guide will help you set up the proper (front end) development workflow using GruntJS, SASS, BowerJS and other NodeJS modules.

## Requirements
Likely, if you've generated this theme with the Yeoman generator, you already have these requirements:

* [NodeJS](http://www.nodejs.org/download/)
* [Bower](http://bower.io/#install-bower) `npm install -g bower`
* [Yeoman](http://yeoman.io/) `npm install -g yo`
* Install the Neato yeoman generator: `npm install -g https://github.com/jessekeyes/neato/tarball/master`
* Run `npm install` if you haven't already.

## Using Bower and grunt's initial task
If you haven't already, you'll need to run Bower to install the necessary versions and dependencies used in your project.

`grunt install`

You may have to run this again if any new dependencies have been added by another developer. Currently, there is no way to automate this process other than direct communication.

If you are the one adding a dependency to the project via bower, use the following command to automatically add it as a depencecy to the bower.json file:

`bower install <package> --save`
(be sure to run this in the same dir as the bower.json file; the theme's root)

And then you should run `grunt install` again (see below).

### Bower components
Usually, bower components are stored in a folder (bower_components), but the grunt task will move these to a vendor/ dir. The main vendor dir is located `YourTheme/assets/vendor`.All bower components will be placed there when you run `grunt install`.

If you're adding a new bower component and dependency to the project, you'll need to run the bower command above and then `grunt install` to move it.

### Developing with SASS, Uglify via Grunt
Currently this theme is set up with SASS CSS preprocessor (using node-sass!) and Uglify to process and minify JavaScript. Edit and add files in the `assets/src` dir which has the following layout:

* `assets/src/scss` - All custom/project sass files should be used here.
* `assets/src/css` - unminified generated CSS files here. _Do not edit any generated files here (usually main.css)_
* `assets/src/js` - JS files needed for the project go and are edited here. Except for `admin` and `head`, all JS is concatinated and minified into `assets/js/app.js`
* `assets/src/js/admin/` - All JS files here get concatinated into `assets/js/admin.js`
* `assets/src/js/head/` - All JS files here get concatinated into `assets/js/head.js` and are exposed in the HTML <head> (the rest is usually set in the footer). See Modernizr, below.
* `assets/src/js/vendor` - any JS plugins that _aren't_ managed by Bower should go here. They'll have to be referenced manually (via the WP enqueue function or other method).

Other directories of note:

* `assets/css/` - All generated and minified CSS lives here _do not edit directly_
* `assets/img/` - where all theme and design graphics should go.
* `assets/fonts/` - any font files should go here.

#### Using Grunt
The recommended way to use GruntJS for this project is to set up two "watch" instances where grunt will preprocess files on the fly as you save/add/remove them.

* `grunt styles` - processes all SASS files into CSS, autoprefixes, and minifies. Watch task: `grunt watch:styles`
* `grunt scripts` - processes all JS, concatinates and minifes into app.js, admin.js, head.js. Watch task: `grunt watch:scripts`
* `grunt install` - runs bower tasks and the above two tasks to set the template up on intial load.
* `grunt` - the default taks, runs `styles` and `scripts`.

_Note: it's a good idea to turn off any watch tasks when merging branches as recompiling scripts and styles may cause conflicts in git_

## favicons
This theme doesn't come with any default favicons or touch icons. Generate them using [this generator](http://realfavicongenerator.net), and update the header.php code and place the files at the web root.

## Bower
Do you want to add a Javascript library? This is how you do it:

## Post Types & Taxonomies
All `.php` files in `post-types`, `taxonomies`, and `widgets` are automatically `require`d. If you install [WP-CLI](http://wp-cli.org/), you can quickly generate post types and taxonomies with the following commands, answering `Y` to `--theme` and `n` to `--raw`:
* Post Types: `wp scaffold post-type --prompt`
* Taxonomies: `wp scaffold taxonomy --prompt`