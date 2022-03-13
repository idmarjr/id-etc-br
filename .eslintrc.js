module.exports = {
	extends: [
	  'plugin:vue/vue3-recommended',
	],
	rules: {
		// Override/add rules settings here:
		'vue/html-indent': [ 'error', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always'
			}
		}]
	}
}