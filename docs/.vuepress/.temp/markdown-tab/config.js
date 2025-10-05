import { CodeTabs } from "/home/aso/my-vuepress-site/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_d372d43aff1ce19145ad65f550505878/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/aso/my-vuepress-site/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_d372d43aff1ce19145ad65f550505878/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/aso/my-vuepress-site/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_d372d43aff1ce19145ad65f550505878/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
