// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TemPlaza Framework Docs',
  tagline: 'Documentation for TemPlaza Framework',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.templaza.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'templaza', // Usually your GitHub org/user name.
  projectName: 'templaza-framework-docs', // Usually your repo name.
  deploymentBranch: 'deploy',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/templaza/templaza-framework-docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TemPlaza Framework Docs',
        logo: {
          alt: 'TemPlaza Framework Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://www.templaza.com/',
            label: 'Home Page',
            position: 'right',
          },
          {
            href: 'https://github.com/templaza/templaza-framework-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/category/templaza-framework',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Get Help',
                href: 'https://templaza.com/support.html',
              },
              {
                label: 'Refund Policy',
                href: 'https://templaza.com/refund-policy.html',
              },
              {
                label: 'Github',
                href: 'https://github.com/templaza',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                href: 'https://themeforest.net/user/templaza-hub/portfolio',
              },
              {
                label: 'Blog',
                href: 'https://templaza.com/blog.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TemPlaza.com.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'NQTFNL2XOJ',

        // Public API key: it is safe to commit it
        apiKey: 'cfed5de21ab21c1456e37deea3ab5188',

        indexName: 'templaza',

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
      },
    }),
};

export default config;
