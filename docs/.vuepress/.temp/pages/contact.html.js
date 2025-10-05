import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/contact.html.vue"
const data = JSON.parse("{\"path\":\"/contact.html\",\"title\":\"Contact\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Contact\",\"description\":\"Get in touch for collaboration or opportunities\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/contact.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"John Doe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Contact\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Get in touch for collaboration or opportunities\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Contact\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"filePathRelative\":\"contact.md\"}")
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
