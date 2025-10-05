import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
	lang: 'en-US',
	title: 'John Doe',
	description: 'Full-Stack Developer Portfolio',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		['meta', { name: 'theme-color', content: '#0ea5e9' }],
		['link', { rel: 'icon', href: '/favicon.svg' }],
		['link', { rel: 'canonical', href: 'https://example.com' }],
	],
	theme: defaultTheme({
		logo: '/logo.svg',
		navbar: false,
		sidebar: [
			{
				text: 'Dashboard',
				children: [
					{ text: '🏠 Home', link: '/' },
					{ text: '⚙️ Tech Stack', link: '/stack.html' },
					{ text: '🛠 Projects', link: '/projects/' },
					{ text: '🙋 About', link: '/about.html' },
					{ text: '✉️ Contact', link: '/contact.html' },
				]
			}
		],
		lastUpdated: false,
	}),
	plugins: [
		seoPlugin({ hostname: 'https://example.com' }),
		sitemapPlugin({ hostname: 'https://example.com' }),
	],
	bundler: viteBundler(),
})
