import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/\",\"title\":\"Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects\",\"description\":\"Featured work by John Doe\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/projects/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"John Doe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Projects\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Featured work by John Doe\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Projects\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/index.md\"}")
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
