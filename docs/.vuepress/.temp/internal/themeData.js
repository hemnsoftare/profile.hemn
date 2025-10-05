export const themeData = JSON.parse("{\"logo\":\"/logo.svg\",\"navbar\":false,\"sidebar\":[{\"text\":\"Dashboard\",\"children\":[{\"text\":\"🏠 Home\",\"link\":\"/\"},{\"text\":\"⚙️ Tech Stack\",\"link\":\"/stack.html\"},{\"text\":\"🛠 Projects\",\"link\":\"/projects/\"},{\"text\":\"🙋 About\",\"link\":\"/about.html\"},{\"text\":\"✉️ Contact\",\"link\":\"/contact.html\"}]}],\"lastUpdated\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
