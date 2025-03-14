module.exports = function(grunt) {
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          './build/styles/main.css':'./source/styles/main.less'
        }
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          './dist/styles/main.min.css':'./source/styles/main.less'
        }
      }
    },
    replace: {
      build: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS',
              replacement: './styles/main.css'
            },
            {
              match: 'ENDERECO_DO_JS',
              replacement: '../source/scripts/main.js'
            },
            {
              match: 'ENDERECO_DO_FAVICON',
              replacement: '../source/img/icon-arceus.png'
            },
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./source/index.html'],
            dest: 'build/'
          }
        ]
      },
      dist: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS',
              replacement: './styles/main.min.css'
            },
            {
              match: 'ENDERECO_DO_JS',
              replacement: './scripts/main.min.js'
            },
            {
              match:'ENDERECO_DO_FAVICON',
              replacement: '../source/img/icon-arceus.png'
            }
          ]
        },
        files: [
          {
            expand:true,
            flatten: true,
            src: ['./prebuild/index.html'],
            dest: 'dist/'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'prebuild/index.html':'source/index.html'
        }
      }
    },
    clean: ['prebuild'],
    watch: {
      less: {
        files: ['./source/styles/main.less'],
        tasks: ['less:development']
      },
      html: {
        files: ['./source/index.html'],
        tasks: ['replace:build']
      }
    },
    uglify: {
      target: {
        files: {
          'dist/scripts/main.min.js' : 'source/scripts/main.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less:production','htmlmin:dist','replace:dist','clean','uglify']);

}