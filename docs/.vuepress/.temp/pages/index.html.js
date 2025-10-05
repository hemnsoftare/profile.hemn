import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"John Doe - Developer Dashboard\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"John Doe - Developer Dashboard\",\"heroImage\":\"/logo.svg\",\"actions\":[],\"features\":[],\"footer\":\"Made with ❤️ using VuePress\",\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"John Doe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"John Doe - Developer Dashboard\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"John Doe - Developer Dashboard\\\"}\"]]},\"headers\":[],\"git\":{},\"filePathRelative\":\"index.md\",\"autoDesc\":true}")
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
