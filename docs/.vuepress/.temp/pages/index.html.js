import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"John Doe - Developer Dashboard\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"John Doe - Developer Dashboard\",\"heroImage\":\"/logo.svg\",\"actions\":[],\"features\":[],\"footer\":\"Made with ❤️ using VuePress\",\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/portfolio-vuepress/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Aso A. Sdiq\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"John Doe - Developer Dashboard\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"John Doe - Developer Dashboard\\\"}\"]]},\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"Aso A. Sdiq\",\"username\":\"\",\"email\":\"aso.sargaty@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"d2d3323395e002320e4bbe4ff9316d5e5d28e10c\",\"time\":1759699897000,\"email\":\"aso.sargaty@gmail.com\",\"author\":\"Aso A. Sdiq\",\"message\":\"add gitignore\"},{\"hash\":\"aa4f48485ed510867b18b7e7ac9137811aa78824\",\"time\":1759699404000,\"email\":\"aso.sargaty@gmail.com\",\"author\":\"Aso A. Sdiq\",\"message\":\"first commit\"}]},\"filePathRelative\":\"index.md\",\"autoDesc\":true}")
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
