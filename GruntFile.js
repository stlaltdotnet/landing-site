module.exports = function(grunt) {
	// Initialize configuration file
	grunt.initConfig({
		uglify: {
			plugins: {
				options: {
					sourceMap: false,
					sourceMapIncludeSources: true,
					mangle: true,
					beautify: false,
					compress: true
				},
				files: {
					'js/plugins.min.js': [
						"js/fancybox/jquery.fancybox.js",
						"js/totop/jquery.ui.totop.js",
						"js/scrollbar/jquery.mCustomScrollbar.concat.min.js",
						"js/scrollbar/jquery.nicescroll.js",
						"js/flickr/jflickrfeed.min.js",
						"js/carousel/carousel.js",
						"js/nav/tinynav.js",
						"js/nav/superfish.js",
						"js/smooth-scroll.js",
						"js/bootstrap.js",
						"js/moment.js",
						"js/knockout.js",
						"js/jquery-func.js",
						"js/modernizr.js"
					]
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'css/style.min.css': [
						"css/bootstrap/bootstrap.css",
						"css/bootstrap/bootstrap-theme.css",
						"js/fancybox/jquery.fancybox.css",
						"css/scrollbar/jquery.mCustomScrollbar.css",
						"css/hover/style.css",
						"css/carousel/carousel.css",
						"css/carousel/owl.theme.css",
						"css/animations/animate.css",
						"css/transitions.css",
						"css/flickr/flickr.css",
						"css/skins/theme-options.css",
						"css/video/video.css",
						"css/style.css"
					]
				}
			}
		},
		htmlmin: {
			dist: { // Target
				options: { // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: { // Dictionary of files
					'index.html': 'index.src.html', // 'destination': 'source'
				}
			}
		}
	});

	// Load our npm grunt tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('build', ['uglify:plugins', 'cssmin', 'htmlmin:dist'])
};