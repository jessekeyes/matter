# matter
### A WordPress starter-theme generator for Yeoman.

_Inspired by:_
* [_s](http://underscores.me)
* [HTML5 Boilerplate](http://html5boilerplate.com)
* [neato](http://github.com/jessekeyes/neato)


## Build Requirements
* [NodeJS](http://www.nodejs.org/)
* [NPM](http://www.npmjs.com/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)
* [Yeoman](http://yeoman.io/)
* [NodeSass](http://github.com/sass/node-sass)
* [Browsersync](http://browsersync.io/)


## Installing
Once you have NodeJS & NPM installed, all other requirements can be installed with:
```bash
npm install -g bower browser-sync grunt-cli node-sass yo
```

Install matter:
```bash
npm install -g git+ssh://git@github.com:oknoway/matter.git
```


## Generate your theme
`cd` to your WordPress themes directory and initiate the generator:

```bash
yo matter
```

Once installation is finished, `cd` to your new theme directory and run `grunt`.


## Post Types & Taxonomies
This is a great time to add any custom post types and taxonomies. If you install [WP-CLI](http://wp-cli.org/), you can quickly generate post types and taxonomies with the following commands, answering `Y` to `--theme` and `n` to `--raw`:
* Post Types: `wp scaffold post-type --prompt`
* Taxonomies: `wp scaffold taxonomy --prompt`


## TODO
* Prompts for:
  * Post Types
  * Taxonomies
  * Sidebars
  * Widgets
  * Nav Menus
* SubGenerators
  * neato


## Contributing
Please fork, change and pull request!

To setup matter for development, first uninstall from matter from npm:
```bash
npm uninstall -g generator-matter
```

Clone the generator to the directory of your choosing (use your fork for the repo URL, if you have one):
```bash
git clone git@github.com:oknoway/matter.git
```

`cd` into that directory and run:

```bash
npm link
```


## License
GPL2
