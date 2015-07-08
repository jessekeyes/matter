'use strict';

module.exports = function( grunt ) {

  // Local project configuration
  grunt.config.merge( {
    browserSync: {
      dev: {
        options: {
          proxy: '<%= localDomain %>'
        }
      }
    }
  } );
};