require('dotenv').config();
const topicDetails = require('./data/config/blog/topics-page-details');

module.exports = {
  lang: 'en-US',
  base: '/',
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community!!! We create videos and tutorials to help others learn about code and other tech related topics! Start Monkeying Around Today!!! 🐵',
  head: [
    [
      'meta',
      {
        name: 'charset',
        content: 'utf-8'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-precomposed.png'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-180x180-precomposed.png',
        sizes: '180x180'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-152x152-precomposed.png',
        sizes: '152x152'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-144x144-precomposed.png',
        sizes: '144x144'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-120x120-precomposed.png',
        sizes: '120x120'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-114x114-precomposed.png',
        sizes: '114x114'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-76x76-precomposed.png',
        sizes: '76x76'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-72x72-precomposed.png',
        sizes: '72x72'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-60x60-precomposed.png',
        sizes: '60x60'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-57x57-precomposed.png',
        sizes: '57x57'
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-title',
        content: 'Code Monkeys'
      }
    ],
    [
      'meta',
      {
        name: 'application-name',
        content: 'Code Monkeys'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      }
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Code Monkeys'
      }
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content:
          'https://codemonkeys.tech/images/code-monkeys-logos/og-website.png'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:width',
        content: '1200'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:height',
        content: '630'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:alt',
        content: 'Code Monkeys Blog Image'
      }
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://www.codemonkeys.tech'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Learn to Code like a Monkey by joining the Code Monkeys Community!!! We create videos, tutorials, blog posts, etc. to help others learn about code and other tech related topics! Start Monkeying Around Today!!! 🐵'
      }
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'Code Monkeys'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Code Monkeys'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content: 'Start Monkeying Around Today!!! 🐵'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:url',
        content: 'https://codemonkeys.tech'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:site',
        content: '@codemonkeystech'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content:
          'https://codemonkeys.tech/images/code-monkeys-logos/twitter-summary-large-image.png'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image:alt',
        content: 'Code Monkeys Blog Large Twitter Image'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:creator',
        content: '@codemonkeystech'
      }
    ],
    [
      'link',
      {
        href: '//codefence.io/codefence.css',
        rel: 'stylesheet'
      }
    ],
    [
      'script',
      {
        defer: '',
        type: 'text/javascript',
        src: '//codefence.io/codefence.js'
      }
    ]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: '/images/code-monkeys-logos/face.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/'
      },
      {
        text: 'Posts',
        items: [
          { text: 'All Posts', link: '/posts/' },
          {
            text: 'By Topic',
            items: [
              { text: 'LeetCode', link: '/topics/LeetCode/' },
              { text: 'Node.js', link: '/topics/Node.js/' },
              { text: 'VuePress', link: '/topics/VuePress/' }
            ]
          }
        ]
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'Donate',
        link: '/donate/'
      }
    ]
  },

  plugins: [
    '@vuepress/back-to-top',
    '@goy/svg-icons',
    'vuepress-plugin-mathjax',
    'mermaidjs',
    [
      'vuepress-plugin-code-copy',
      {
        color: '#eb7132',
        backgroundColor: '#eb7132',
        successText: 'Copied to Clipboard!',
        staticIcon: true
      }
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/posts/',
            title: 'All Posts',
            layout: 'IndexPost',
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 5, // 5 is the default value
              layout: 'IndexPost' // layout for the index page when page != 1
            }
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'topics',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['topic'],
            // Path of the `entry page` (or `list page`)
            path: '/topics/',
            title: 'Topics',
            // Layout of the `entry page` (list of tags)
            layout: 'Topics',
            // Layout of the `scope page` (list of posts with this tag)
            scopeLayout: 'IndexPost',
            frontmatter: {
              description: 'Start learning & coding',
              topicDetails: topicDetails.topicsPageDetails
            },
            pagination: {
              lengthPerPage: 5,
              layout: 'IndexPost'
            }
          }
        ],
        comment: {
          service: 'vssue',
          platform: 'github-v4',
          owner: 'codemonkeysio',
          repo: `${
            process.env.NODE_ENV !== 'development'
              ? 'code-monkeys-blog-comments'
              : 'code-monkeys-blog-comments-dev'
          }`,
          clientId: `${
            process.env.NODE_ENV !== 'development'
              ? '70480748c9fd241c5495'
              : process.env.CLIENT_ID_DEV_GITHUB
          }`,
          clientSecret: `${
            process.env.NODE_ENV !== 'development'
              ? 'c6e9d0221e76f8b0c4604d1a61e05fa72a33758c'
              : process.env.CLIENT_SECRET_DEV_GITHUB
          }`,
          labels: [':monkey_face:comments'],
          prefix: '[Post] ',
          admins: ['jchiarulli'],
          perPage: 10 // 10 is the default value
        },
        sitemap: {
          hostname: 'https://codemonkeys.tech'
        }
      }
    ]
  ]
};
