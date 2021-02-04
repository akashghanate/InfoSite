module.exports = {
  title: 'InfoSite',
  tagline: 'Learn. Document. Build.',
  url: 'https://akashghanate.github.io',
  baseUrl: '/InfoSite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo1.png',
  organizationName: 'akashghanate', // Usually your GitHub org/user name.
  projectName: 'InfoSite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'InfoSite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo1.png',
      },
      items: [
        {
          to: 'docs/java/general',
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
    // CodeBlock line theme
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    // Dark them toogle switch
    colorMode:{
      disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/akashghanate/InfoSite/tree/master',
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
