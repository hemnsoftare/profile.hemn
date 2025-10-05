import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/insightboard.html.vue"
const data = JSON.parse("{\"path\":\"/projects/insightboard.html\",\"title\":\"InsightBoard - Project Details\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"InsightBoard - Project Details\",\"description\":\"Lightweight analytics dashboards, ready in minutes\"},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Key Features\",\"slug\":\"key-features\",\"link\":\"#key-features\",\"children\":[]},{\"level\":2,\"title\":\"Technical Challenges\",\"slug\":\"technical-challenges\",\"link\":\"#technical-challenges\",\"children\":[]},{\"level\":2,\"title\":\"Results\",\"slug\":\"results\",\"link\":\"#results\",\"children\":[]},{\"level\":2,\"title\":\"Tech Stack\",\"slug\":\"tech-stack\",\"link\":\"#tech-stack\",\"children\":[]}],\"git\":{\"contributors\":[{\"name\":\"Aso A. Sdiq\",\"username\":\"\",\"email\":\"aso.sargaty@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"aa4f48485ed510867b18b7e7ac9137811aa78824\",\"time\":1759699404000,\"email\":\"aso.sargaty@gmail.com\",\"author\":\"Aso A. Sdiq\",\"message\":\"first commit\"}]},\"filePathRelative\":\"projects/insightboard.md\"}")
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
