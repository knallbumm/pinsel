export default {
  title: "Pinsel.js",
  description: "Just playing around.",
  themeConfig: {
    logo: "/pinsel-logo-v-0-5.png",
    siteTile: false,
    nav: [
      { text: "Guide", link: "/guide/index.html" },
      { text: "Documentation", link: "/documentation/index.html" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Getting started",
          items: [
            { text: "Installation", link: "/guide/index" },
            { text: "First Shapes", link: "/guide/index" },
            { text: "First Animation", link: "/" },
          ],
        },
        {
          text: "Introduction",
          items: [
            { text: "What is Pinsel?", link: "/guide/index" },
            { text: "Core Concepts", link: "/guide/index" },
            { text: "Features", link: "/" },
            { text: "Comparison", link: "/" },
          ],
        },
        {
          text: "Core",
          items: [
            { text: "Item C", link: "/item-c" },
            { text: "Item D", link: "/item-d" },
            {
              text: "Shapes",
              items: [
                { text: "Rectangle", link: "/guide/index" },
                { text: "Circle", link: "/guide/index" },
                { text: "Path", link: "/" },
              ],
            },
          ],
        },
        {
          text: "Runner",
          items: [
            { text: "Overview", link: "/item-c" },
            { text: "Item D", link: "/item-d" },
          ],
        },
        {
          text: "Renderer",

          items: [
            { text: "Overview", link: "/guide/renderer/index.html" },
            {
              text: "Renderers",

              items: [
                { text: "AdaptiveCanvasRenderer", link: "/item-c" },
                { text: "DynamicCanvasRenderer", link: "/item-c" },
                { text: "SVGRenderer", link: "/item-d" },
              ],
            },
          ],
        },
        {
          text: "Additional",
          items: [{ text: "How to improve performance?", link: "/item-c" }],
        },
      ],
      "/documentation/": [
        {
          text: "Renderer",
          items: [
            { text: "Installation", link: "/guide/index" },
            { text: "First Shapes", link: "/guide/index" },
            { text: "First Animation", link: "/" },
          ],
        },
        {
          text: "Introduction",
          items: [
            { text: "What is Pinsel?", link: "/guide/index" },
            { text: "Concepts", link: "/guide/index" },
            { text: "Features", link: "/" },
            { text: "Comparison", link: "/" },
          ],
        },
        {
          text: "Core",
          items: [
            { text: "Item C", link: "/item-c" },
            { text: "Item D", link: "/item-d" },
            {
              text: "Shapes",
              items: [
                { text: "Rectangle", link: "/guide/index" },
                { text: "Circle", link: "/guide/index" },
                { text: "Path", link: "/" },
              ],
            },
          ],
        },
        {
          text: "Runner",
          items: [
            { text: "Overview", link: "/item-c" },
            { text: "Item D", link: "/item-d" },
          ],
        },
        {
          text: "Renderer",

          items: [
            { text: "Overview", link: "/guide/renderer/index.html" },
            {
              text: "Renderers",

              items: [
                { text: "AdaptiveCanvasRenderer", link: "/item-c" },
                { text: "DynamicCanvasRenderer", link: "/item-c" },
                { text: "SVGRenderer", link: "/item-d" },
              ],
            },
          ],
        },
        {
          text: "Additional",
          items: [{ text: "How to improve performance?", link: "/item-c" }],
        },
      ],
    },
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#3a0839",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/browserconfig.xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
};
