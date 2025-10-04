import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Coding',
  tagline: 'Enjoy life, Code more',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://codingsoso.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codingsoso', // Usually your GitHub org/user name.
  projectName: 'codingsoso.github.io', // Usually your repo name.
  trailingSlash: false, // remove trailing slash

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  noIndex: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'zh'],
        indexPages: false,
        indexDocs: true,
        indexBlog: false,
        docsDir: ['notes', 'ruoyi', 'frontend', 'backend'],
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],
  plugins: [
    [
      'content-docs',
      {
        id: 'ruoyi',
        path: 'ruoyi',
        routeBasePath: 'ruoyi',
        sidebarPath: './sidebars.ts',
        // sidebarPath: './sidebarsFrontend.ts',
        editUrl: 'https://github.com/codingsoso/codingsoso.github.io/tree/main',
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'frontend',
        path: 'frontend',
        routeBasePath: 'frontend',
        sidebarPath: './sidebars.ts',
        // sidebarPath: './sidebarsFrontend.ts',
        editUrl: 'https://github.com/codingsoso/codingsoso.github.io/tree/main',
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'backend',
        path: 'backend',
        routeBasePath: 'backend',
        sidebarPath: './sidebars.ts',
        // sidebarPath: './sidebarsBackend.ts',
        editUrl: 'https://github.com/codingsoso/codingsoso.github.io/tree/main',
      } satisfies DocsOptions,
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'notes',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codingsoso/codingsoso.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codingsoso/codingsoso.github.io/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Coding',
      logo: {
        alt: 'Coding',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          to: '/ruoyi',
          type: 'docSidebar',
          docsPluginId: 'ruoyi',
          sidebarId: 'ruoyiSidebar',
          position: 'left',
          label: 'RuoYi',
        },
        {
          to: '/backend',
          type: 'docSidebar',
          docsPluginId: 'backend',
          sidebarId: 'backendSidebar',
          position: 'left',
          label: 'Backend',
        },
        {
          to: '/frontend',
          type: 'docSidebar',
          docsPluginId: 'frontend',
          sidebarId: 'frontendSidebar',
          position: 'left',
          label: 'Frontend',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/topics/awesome',
          label: 'Awesome',
          position: 'right',
        },
        {
          href: 'https://gitee.com/gvp',
          label: 'GVP',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'B站-尚学堂',
              href: 'https://space.bilibili.com/302417610',
            },
            {
              label: '极客时间',
              href: 'https://time.geekbang.org/',
            },
            {
              label: '博学谷',
              href: 'https://www.boxuegu.com/',
            },
          ],
        },
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Spring',
              href: 'https://spring.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Gitee',
              href: 'https://gitee.com/explore',
            },
            {
              label: 'OSChina',
              href: 'https://www.oschina.net/',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with 
        <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json', 'bash', 'java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
