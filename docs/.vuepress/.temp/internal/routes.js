export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/TOTAL TECH/Desktop/New folder/vuepress/mala/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/TOTAL TECH/Desktop/New folder/vuepress/mala/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"home"} }],
  ["/stack.html", { loader: () => import(/* webpackChunkName: "stack.html" */"C:/Users/TOTAL TECH/Desktop/New folder/vuepress/mala/docs/.vuepress/.temp/pages/stack.html.js"), meta: {"title":"Tech Stack"} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"C:/Users/TOTAL TECH/Desktop/New folder/vuepress/mala/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"title":"Projects"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/TOTAL TECH/Desktop/New folder/vuepress/mala/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
