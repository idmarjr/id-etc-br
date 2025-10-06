import pluginVue from 'eslint-plugin-vue'
import tsParser from '@typescript-eslint/parser'

export default [
	...pluginVue.configs['flat/recommended'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tsParser
			}
		},
		rules: {
			'vue/html-indent': ['error', 'tab'],
			'vue/singleline-html-element-content-newline': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/html-self-closing': ['error', {
				'html': {
					'void': 'always'
				}
			}]
		}
	}
]
