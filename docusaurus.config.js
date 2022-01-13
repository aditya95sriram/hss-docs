// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HSS Docs',
  tagline: 'Hand siteswap documentation and examples',
  url: 'https://aditya95sriram.github.io/',
  baseUrl: '/hss-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aditya95sriram', // Usually your GitHub org/user name.
  projectName: 'hss-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages', // optional, but better explicit
  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: "/",  // serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aditya95sriram/hss-docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'HSS Docs',
        logo: {
          alt: 'Docusaurus logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          { 
            position: 'left',
            label: 'Examples',
            to: '/examples/'
          },
          {
            href: 'https://github.com/aditya95sriram/hss-docs',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Other Links',
            items: [
              {
                label: 'Examples',
                to: '/examples/',
              },
              {
                label: 'Juggling Lab',
                href: 'https://jugglinglab.org/',
              },
            ],
          },
        ],
        copyright: 'MIT License. Built with Docusaurus',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
