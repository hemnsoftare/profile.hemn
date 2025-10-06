import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
	base: '/profile/',
	lang: 'en-US',
	
	head: [
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		['meta', { name: 'theme-color', content: '#0ea5e9' }],
		['link', { rel: 'icon', href: '/favicon.svg' }],
		['link', { rel: 'canonical', href: 'https://example.com' }],
	],
	theme: defaultTheme({
		logo: '/images/hemn.png',
		navbar: [
			{ text: 'Home', link: '/' },
			{ text: 'Skills', link: '/stack.html' },
			{ text: 'Projects', link: '/projects/' },
			{ text: 'About', link: '/about.html' },
		],
		sidebar: false,
		lastUpdated: false,
		contributors: false,
	}),
	plugins: [
		seoPlugin({ hostname: 'https://example.com' }),
		sitemapPlugin({ hostname: 'https://example.com' }),
	],
	bundler: viteBundler(),
})
