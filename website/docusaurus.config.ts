import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { EnumChangefreq } from 'sitemap';

import remarkGithub from 'remark-github';
import remarkGfm from 'remark-gfm';

import { DISCORD_URL } from './constants';
import { GITHUB_URL } from './constants';
import { MASTODON_URL } from './constants';
import { TWITTER_URL } from './constants';

import lightCodeTheme from './src/themes/prismLight';
import darkCodeTheme from './src/themes/prismDark';

import { getTranslationProgress, LanguageProgress } from './src/api/crowdin';

function localeConfig(name: string, locale: string, translationProgress: Map<string, LanguageProgress>) {
  let languageProgress = translationProgress.get(locale);
  return {
    label: `${name} (${languageProgress.approvalProgress || 0}%)`,
    direction: languageProgress.language.textDirection,
    htmlLang: languageProgress.language.locale,
  }
}

export default async function createConfigAsync(): Promise<Config> {
  var translationProgress = await getTranslationProgress();
  return {
    title: 'Task',
    tagline: 'A task runner / simpler Make alternative written in Go ',
    url: 'https://taskfile.dev',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    organizationName: 'go-task',
    projectName: 'task',
    deploymentBranch: 'gh-pages',

    i18n: {
      defaultLocale: 'en',
      locales: [
        'en',
        'es-ES',
        'fr',
        'ja',
        'pt-BR',
        'ru',
        'tr',
        'zh-Hans'
      ],
      localeConfigs: {
        'es-ES': localeConfig('Español', 'es-ES', translationProgress),
        'fr': localeConfig('Français', 'fr', translationProgress),
        'ja': localeConfig('日本語', 'ja', translationProgress),
        'pt-BR': localeConfig('Português', 'pt-BR', translationProgress),
        'ru': localeConfig('Pусский', 'ru', translationProgress),
        'tr': localeConfig('Türkçe', 'tr', translationProgress),
        'zh-Hans': localeConfig('简体中文', 'zh-CN', translationProgress),
      }
    },

    presets: [
      [
        'classic',
        {
          docs: {
            routeBasePath: '/',
            sidebarPath: './sidebars.ts',
            remarkPlugins: [remarkGithub, remarkGfm],
            includeCurrentVersion: true,
            versions: {
              current: {
                label: `Next 🚧`,
                path: 'next',
                badge: false
              },
              latest: {
                label: 'Latest',
                badge: false
              }
            }
          },
          blog: {},
          theme: {
            customCss: [
              './src/css/custom.css',
              './src/css/carbon.css',
            ]
          },
          gtag: {
            trackingID: 'G-4RT25NXQ7N',
            anonymizeIP: true
          },
          sitemap: {
            changefreq: EnumChangefreq.WEEKLY,
            priority: 0.5,
            ignorePatterns: ['/tags/**']
          }
        } satisfies Preset.Options,
      ]
    ],

    scripts: [
      {
        src: '/js/carbon.js',
        async: true
      }
    ],

    themeConfig:{
      metadata: [
        {
          name: 'og:image',
          content: 'https://taskfile.dev/img/og-image.png'
        }
      ],
      navbar: {
        title: 'Task',
        logo: {
          alt: 'Task Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/donate',
            position: 'left',
            label: 'Donate'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: '/translate/',
                label: 'Help Us Translate'
              }
            ]
          },
          {
            href: GITHUB_URL,
            position: 'right',
            className: "header-icon-link icon-github",
          },
          {
            href: DISCORD_URL,
            position: 'right',
            className: "header-icon-link icon-discord",
          },
          {
            href: TWITTER_URL,
            position: 'right',
            className: "header-icon-link icon-twitter",
          },
          {
            href: MASTODON_URL,
            rel: 'me',
            position: 'right',
            className: "header-icon-link icon-mastodon",
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Installation',
                to: '/installation/'
              },
              {
                label: 'Usage',
                to: '/usage/'
              },
              {
                label: 'Donate',
                to: '/donate/'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: GITHUB_URL
              },
              {
                label: 'Twitter',
                href: TWITTER_URL
              },
              {
                label: 'Mastodon',
                href: MASTODON_URL,
                rel: 'me'
              },
              {
                label: 'Discord',
                href: DISCORD_URL
              },
              {
                label: 'OpenCollective',
                href: 'https://opencollective.com/task'
              }
            ]
          },
          {
            items: [
              {
                html: '<a target="_blank" href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>'
              }
            ]
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "bash", // aka. shell
          "json",
          "powershell"
        ]
      },
      // NOTE(@andreynering): Don't worry, these keys are meant to be public =)
      algolia: {
        appId: '7IZIJ13AI7',
        apiKey: '34b64ae4fc8d9da43d9a13d9710aaddc',
        indexName: 'taskfile'
      }
    } satisfies Preset.ThemeConfig,
  };
};
