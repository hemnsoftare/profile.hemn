export const siteData = JSON.parse("{\"base\":\"/portfolio-vuepress/\",\"lang\":\"en-US\",\"title\":\"Aso A. Sdiq\",\"description\":\"Developer Portfolio\",\"head\":[[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#0ea5e9\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.svg\"}],[\"link\",{\"rel\":\"canonical\",\"href\":\"https://example.com\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
