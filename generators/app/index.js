'use strict';
var yeoman = require( 'yeoman-generator' );
var path = require( 'path' );
var chalk = require( 'chalk' );
var yosay = require( 'yosay' );

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log( yosay(
      'Let’s discover the joy of builing a ' + chalk.bold.blue( 'WordPress' ) + ' theme together.'
    ));

    var prompts = [{
      type: 'input',
      name: 'themeAuthorName',
      message: 'Let’s start with some information about you! What’s your name?',
      store: true
    }, {
      type: 'input',
      name: 'themeAuthor',
      message: 'Ok, I really just needed your name to fill out the Theme Author field. How’s this?',
      store: true,
      default: function( answers ) {
        return answers.themeAuthorName + ' @ Substance';
      }
    }, {
      type: 'input',
      name: 'themeAuthorEmail',
      message: 'Do you have an email address?',
      store: true,
      default: function( answers ) {
        return answers.themeAuthorName.replace( /\W/g, '' ).toLowerCase() + '@findsubstance.com';
      }
    }, {
      type: 'input',
      name: 'themeAuthorURI',
      store: true,
      message: 'And what is your website?',
      default: 'http://www.findsubstance.com'
    }, {
      type: 'input',
      name: 'themeName',
      message: 'Enter a name for your theme. Generally, this should be the name of the client, or specific project.'
    }, {
      type: 'input',
      name: 'themeNameSpace',
      message: 'Enter a unique name-space for your theme. It should be alphanumeric and all lowercase. I like to use the project’s domain name.',
      default: function( answers ) {
        return answers.themeName.replace( /\W/g, '' ).toLowerCase();
      }
    }, {
      type: 'input',
      name: 'themeURI',
      message: 'Enter the new theme’s URL.',
      default: function( answers ) {
        return 'http://www.' + answers.themeNameSpace + '.com';
      }
    }, {
      type: 'input',
      name: 'themeDescription',
      message: 'How about a theme description?',
      default: 'A theme of Substance.'
    }, {
      type: 'input',
      name: 'localDomain',
      message: 'Enter a local domain you’ll use for development.',
      default: function( answers ) {
        return answers.themeNameSpace + '.dev';
      }
    }, {
      type: 'input',
      name: 'repoURL',
      message: 'Enter the git repo url',
      default: function( answers ) {
        return 'git://github.com/substancedev/' + answers.themeNameSpace + '.git'
      }
    }, {
      type: 'input',
      name: 'issuesURL',
      message: 'And the Jira url',
      default: function( answers ) {
        return 'https://substance.atlassian.net/projects/' + answers.themeNameSpace.toUpperCase();
      }
    }, {
      type: 'checkbox',
      name: 'npmDependencies',
      message: 'These are the NPM dependencies that I like. You can deselect them if you don’t.',
      choices: [
        {
          name : 'grunt',
          value : 'grunt matchdep',
          checked : true
        }, {
          name : 'grunt-sass',
          value : 'grunt-sass grunt-contrib-clean',
          checked : true
        }, {
          name : 'autoprefixer',
          value: 'autoprefixer-core grunt-autoprefixer grunt-postcss',
          checked : true
        }, {
          name : 'grunt-browser-sync',
          value: 'grunt-browser-sync grunt-contrib-watch',
          checked : true
        }, {
          name : 'cssnano',
          value: 'cssnano grunt-postcss',
          checked : true
        }, {
          name : 'grunt-bower-task',
          checked : true
        }, {
          name : 'grunt-contrib-jshint',
          checked : true
        }, {
          name : 'grunt-contrib-nodeunit',
          checked : true
        }, {
          name : 'grunt-contrib-uglify',
          checked : true
        }, {
          name : 'grunt-modernizr',
          checked : true
        }, {
          name : 'grunt-notify',
          checked : true
        }, {
          name : 'grunt-scss-lint',
          checked : true
        }
      ],
      filter: function( val ) {

        return val.join( ' ' ).split( ' ' );

      }
      
    }, {
      type: 'checkbox',
      name: 'bowerDependencies',
      message: 'Here are some typical front-end libraries I like. Choose none/some/all.',
      choices: [
        {
          name: 'wp-normalize.scss',
          checked : true
        }, {
          name: 'bourbon',
          checked : true
        }, {
          name: 'neat',
          checked : true
        }, {
          name: 'modernizr',
          checked : true
        }, {
          name: 'responsive-nav',
          checked : true
        }, {
          name: 'fitvids',
          checked : true
        }
      ],
      filter: function( val ) {

        return val.join( ' ' ).split( ' ' );

      }
    }, {
      type: 'list',
      name: 'warmBeverage',
      message: 'Nice work, ' + chalk.bold.red( 'a' ) + chalk.bold.white( 'mi' ) + chalk.bold.green( 'go' ) + '. One last question, just for funsies… do you have a warm beverage preference?',
      choices: [
        {
          name: 'Coffee'
        }, {
          name: 'Tea'
        }, {
          name: 'Cocoa'
        }, {
          name: 'Hot Ham Water'
        }
      ]
    }];

    this.prompt( prompts, function ( props ) {
      this.props = props;

      done();
    }.bind( this ));
  },

  paths: function () {
    this.destinationRoot( this.props.themeNameSpace );
  },

  writing: {
    /*
    app: function () {

      this.fs.copyTpl(
        this.templatePath( '_package.json' ),
        this.destinationPath( 'package.json' ),
        {
          themeAuthorName: this.props.themeAuthorName,
          themeAuthor: this.props.themeAuthor,
          themeAuthorEmail: this.props.themeAuthorEmail,
          themeAuthorURI: this.props.themeAuthorURI,
          themeName: this.props.themeName,
          themeNameSpace: this.props.themeNameSpace,
          themeURI: this.props.themeURI,
          themeDescription: this.props.themeDescription,
          repoURL: this.props.repoURL,
          issuesURL: this.props.issuesURL
        }
      );
      this.fs.copyTpl(
        this.templatePath( '_bower.json' ),
        this.destinationPath( 'bower.json' ),
        {
          themeAuthorName: this.props.themeAuthorName,
          themeAuthor: this.props.themeAuthor,
          themeAuthorEmail: this.props.themeAuthorEmail,
          themeAuthorURI: this.props.themeAuthorURI,
          themeName: this.props.themeName,
          themeNameSpace: this.props.themeNameSpace,
          themeURI: this.props.themeURI,
          themeDescription: this.props.themeDescription,
          repoURL: this.props.repoURL,
          issuesURL: this.props.issuesURL
        }
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath( '_gitignore' ),
        this.destinationPath( '.gitignore' )
      );
      this.fs.copy(
        this.templatePath( 'scss-lint.yml' ),
        this.destinationPath( '.scss-lint.yml' )
      );
      this.fs.copy(
        this.templatePath( 'jshintrc' ),
        this.destinationPath( '.jshintrc' )
      );
      this.fs.copy(
        this.templatePath( 'README.md' ),
        this.destinationPath( 'README.md' )
      );
    },
    
    buildFiles: function () {
      this.fs.copy(
        this.templatePath( 'Gruntfile.js' ),
        this.destinationPath( 'Gruntfile.js' )
      );
      this.fs.copyTpl(
        this.templatePath( 'build/*.js' ),
        this.destinationPath( 'build' ),
        {
          themeAuthorName: this.props.themeAuthorName,
          themeAuthor: this.props.themeAuthor,
          themeAuthorEmail: this.props.themeAuthorEmail,
          themeAuthorURI: this.props.themeAuthorURI,
          themeName: this.props.themeName,
          themeNameSpace: this.props.themeNameSpace,
          themeURI: this.props.themeURI,
          themeDescription: this.props.themeDescription,
          localDomain: this.props.localDomain,
          repoURL: this.props.repoURL,
          issuesURL: this.props.issuesURL
        }
      );
    },
    
    themeAssets: function () {
    },
    */
    allFiles: function () {
      this.fs.copyTpl(
        this.templatePath( '**/*' ),
        this.destinationPath( ),
        {
          themeAuthorName: this.props.themeAuthorName,
          themeAuthor: this.props.themeAuthor,
          themeAuthorEmail: this.props.themeAuthorEmail,
          themeAuthorURI: this.props.themeAuthorURI,
          themeName: this.props.themeName,
          themeNameSpace: this.props.themeNameSpace,
          themeURI: this.props.themeURI,
          themeDescription: this.props.themeDescription,
          localDomain: this.props.localDomain,
          repoURL: this.props.repoURL,
          issuesURL: this.props.issuesURL
        }
      );

      this.fs.move(
        this.destinationPath( '_gitignore' ),
        this.destinationPath( '.gitignore' )
      );
      this.fs.move(
        this.destinationPath( 'scss-lint.yml' ),
        this.destinationPath( '.scss-lint.yml' )
      );
      this.fs.move(
        this.destinationPath( 'jshintrc' ),
        this.destinationPath( '.jshintrc' )
      );
      this.fs.move(
        this.destinationPath( 'README.md' ),
        this.destinationPath( 'README.md' )
      );
      this.fs.move(
        this.destinationPath( '_package.json' ),
        this.destinationPath( 'package.json' )
      );
      this.fs.move(
        this.destinationPath( '_bower.json' ),
        this.destinationPath( 'bower.json' )
      );
      this.fs.move(
        this.destinationPath( 'assets/css/src/theme.scss' ),
        this.destinationPath( 'assets/css/src/' + this.props.themeNameSpace + '.scss' )
      );
      this.fs.move(
        this.destinationPath( 'assets/js/src/theme/theme.js' ),
        this.destinationPath( 'assets/js/src/' + this.props.themeNameSpace + '/' + this.props.themeNameSpace + '.js' )
      );

    },
    
    npmDependencies: function () {
      
      for ( var i in this.props.npmDependencies ) {
        
        this.npmInstall( [ this.props.npmDependencies[i] ], { 'saveDev': true } );
        
      }
      
    },
    
    bowerDependencies: function () {

      for ( var i in this.props.bowerDependencies ) {
        
        this.bowerInstall( [ this.props.bowerDependencies[i] ], { 'save': true } );
        
      }
    }
  },

  install: function () {
    
    this.log( yosay(
      'Looking good, pal! I’m about to install bunch of ' + chalk.bold.blue( 'npm' ) + ' & ' + chalk.bold.yellow( 'bower' ) + ' dependencies. This will take a while, so this is a good time to go make yourself a cup of ' + this.props.warmBeverage + ' that you are so famously fond of.'
    ));
    
    this.installDependencies();
  }
});
