'use strict';

module.exports = function( grunt ) {

  // Project configuration
  grunt.config.merge( {
    jshint: {
      browser: {
        all: [
          '<%%= dirs.js %>/src/**/*.js',
          '<%%= dirs.js %>/test/**/*.js'
        ],
        options: {
          jshintrc: '.jshintrc'
        }
      },
      grunt: {
        all: [
          'Gruntfile.js'
        ],
        options: {
          jshintrc: '.gruntjshintrc'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%%= dirs.js %>/admin.js': [ '<%%= dirs.js %>/src/admin/**/*.js' ],
          '<%%= dirs.js %>/head.js': [ '<%%= dirs.js %>/src/head/**/*.js' ],
          '<%%= dirs.js %>/<%= themeNameSpace %>.js': [ '<%%= dirs.js %>/src/<%= themeNameSpace %>/**/*.js' ]
        },
        options: {
          banner: '/*! <%%= pkg.title %> - v<%%= pkg.version %>\n' +
            ' * <%%= pkg.homepage %>\n' +
            ' * Copyright (c) <%%= grunt.template.today("yyyy") %>;' +
            ' */\n',
          sourceMap: true,
          sourceMapIncludeSources: true, 
          sourceMapName: function( dest ) {
            return dest.replace( '/js/', '/maps/' ) + '.map';
          },
          mangle: {
            except: [ 'jQuery' ]
          }
        }
      }
    },
    modernizr: {
      dist: {
        'devFile' : '<%%= dirs.js %>/vendor/modernizr.js',
        'outputFile' : '<%%= dirs.js %>/src/head/modernizr.custom.js',
        'extra' : {
          'mq' : true,
          'cssclasses' : true,
          'shiv' : true
        },
        'extensibility' : {},
        'uglify' : false,
        'files' : {
          src: [ '<%%= dirs.js %>/src/**/*.js', '<%%= dirs.sass %>/**/*.scss' ]
        }
      }
    },

    watch:  {
      scripts: {
        files: [ '<%%= dirs.js %>/src/**/*.js', '<%%= dirs.vendor %>/**/*.js' ],
        tasks: [ 'scripts' ]
      }
    }
  } );

  // Process Scripts.
  grunt.registerTask( 'scripts', [ 'modernizr', 'uglify' ] );
};
