module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [["babelify", { "presets": ["es2015"] }]]
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "./dist/bundle.js": ["./public/index.js"]
            }
         }
      },
      uglify: {
        my_target: {
          files: {
            'dist/bundle.min.js': ['./dist/bundle.js']
          }
        }
      },
      watch: {
         scripts: {
            files: ["./public/*.js"],
            tasks: ["browserify", "uglify"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks("grunt-contrib-uglify");

   grunt.registerTask("default", ["browserify", "uglify"]);
   grunt.registerTask("w", ["watch"]);
};