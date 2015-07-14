'use strict';

module.exports = function( grunt ) {

  // Bower configuration
  grunt.config.merge( {
    bower: {
      install: {
        options: {
          cleanup: true,
          copy: true,
          install: true,
          layout: 'byType',
          targetDir: '<%%= dirs.vendor %>'
        }
      }
    },
  } );

  // Install Dependencies.
  grunt.registerTask( 'install', [ 'bower' ] );
};