module.exports = {
  lang: 'en-US',
  title: 'Code Monkeys',
  description: 'Learn to Code like a Monkey',
  base: '/',

  head: [
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
    ]
  ],

  themeConfig: {
    logo: '/images/code-monkeys-temp-logo.png',
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
    '@vuepress/plugin-medium-zoom',
    '@goy/svg-icons',
    'vuepress-plugin-mathjax',
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
            itemPermalink: '/posts/:year/:month/:day/:slug',
            layout: 'IndexPost',
            pagination: {
              lengthPerPage: 2,
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
            // Layout of the `entry page` (list of tags)
            layout: 'Topics',
            frontmatter: {
              title: 'Topics',
              description: 'Start learning & coding',
              topicDetails: [
                {
                  summary:
                    "You'll find detailed LeetCode solutions here including code, notes, links, diagrams, animations, & anything else that may be helpful!",
                  logo: 'LeetCodeLogo.png'
                },
                {
                  summary:
                    'Learn how to use VuePress by following along with these tutorials!',
                  logo: 'VuePressLogo.png'
                },
                {
                  summary: 'Testing',
                  logo: 'LeetCodeLogo.png'
                }
              ]
            },
            // Layout of the `scope page` (list of posts with this tag)
            scopeLayout: 'IndexPost',
            pagination: {
              lengthPerPage: 2,
              layout: 'IndexPost'
            }
          }
        ],
        sitemap: {
          hostname: 'https://codemonkeys.tech'
        }
      }
    ]
  ]
};
