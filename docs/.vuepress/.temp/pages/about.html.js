import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About\",\"description\":\"Full-Stack developer focused on DX, performance and accessibility\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/about.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"John Doe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"About\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Full-Stack developer focused on DX, performance and accessibility\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"About\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"filePathRelative\":\"about.md\"}")
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
