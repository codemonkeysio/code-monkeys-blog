---
title: VuePress Tutorial 1 - Why Create a Blog?
author: Jay the Code Monkey
date: 2021-09-24T16:26:30.000Z
topic: VuePress
topicDescription: VuePress Tutorials
topicDescriptionEmojiWrap: Enjoy!!! 🍌🐒
description: Welcome to our VuePress series! In these tutorials we'll be building out this blog starting from the basics...
img: vuepress-logo.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
---

# VuePress Tutorial 1 - Why Create a Blog?

<PostDetails :author="$frontmatter.author" :posted="$frontmatter.date" :updated="$page.lastUpdated" />

## 🚧 This post is under construction! 🚧

Welcome to our VuePress series! In these tutorials we'll be building out this blog starting from the basics.

<code-group>
<code-block title="Installing">

```sh
cd docs
yarn install
yarn dev
```

</code-block>
</code-group>

<pagination :prevLink="prevLink" :nextLink="nextLink" />

<script>
import { prevAndNextLinks } from '../.vuepress/theme/util'

export default {

  data() {
    return {
      prevLink: '',
      nextLink: ''
    }
  },

  created() {
    let links = prevAndNextLinks(this.$page.key, this.$frontmatter.topic, this.$postPagination)
    this.prevLink = links.prevLink
    this.nextLink = links.nextLink
  }
}
</script>
