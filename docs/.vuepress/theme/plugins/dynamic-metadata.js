module.exports = (options = {}, ctx) => ({
  extendPageData($page) {
    const { frontmatter, path } = $page
    const metadata = {
      title: frontmatter.title,

      description: frontmatter.description,

      url:
        frontmatter.canonicalUrl && typeof frontmatter.canonicalUrl === 'string'
          ? frontmatter.canonicalUrl.startsWith('https')
            ? frontmatter.canonicalUrl
            : `${ctx.siteConfig.themeConfig.domain}${frontmatter.canonicalUrl}`
          : null,

      linkImg:
        frontmatter.linkImg && typeof frontmatter.linkImg === 'string'
          ? frontmatter.linkImg.startsWith('https')
            ? frontmatter.linkImg
            : `${ctx.siteConfig.themeConfig.domain}images/${frontmatter.linkImg}`
          : null,

      linkImgAlt:
        frontmatter.linkImgAlt && typeof frontmatter.linkImgAlt === 'string'
          ? frontmatter.linkImgAlt
          : null
    }

    let meta_dynamicMeta = []
    if (metadata.linkImg) {
      meta_dynamicMeta = [
        { property: 'og:title', content: metadata.title },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: metadata.linkImg
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '628' },
        { property: 'og:image:alt', content: metadata.linkImgAlt },
        { property: 'og:url', content: metadata.url },
        { property: 'og:description', content: metadata.description },
        { property: 'og:site:name', content: 'Code Monkeys' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: metadata.title },
        { name: 'twitter:description', content: metadata.description },
        { name: 'twitter:url', content: metadata.url },
        { name: 'twitter:site', content: '@codemonkeystech' },
        {
          name: 'twitter:image',
          content: metadata.linkImg
        },
        { name: 'twitter:image:alt', content: metadata.linkImgAlt },
        { name: 'twitter:creator', content: '@codemonkeystech' }
      ]
    }

    meta_dynamicMeta = meta_dynamicMeta.filter(
      meta => meta.content && meta.content !== ''
    )

    meta_dynamicMeta = [...(frontmatter.meta || []), ...meta_dynamicMeta]

    meta_dynamicMeta = getUniqueArray(meta_dynamicMeta, [
      'name',
      'content',
      'property'
    ])

    frontmatter.meta = meta_dynamicMeta

    if (frontmatter.canonicalUrl) {
      frontmatter.canonicalUrl = metadata.url
    }

    if ($page.regularPath.includes('_posts')) {
      frontmatter.sidebar = 'auto'
    }
  }
})

function getUniqueArray(arr, keyProps) {
  return Object.values(
    arr.reduce((uniqueMap, entry) => {
      const key = keyProps.map(k => entry[k]).join('|')
      if (!(key in uniqueMap)) uniqueMap[key] = entry
      return uniqueMap
    }, {})
  )
}
