import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/stack.html.vue"
const data = JSON.parse("{\"path\":\"/stack.html\",\"title\":\"Tech Stack\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tech Stack\",\"description\":\"Tools and technologies I use to build fast, accessible products\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/portfolio-vuepress/stack.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Aso A. Sdiq\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Tech Stack\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Tools and technologies I use to build fast, accessible products\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Tech Stack\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"Aso A. Sdiq\",\"username\":\"\",\"email\":\"aso.sargaty@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"aa4f48485ed510867b18b7e7ac9137811aa78824\",\"time\":1759699404000,\"email\":\"aso.sargaty@gmail.com\",\"author\":\"Aso A. Sdiq\",\"message\":\"first commit\"}]},\"filePathRelative\":\"stack.md\"}")
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
