import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"Get Started This is a normal page, which contains VuePress basics. Pages You can add markdown files in your vuepress directory, every markdown file will be converted to a page i...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/get-started.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"John Doe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Get Started\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Get Started This is a normal page, which contains VuePress basics. Pages You can add markdown files in your vuepress directory, every markdown file will be converted to a page i...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Get Started\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
