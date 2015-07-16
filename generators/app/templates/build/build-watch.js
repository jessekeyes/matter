'use strict';

module.exports = function( grunt ) {

  // Project configuration
  grunt.config.merge( {
    watch:  {
      options: {
        atBegin: false,
        spawn: false
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            '<%%= dirs.css %>/*.css',
            '<%%= dirs.js %>/*.js',
            '*.php',
            'includes/*.php',
            'partials/*.php'
          ]
        },
        options: {
          watchTask: true,
          open: false
        }
      }
    }
  } );

  // Watch.
  grunt.registerTask( 'live', [ 'browserSync', 'watch' ] );

};