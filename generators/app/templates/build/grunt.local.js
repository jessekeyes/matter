module.exports = function( grunt ) {
  
  'use strict';

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
