import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/taskflow.html.vue"
const data = JSON.parse("{\"path\":\"/projects/taskflow.html\",\"title\":\"TaskFlow - Project Details\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"TaskFlow - Project Details\",\"description\":\"A productivity app for teams with offline-first sync\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/projects/taskflow.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"John Doe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TaskFlow - Project Details\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"A productivity app for teams with offline-first sync\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TaskFlow - Project Details\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Key Features\",\"slug\":\"key-features\",\"link\":\"#key-features\",\"children\":[]},{\"level\":2,\"title\":\"Technical Challenges\",\"slug\":\"technical-challenges\",\"link\":\"#technical-challenges\",\"children\":[]},{\"level\":2,\"title\":\"Results\",\"slug\":\"results\",\"link\":\"#results\",\"children\":[]},{\"level\":2,\"title\":\"Tech Stack\",\"slug\":\"tech-stack\",\"link\":\"#tech-stack\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/taskflow.md\"}")
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
