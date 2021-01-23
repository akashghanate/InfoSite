module.exports = {
  title: 'InfoSite',
  tagline: 'Learn. Document. Build.',
  url: 'https://akashghanate.github.io',
  baseUrl: '/InfoSite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'akashghanate', // Usually your GitHub org/user name.
  projectName: 'InfoSite', // Usually your repo name.
  themeConfig: {
    colorMode:{
      disableSwitch: true,
    },
    navbar: {
      title: 'InfoSite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/java/tips',
          activeBasePath: 'docs/doc1',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/akashghanate',
            },
            
          ],
        },
        {
          title: 'Connect With Me',
          items: [
            {
              label:'LinkedIn',
              href: 'https://www.linkedin.com/in/akashghanate/',
            },
            {
              label:'Email',
              href: 'mailto:akashghanate98@gmail.com',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akash Kumar Ghanate. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
