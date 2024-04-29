import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Saladpuk.com',
  favicon: 'img/favicon.ico',
  url: 'https://saladpuk.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'saladpuk', // Usually your GitHub org/user name.
  projectName: 'edu', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'th',
    locales: ['th'],
  },

  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/saladpuk/edu',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/saladpuk/edu',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    // Replace with your project's social card
    image: 'img/saladpuk-social-card.jpg',
    navbar: {
      title: 'Saladpuk.com',
      logo: {
        alt: 'สลัดผัก',
        src: 'img/saladpuk.png',
      },
      items: [
        {
          to: 'roadmap',
          label: '🛣️Roadmap',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: '🧑‍💻ฟามรู้',
          position: 'left',
        },
        {
          to: '/blog',
          label: '😗บ่นไปวันๆ',
          position: 'left',
        },
        // {
        //   type: 'dropdown',
        //   label: 'Version',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'Current',
        //       href: 'https://www.facebook.com',
        //     },
        //     {
        //       label: 'Legacy',
        //       href: 'https://www.google.com',
        //     },
        //   ],
        // },
        // {
				// 	href: 'https://discord.gg/<invite-link>',
        //   className: 'navbar--discord-link',
				// 	position: 'right',
				// 	'aria-label': 'Discord Invite',
				// },
        {
          href: 'https://github.com/saladpuk/edu',
          className: 'navbar--github-link',
					position: 'right',
					'aria-label': 'GitHub Repository',
				},
        // {
        //   type: 'search',
        //   position: 'right',
        //   label: 'ค้นหา'
        // },
        // {
        //   type: 'html',
        //   position: 'right',
        //   value: '<Icon icon="fa-brands fa-github" size="lg" />Github',
        // },
      ],
    },
    footer: {
      style: 'dark',
      // logo: {
      //   src: 'img/saladpuk.png'
      // },
      copyright: `ใครที่ไม่อยากพลาดอัพเดทก็จิ้มลิงค์นี้ <a href='https://www.facebook.com/mr.saladpuk' target='_blank'>Facebook Mr.Saladpuk</a> เข้าไปกดติดตามได้เยยนะกั๊ฟ 😘`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'csharp', 'json'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-red-line',
          line: 'red-line',
          block: {start: 'red-start', end: 'red-end'},
        },
        {
          className: 'code-block-green-line',
          line: 'green-line',
          block: {start: 'green-start', end: 'green-end'},
        },
        {
          className: 'code-block-blue-line',
          line: 'blue-line',
          block: {start: 'blue-start', end: 'blue-end'},
        },
        {
          className: 'code-block-orange-line',
          line: 'orange-line',
          block: {start: 'orange-start', end: 'orange-end'},
        }
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
