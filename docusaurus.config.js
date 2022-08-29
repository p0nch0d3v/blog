// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const title = 'Blog';
const username = 'p0nch0d3v';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: title,
  tagline: 'Just another tech blog',
  url: `${process.env.SITE_URL}`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: `${username}`, 
  projectName: 'blog', 
  noIndex: true,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: false,
          editUrl: undefined,
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),

        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      navbar: {
        title: title,
        logo: {
          alt: `${title} Logo`,
          src: 'img/logo.jpg',
        },
        items: [
          {
            href: `https://github.com/${username}/`,
            label: 'GitHub',
            position: 'right',
          },
          {
            href: '/docs/about-it',
            label: 'About It',
            position: 'right',
            editUrl: undefined,
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: `https://twitter.com/${username}`,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: `https://github.com/${username}`,
              },
              {
                label: 'Gitlab',
                href: `https://gitlab.com/${username}`,
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${title}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
console.log(config);
module.exports = config;