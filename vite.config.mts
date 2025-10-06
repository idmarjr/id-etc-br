import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// Simple Vite plugin to inject Google Analytics script into HTML head
function injectGoogleAnalytics() {
	return {
		name: 'inject-google-analytics',
		transformIndexHtml(html: string) {
			const gaScriptPath = resolve(__dirname, 'googleAnalyticsScript.js')

			if (existsSync(gaScriptPath)) {
				const gaScript = readFileSync(gaScriptPath, 'utf-8')
				// Inject into the placeholder script tag
				return html.replace('<script id="google-analytics"></script>', `<script id="google-analytics">\n${gaScript}\n\t</script>`)
			}

			return html
		}
	}
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), injectGoogleAnalytics()],
	base: './'
})
