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
    copy: {
      js: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: '<%%= dirs.vendor %>/js/**/*.js',
        dest: '<%%= dirs.vendor %>/src/<%= themeNameSpace %>/'
      }
    },
  } );

  // Install Dependencies.
  grunt.registerTask( 'install', [ 'bower', 'copy' ] );
};