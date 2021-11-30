---
title: VuePress Tutorial 2 - Why Use VuePress?
author: Jay the Code Monkey
date: 2021-11-24T20:50:30.000Z
topic: VuePress
description: VuePress is a minimalistic static site generator (SSG) with a Vue-powered theming system and Plugin API. Originally...
img: vuepress-tutorials/tutorial-2/post.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
meta:
  - property: 'og:title'
    content: 'VuePress Tutorial 2 - Why Use VuePress?'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-2/link-post.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'VuePress Tutorial 2 - Why Use VuePress? Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/posts/2021/11/24/vuepress-tutorial-2/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Wondering if you should use VuePress, then check out VuePress Tutorial 2 - Why Use VuePress? 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'VuePress Tutorial 2 - Why Use VuePress?'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Wondering if you should use VuePress, then check out VuePress Tutorial 2 - Why Use VuePress? 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/posts/2021/11/24/vuepress-tutorial-2/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-2/link-post.png'
  - name: 'twitter:image:alt'
    content: 'VuePress Tutorial 2 - Why Use VuePress? Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# VuePress Tutorial 2 - Why Use VuePress?

:::

## What is VuePress?

[VuePress](https://v1.vuepress.vuejs.org/) is a minimalistic <span class="post-term-two">static site generator (SSG)</span> with a Vue-powered [theming system](https://v1.vuepress.vuejs.org/theme/) and [Plugin API](https://v1.vuepress.vuejs.org/plugin/).

Originally, it was created to serve the documentation needs of [Vue's](https://vuejs.org/) own sub projects, so it comes with a [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html) optimized for writing technical documentation.

As well has being useful for writing technical documentation, it also has a [blog plugin](https://vuepress-plugin-blog.billyyyyy3320.com/) which we'll be looking at in more detail in future tutorials.

Now, to clear up any confusion we'll define what an <span class="post-term-two">SSG</span> is, then we'll talk more about the [theming system](https://v1.vuepress.vuejs.org/theme/) and the [Plugin API](https://v1.vuepress.vuejs.org/plugin/).

After that we'll provide a list of some of the features of [VuePress](https://v1.vuepress.vuejs.org/), and then we'll give some quick comparisons with similar technologies.

## Different Types of Websites

Before we define what an <span class="post-term-two">SSG</span> is, let's first look at some different types of websites. This will allow us to get a better understanding of the pros and cons of using an <span class="post-term-two">SSG</span>.

We'll mainly be looking at each type of website in terms of <span class="post-term-one">search engine optimization (SEO)</span>, <span class="post-term-one">speed</span>, and <span class="post-term-one">ease of updating</span>.

### Static Website

- Uses static HTML pages with possible CSS and JavaScript
- Pages are uploaded to a content delivery network (CDN) or a web host

Here's a simple diagram illustrating the process:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-2/static-website.png')"
      alt="Static Website Diagram"
  />
</div>

#### Pros

- <span class="post-term-one">SEO-friendly</span> since a search engine can crawl the site and fully rendered HTML pages with content are provided

#### Cons

- Need to do a request to the server for each page a user visits which <span class="post-term-one">slows</span> down the site
- <span class="post-term-one">Difficult to update</span> since you need to rewrite the same code on multiple pages, e.g., the footer
- Has <span class="post-term-one">limited functionality</span> and generally doesn't contain dynamic data

### Single-Page Application (SPA)

- Typical [Vue](https://vuejs.org/) and [React](https://reactjs.org/) application
- A single request is made to the server which returns a simple HTML page with the styles and scripts linked
- The <span class="post-term-three">SPA</span> then handles rendering the page content in the browser, e.g., routing, data, etc.

Simple diagram illustrating the process:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-2/spa.png')"
      alt="SPA Website Diagram"
  />
</div>

#### Pros

- <span class="post-term-one">Fast</span>, no extra requests are made to the server when navigating to new pages since the <span class="post-term-three">SPA</span> handles rendering the pages in the browser
- Component driven which means <span class="post-term-one">easier updating</span>, e.g., if you want to update the footer you only need to update it in one file

#### Cons

- <span class="post-term-one">More difficult</span> for search engines to crawl and index the site for <span class="post-term-one">SEO</span> since the page returned by the server is a simple HTML page

### Server-Side Rendered (SSR)

- A traditional [PHP](https://www.php.net/) site uses this technique as well as a [Node.js](https://nodejs.org/en/) application using [Express](https://expressjs.com/) and [EJS](https://ejs.co/) for templating
- Returns an HTML page that is built on the fly for each request using templates and data
- Each page returned is a static HTML page

Simple diagram illustrating the process:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-2/ssr.png')"
      alt="Static Website Diagram"
  />
</div>

#### Pros

- <span class="post-term-one">SEO-friendly</span> since each request returns a fully rendered HTML page, so a search engine can easily crawl and index the site
- <span class="post-term-one">Easy to update</span> since the server is using a templating system

#### Cons

- Since the server has to send back fully rendered HTML pages for each request, it can <span class="post-term-one">slow</span> down the page rendering

### Static Site Generator (SSG)

- An <span class="post-term-two">SSG</span> creates pre-rendered static HTML pages using a combination of templates, components, and data
- These static HTML pages are generated at build-time, i.e., <span class="post-term-one">before</span> deployment
- The static pages are then deployed to the web

Simple diagram illustrating the process:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-2/ssg.png')"
      alt="Static Website Diagram"
  />
</div>

#### Pros

- <span class="post-term-one">SEO-friendly</span> since it returns fully rendered HTML which can then be crawled and indexed
- Navigating to new pages is <span class="post-term-one">fast</span> since after the initial request the site behaves like a normal <span class="post-term-three">SPA</span>
- <span class="post-term-one">Easy to update</span> since the site is component driven

#### Cons

- Have to rebuild the static pages <span class="post-term-one">evey time</span> a change is made to the site, and the build time will <span class="post-term-one">increase</span> as more pages are added

## Use Cases for SSGs

Since <span class="post-term-two">SSGs</span> create static HTML pages at build-time then behave like an <span class="post-term-three">SPA</span>, they are suited for websites that <span class="post-term-one">don't</span> have a lot of frequent content changes.

- Here are some examples:
  - Personal Website/Portfolio
  - Documentation
  - Blog

## How it Works in VuePress

Like other <span class="post-term-two">SSGs</span>, the static HTML pages are rendered at build-time. Then the static HTML pages are deployed to the web.

Once the page is loaded, [Vue](https://vuejs.org/) takes control of the static content and the site behaves like an <span class="post-term-three">SPA</span>. The <span class="post-term-three">SPA</span> is powered by [Vue](https://vuejs.org/), [Vue Router](https://router.vuejs.org/), and [webpack](https://webpack.js.org/).

Each Markdown file gets compiled into HTML with [markdown-it](https://markdown-it.github.io/) which is then processed as the template of a [Vue](https://vuejs.org/) component. This is what enables you to use [Vue](https://vuejs.org/) directly in your Markdown files and also makes it possible to embed dynamic content.

## Theming

A theme in [VuePress](https://v1.vuepress.vuejs.org/) allows you to control how your project is structured. You can simply use the provided [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html), use [theme inheritance](https://v1.vuepress.vuejs.org/theme/inheritance.html) to create a child theme based on a parent theme, or [write your own theme](https://v1.vuepress.vuejs.org/theme/writing-a-theme.html).

Within a theme you are able to create directories that handle <span class="post-term-one">global components</span>, <span class="post-term-one">components</span>, <span class="post-term-one">layouts</span>, <span class="post-term-one">styles</span>, and <span class="post-term-one">templates</span>. You can also create files for <span class="post-term-one">theme configurations</span> and <span class="post-term-one">app level enhancements</span>. When writing your own theme the only file that is necessary is Layout.vue, everything else is up to. You can also publish your theme as an [npm](https://www.npmjs.com/) package which allows other people to easily install it.

The [Code Monkeys Blog](/) is currently a child theme inherited from the default theme. Eventually, I would like to look into publishing it as an [npm](https://www.npmjs.com/) pacakage.

We'll go over the directory structure, what each directory in a theme is used for, theme configuration, app level enhancement, and [theme inheritance](https://v1.vuepress.vuejs.org/theme/inheritance.html) in future tutorials.

- Example themes you can check out:
  - <span class="external-link-wrap">[vuepress-theme-meteorlxy](https://vuepress-theme-meteorlxy.meteorlxy.cn/)</span>
  - <span class="external-link-wrap">[vuepress-theme-modern-blog](https://vp-modern.z3by.com/)</span>
  - <span class="external-link-wrap">[vuepress-theme-succinct](https://succinct.mflash.dev/)</span>
  - <span class="external-link-wrap">[vuepress-theme-hope](https://vuepress-theme-hope.github.io/)</span>
  - <span class="external-link-wrap">[vuepress-theme-mini](https://vuepress-theme-mini.wxsm.space/)</span>

## Plugin API

[Plugins](https://v1.vuepress.vuejs.org/plugin/) allow you to add <span class="post-term-one">global-level functionality</span> to [VuePress](https://v1.vuepress.vuejs.org/). You can configure them by passing in options. It's also possible to write your own and publish them as [npm](https://www.npmjs.com/) packages.

We'll go over installing and configuring [plugins](https://v1.vuepress.vuejs.org/plugin/) in future tutorials.

- Examples of some plugins:
  - <span class="external-link-wrap">[@vuepress/plugin-blog](https://vuepress-plugin-blog.billyyyyy3320.com/)</span>
  - <span class="external-link-wrap">[@vuepress/plugin-active-header-links](https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html)</span>
  - <span class="external-link-wrap">[@vuepress/plugin-back-to-top](https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html)</span>
  - <span class="external-link-wrap">[@vuepress/plugin-search](https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html)</span>
  - <span class="external-link-wrap">[@goy/vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/)</span>

## Features

Here are some of the features that come with [VuePress](https://v1.vuepress.vuejs.org/):

Built-in Markdown Extensions

- <span class="external-link-wrap">[Table of Contents](https://v1.vuepress.vuejs.org/guide/markdown.html#table-of-contents)</span>
- <span class="external-link-wrap">[Custom Containers](https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers)</span>
- <span class="external-link-wrap">[Line Highlighting](https://v1.vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)</span>
- <span class="external-link-wrap">[Line Numbers](https://v1.vuepress.vuejs.org/guide/markdown.html#line-numbers)</span>
- <span class="external-link-wrap">[Import Code Snippets](https://v1.vuepress.vuejs.org/guide/markdown.html#import-code-snippets)</span>

Ability to Use Vue In Markdown Files

- <span class="external-link-wrap">[Templating](https://v1.vuepress.vuejs.org/guide/using-vue.html#templating)</span>
- <span class="external-link-wrap">[Using Components](https://v1.vuepress.vuejs.org/guide/using-vue.html#using-components)</span>

Vue-powered Custom Theme System

- <span class="external-link-wrap">[Metadata](https://v1.vuepress.vuejs.org/theme/writing-a-theme.html#site-and-page-metadata)</span>
- <span class="external-link-wrap">[Content Excerpt](https://v1.vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt)</span>

A Default Theme with

- Responsive layout
- <span class="external-link-wrap">[Optional Homepage](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#homepage)</span>
- Customizable [Navbar](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar) and [Sidebar](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar)
- <span class="external-link-wrap">[Simple Out-of-the-Box Header-Based Search](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#built-in-search)</span>
- <span class="external-link-wrap">[Algolia Search](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#algolia-search)</span>
- <span class="external-link-wrap">[Last Updated](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#last-updated)</span>
- <span class="external-link-wrap">[Git Repository and Edit Links](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repository-and-edit-links)</span>
- <span class="external-link-wrap">[Custom Layout for Specific Pages](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages)</span>
- <span class="external-link-wrap">[Code Groups and Code Blocks](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#default-code-block)</span>

It also has a [blog theme](https://vuepress-theme-blog.billyyyyy3320.com/), numerous community themes, official plugins, and community plugins.

You can find a list of these themes, plugins, and more resources at [Awesome VuePress](https://github.com/vuepress/awesome-vuepress).

## Comparisons

Here are some similar technologies and how they compare with [VuePress](https://v1.vuepress.vuejs.org/):

<span class="external-link-headers">[Nuxt](https://nuxtjs.org/)</span>

- Designed for building applications whereas [VuePress](https://v1.vuepress.vuejs.org/) is focused on content-centric static sites with a focus on technical documentation

<span class="external-link-headers">[Docsify](https://docsify.js.org/#/) / [Docute](https://docute.org/)</span>

- Both are runtime-driven, so they're not SEO-friendly
- Good if SEO isn't a concern and you don't want to deal with installing dependencies

<span class="external-link-headers">[Hexo](https://hexo.io/)</span>

- Static and string-based theming system, so we're unable to take advantage of [Vue](https://vuejs.org/) for layout and interactivity
- Markdown rendering configuration is not that flexible

<span class="external-link-headers">[GitBook](https://www.gitbook.com/)</span>

- Development reload performance is not ideal with a large amount of files
- Limiting navigation structure for the default theme
- Theming system is not [Vue](https://vuejs.org/) based

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';

export default {
  components: {
    VLazyImage
  }
}
</script>
