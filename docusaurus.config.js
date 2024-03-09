// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electron Js',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          routeBasePath:'/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
        title: 'Electron Forge',
        logo: {
          alt: 'My Site Logo',
          src: 'data:image/png;base64,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',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Electron Forge',
          },
          {to: '/blog', label: 'Electron', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            href:'https://js.electronforge.io/',
            label:'Discord',
            position:'right'
          },{
            href:'https://js.electronforge.io/',
            label:"API",
            position:'right'
          }
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
