---
title: VuePress Tutorial 15 - Blog Plugin
date: 2022-09-21T12:26:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to install and configure the blog plugin for your VuePress site, then check out VuePress Tutorial 15 - Blog Plugin! 🍌🐒
cardDescription: It's now time to install and begin the process of configuring @vuepress/plugin-blog. We're going to start by describing...
img: vuepress-tutorials/tutorial-15/vuepress-tutorial-15-blog-plugin-post.png
alt: VuePress Tutorial 15 - Blog Plugin Post Picture
linkImg: vuepress-tutorials/tutorial-15/vuepress-tutorial-15-blog-plugin-post-link.png
linkImgAlt: VuePress Tutorial 15 - Blog Plugin Image
canonicalUrl: vuepress-tutorial-15/
---

::: slot header

# VuePress Tutorial 15 - Blog Plugin

:::

## What We're Doing

It's now time to install and begin the process of configuring [@vuepress/plugin-blog](https://vuepress-plugin-blog.billyyyyy3320.com/). We're going to start by describing the main features provided by the plugin. Then we'll go over the installation and usage. After going over the installation and usage, we'll describe the concepts and implementation of <span class="post-term-one">document classification</span>, <span class="post-term-one">permalinks</span>, and <span class="post-term-one">directory classification</span>.

If you're interested you can check out the blog plugin code [here](https://github.com/vuepress/vuepress-plugin-blog). You can also check out the [@vuepress/theme-blog](https://vuepress-theme-blog.billyyyyy3320.com/) if you're interested in learning more about it. We won't be discussing the blog theme in detail since we're using the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-15</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-15) repository.

## Features

The blog plugin provides the following main features:

- <span class="external-link-wrap">[Classification](https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#document-classifier)</span> which means you can quickly classify posts by using their characteristics.
- <span class="external-link-wrap">[Pagination](https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#pagination)</span> which allows you to break up the display of your posts into multiple pages. This provides easier navigation and a better user experience.
- <span class="external-link-wrap">[Client API](https://vuepress-plugin-blog.billyyyyy3320.com/client-api/)</span> which allows you to access global variables that contain data about pagination, frontmatter, and the various services the plugin provides.

We'll be discussing <span class="post-term-one">pagination</span> and the <span class="post-term-one">Client API</span> in more detail in future tutorials.

## Installation

We're now ready to discuss the installation of the plugin.

### Using the Tutorials Repo

If you're following along with the tutorials, then when you switch to the <code class="inline-code-block">tutorial-15</code> branch you can run the following command to install the package instead of running the installation command:

<code-group>
<code-block title="yarn">
```sh
yarn
```
</code-block>

<code-block title="npm">
```sh
npm install
```
</code-block>
</code-group>

This will ensure you have the same version used in the blog since the command uses the version specified in the <code class="inline-code-block">yarn.lock</code> file during the installation.

### Using the Installation Command

To install the blog plugin in your own project you can run the following command:

<code-group>
<code-block title="yarn">
```sh
yarn add -D @vuepress/plugin-blog
```
</code-block>

<code-block title="npm">
```sh
npm install -D @vuepress/plugin-blog
```
</code-block>
</code-group>

:::tip Installing the Same Blog Plugin Version
If you want to ensure you're installing the same version being used in the tutorials and blog, then run <code class="inline-code-block">yarn upgrade @vuepress/plugin-blog@1.9.4</code>.
:::

### Updated package.json File

After installing the plugin, the <code class="inline-code-block">package.json</code> file should look something like this:

<code-group>
<code-block title="package.json">
```json{23}
{
  "name": "code-monkeys-blog-tutorials",
  "version": "1.0.0",
  "description": "Learn VuePress and how to create the Code Monkeys Blog by following along with these tutorials!",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/codemonkeysio/code-monkeys-blog-tutorials.git"
  },
  "author": {
    "name": "Jay the Code Monkey",
    "email": "c0dem0nkeys@pm.me",
    "url": "https://www.codemonkeys.tech/"
  },
  "license": "GPL-3.0-or-later",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "svgo": "vuepress svgo docs"
  },
  "devDependencies": {
    "@goy/vuepress-plugin-svg-icons": "^4.2.3",
    "@vuepress/plugin-blog": "^1.9.4",
    "vuepress": "1.8.2"
  }
}
```
</code-block>
</code-group>

### Automatically Installed Plugins

When installing the blog plugin you may have noticed the following plugins also get installed:

- <span class="external-link-wrap">[@vssue/vuepress-plugin-vssue](https://vssue.js.org/guide/vuepress.html#vuepress-plugin)</span>
- <span class="external-link-wrap">[vuepress-plugin-disqus](https://github.com/lorisleiva/vuepress-plugin-disqus)</span>
- <span class="external-link-wrap">[vuepress-plugin-feed](https://github.com/webmasterish/vuepress-plugin-feed)</span>
- <span class="external-link-wrap">[vuepress-plugin-mailchimp](https://vuepress-plugin-mailchimp.billyyyyy3320.com/)</span>
- <span class="external-link-wrap">[vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)</span>

These plugins provide features that are common to blogs, so they're included in the installation of the blog plugin. Including these plugins in the installation of the blog plugin saves you the time of searching for plugins that provide these common features as well as from having to separately install each plugin.

The plugins will only be used though if you enable them in the <code class="inline-code-block">config.js</code> file.

They can also be installed as standalone plugins, so you don't need to use the blog plugin to use them for your site.

We'll be discussing these plugins in more detail in future tutorials.

## Usage

To use the blog plugin we need to add the following to the <code class="inline-code-block">config.js</code> file which should now look something like this:

<code-group>
<code-block title="config.js">
```js{45}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: ['@goy/svg-icons', '@vuepress/blog'],
}
```
</code-block>
</code-group>

## Document Classification

The blog plugin provides a <span class="post-term-one">document classifier</span> which is a set of functions that handles the classifications of pages with the same characteristics.

These characteristics for pages in a blog may consist of:

- Pages in the same directory, e.g., a <code class="inline-code-block">_posts</code> directory.
- Pages containing the same frontmatter key, e.g., <code class="inline-code-block">tag: js</code> which signifies those pages contain content related to <code class="inline-code-block">js</code>, i.e., <code class="inline-code-block">JavaScript</code>.

Another common requirement is the ability to group all pages as well as pages with specific tags for <span class="post-term-one">pagination</span>.

Before discussing directory classification, we're going to first define what a <span class="post-term-one">permalink</span> is as well as discuss how they're built and configured. This will give us a better understanding of how the blog plugin uses <span class="post-term-one">permalinks</span> to build customizable links for blog posts which is preferable to using the default way of creating links.

## Permalinks

A <span class="post-term-one">permalink</span> is a URL that is intended to remain unchanged for a long time. This leads to links that are less susceptible to [link rot](https://en.wikipedia.org/wiki/Link_rot) which is when a link ceases to point to its originally targeted web page due to the page being relocated to a new address or becoming permanently unavailable.

[VuePress v1](https://vuepress.vuejs.org/) provided support for creating customizable links by introducing the ability to build <span class="post-term-one">permalinks</span>.

### Template Variables

We're able to build <span class="post-term-one">permalinks</span> by using the following template variables:

| Variable | Description |
| --- | --- |
| :year | Published year of post (4-digit) |
| :month | Published month of post (2-digit) |
| :i_month | Published month of post (without leading zeros) |
| :day | Published day of post (2-digit) |
| :i_day | Published day of post (without leading zeros) |
| :slug | Slugified file path (without extension) |
| :regular | Permalink generated by VuePress by default. |

### Default Configuration

The default configuration for <span class="post-term-one">permalinks</span> is <code class="inline-code-block">/:regular</code>.

The <code class="inline-code-block">:regular</code> template variable will first check if the Markdown files in the documents directory which in our case is the <code class="inline-code-block">docs</code> directory are index files, i.e., <code class="inline-code-block">README.md</code> or <code class="inline-code-block">index.md</code>.
- If they're index files, they get converted to URLs without extensions that are based on the file hierarchy.
- If they're not index files, they get converted to URLs with <code class="inline-code-block">html</code> extensions that are based on the file hierarchy.

Let's look at some examples to make this clearer where the file paths are relative to the documents directory which again in our case is the <code class="inline-code-block">docs</code> directory:

| Relative Path           | Page Routing   |
|:-----------------------:|:--------------:|
| <code class="inline-code-block">/README.md</code>              |       <code class="inline-code-block">/</code>        |
| <code class="inline-code-block">/foo/README.md</code> | <code class="inline-code-block">/foo/</code> |
| <code class="inline-code-block">/foo.md</code> | <code class="inline-code-block">/foo.html</code> |
| <code class="inline-code-block">/foo/bar.md</code> | <code class="inline-code-block">/foo/bar.html</code> |

:::tip Using Vue Files
Files with a <code class="inline-code-block">vue</code> extension follow the same conventions described for Markdown files above, e.g., <code class="inline-code-block">/README.vue</code> gets converted to <code class="inline-code-block">/</code>.
:::

You can take a look at [fileToPath.ts](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts) to see the code that handles converting files to paths.

### Global Configuration

To globally change the default configuration for <span class="post-term-one">permalinks</span> for your site you can add the <code class="inline-code-block">permalink</code> property to the <code class="inline-code-block">config.js</code> file.

We can build a <span class="post-term-one">permalink</span> to use in the <code class="inline-code-block">config.js</code> file by using the template variables.

For example we can use the template variables to build the following <span class="post-term-one">permalink</span>: <code class="inline-code-block">/:year/:month/:day/:slug</code>.

We can then set this as the value for the <code class="inline-code-block">permalink</code> property in the <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{45}
module.exports = {
  permalink: '/:year/:month/:day/:slug'
}
```
</code-block>
</code-group>

:::tip Using the Default Configuration
We'll be leaving the <code class="inline-code-block">permalink</code> property with the default value of <code class="inline-code-block">/:regular</code>, and we'll use the configuration provided by the blog plugin to customize the <span class="post-term-one">permalinks</span> for each blog post.
:::

### Local Configuration

It's also possible to set a <span class="post-term-one">permalink</span> locally for a single page which overrides any globally set configuration.

This is done be setting the <code class="inline-code-block">permalink</code> property in the frontmatter of the Markdown file:

<code-group>
<code-block title="Local Permalink">
```md{3}
---
title: Local Permalink
permalink: /using-a-local-permalink
---
```
</code-block>
</code-group>

This will set the <code class="inline-code-block">permalink</code> property to be <code class="inline-code-block">/using-a-local-permalink</code> instead of following the global configuration.

Now that we have an understanding of <span class="post-term-one">document classification</span> and <span class="post-term-one">permalinks</span>, let's move onto the <span class="post-term-one">directory classifier</span> which handles classifying pages placed in the same directory.

## Directory Classification

First we need to create a directory that will contain all of the pages we want to classify. To do this we'll create a <code class="inline-code-block">_posts</code> directory inside of the <code class="inline-code-block">docs</code> directory. The <code class="inline-code-block">docs</code> directory for your site should now look something like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   ├── `_posts`
│   ├── `icons`
│   └── README.md
:::

Next, we'll create the following example pages in the <code class="inline-code-block">_posts</code> directory:

- <code class="inline-code-block">2020-07-03-example-page-1.md</code>
- <code class="inline-code-block">2021-11-16-example-page-2.md</code>
- <code class="inline-code-block">2022-05-08-example-page-3.md</code>

The <code class="inline-code-block">_posts</code> directory for your site should now look like this:

::: vue
.
├── `_posts`
│   ├── 2020-07-03-example-page-1.md
│   ├── 2021-11-16-example-page-2.md
│   └── 2022-05-08-example-page-3.md
:::

By default [VuePress](https://vuepress.vuejs.org/) will create the following page URLs since it uses the <code class="inline-code-block">/:regular</code> template variable described above when building the links:

- <code class="inline-code-block">/_posts/2020-07-03-example-page-1.html</code>
- <code class="inline-code-block">/_posts/2021-11-16-example-page-2.html</code>
- <code class="inline-code-block">/_posts/2022-05-08-example-page-3.html</code>

You should now be able to navigate to these pages in the browser:

- <span class="external-link-wrap">[http://localhost:8080/_posts/2020-07-03-example-page-1.html](http://localhost:8080/_posts/2020-07-03-example-page-1.html)</span>
- <span class="external-link-wrap">[http://localhost:8080/_posts/2021-11-16-example-page-2.html](http://localhost:8080/_posts/2021-11-16-example-page-2.html)</span>
- <span class="external-link-wrap">[http://localhost:8080/_posts/2022-05-08-example-page-3.html](http://localhost:8080/_posts/2022-05-08-example-page-3.html)</span>

The default behavior is fine for creating the main pages on the site, but having the ability to build customizable links for blog posts is preferable.

After using the configuration provided by the blog plugin to build customized <span class="post-term-one">permalinks</span>, the page URLs will look like this:

- <code class="inline-code-block">/2020/07/03/example-page-1/</code>
- <code class="inline-code-block">/2021/11/16/example-page-2/</code>
- <code class="inline-code-block">/2022/05/08/example-page-3/</code>

To build these customizable links we're going to start setting up the <span class="post-term-one">directory classifier</span> configuration in the <code class="inline-code-block">config.js</code> file.

### directories

First, we'll add the <code class="inline-code-block">directories</code> property which is used to create the <span class="post-term-one">directory classifier</span>.

The expected type is a <code class="inline-code-block">DirectoryClassifier[]</code>, and the default value is <code class="inline-code-block">[]</code>.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{47-52}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [],
      },
    ],
  ],
}]
```
</code-block>
</code-group>

### id

Next, we'll add the <code class="inline-code-block">id</code> property which sets a unique id for the current classifier. We'll use a value of <code class="inline-code-block">posts</code>.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">undefined</code>.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{51-53}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
          },
        ],
      },
    ],
  ],
}]
```
</code-block>
</code-group>

### dirname

Now, we'll add the <code class="inline-code-block">dirname</code> property which is used to identify the directory we want to classify. This is the <code class="inline-code-block">_posts</code> directory we created earlier.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">undefined</code>.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{53}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
          },
        ],
      },
    ],
  ],
}]
```
</code-block>
</code-group>

After setting the <code class="inline-code-block">dirname</code> property, the page URLs get set to the customized <span class="post-term-one">permalinks</span> mentioned above:

- <span class="external-link-wrap">[http://localhost:8080/2020/07/03/example-page-1/](http://localhost:8080/2020/07/03/example-page-1/)</span>
- <span class="external-link-wrap">[http://localhost:8080/2021/11/16/example-page-2/](http://localhost:8080/2021/11/16/example-page-2/)</span>
- <span class="external-link-wrap">[http://localhost:8080/2022/05/08/example-page-3/](http://localhost:8080/2022/05/08/example-page-3/)</span>

The customized <span class="post-term-one">permalinks</span> are actually built using properties we haven't discussed yet. The blog plugin sets default values that don't need to be explicitly set in the <code class="inline-code-block">config.js</code> file. We'll be discussing these other properties and their default values below.

The previously provided links still work because they get converted to the customized <span class="post-term-one">permalinks</span> when navigating to those pages.

:::danger Unknown Custom Element
When navigating to the links if you inspect the browser then go to the <code class="inline-code-block">Console</code>, you'll see the following error: <code class="inline-code-block">Unknown custom element: &lt;Post&gt;</code>.
:::

This error is occurring because the plugin is looking for a <code class="inline-code-block">Post</code> layout component in the <code class="inline-code-block">layouts</code> directory which we haven't created yet.

Before creating a <code class="inline-code-block">Post</code> layout component to fix this error, we're going to first add the <code class="inline-code-block">path</code> property.

### path

The <code class="inline-code-block">path</code> property specifies the entry page, also known as the list page for the current classifier. This page will be used to display your posts as a paginated list.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">/&#36;{id}/</code> where <code class="inline-code-block">${id}</code> is the value of the <code class="inline-code-block">id</code> property we previously set.

This means you don't need to explicitly set the <code class="inline-code-block">path</code> property if you're going to be using the same value as the <code class="inline-code-block">id</code> property. We'll be using a value of <code class="inline-code-block">/posts/</code> for the <code class="inline-code-block">path</code> property, so we don't need to explicitly set the property. However, we're going to explicitly set the property because it allows us to have a quick reference to the property and its value.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{54}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
          },
        ],
      },
    ],
  ],
}]
```
</code-block>
</code-group>

You can navigate to the entry page by using the following link:

- <span class="external-link-wrap">[http://localhost:8080/posts/](http://localhost:8080/posts/)</span>

Notice this link has the value of the <code class="inline-code-block">path</code> property in it, i.e., <code class="inline-code-block">/posts/</code>. This is the same link we set in the navbar dropdown menu for All Posts, so you can click on that link to navigate to the entry page which will eventually be a paginated list of all of the posts.

Currently, when navigating to that link the <code class="inline-code-block">Layout</code> component provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) is displayed. The blog plugin will fallback to using the <code class="inline-code-block">Layout</code> component if it's unable to find an <code class="inline-code-block">IndexPost</code> layout component in the <code class="inline-code-block">layouts</code> directory.

This means we can create an <code class="inline-code-block">IndexPost</code> layout component that specifically handles the layout of the paginated list of all of the posts instead of using the <code class="inline-code-block">Layout</code> component.

### Creating the IndexPost Layout

To create the <code class="inline-code-block">IndexPost</code> layout component we're going to add an <code class="inline-code-block">IndexPost.vue</code> file inside of the <code class="inline-code-block">layouts</code> directory. The <code class="inline-code-block">layouts</code> directory for your site should now look something like this:

::: vue
.
├── `layouts`
│   ├── GlobalLayout.vue
│   └── IndexPost.vue
:::

We're going to begin the development of the <code class="inline-code-block">IndexPost</code> layout component by adding <code class="inline-code-block">template</code>, <code class="inline-code-block">script</code>, and <code class="inline-code-block">style</code> tags:

<code-group>
<code-block title="IndexPost.vue">
```vue
<template></template>

<script></script>

<style></style>
```
</code-block>
</code-group>

We'll continue developing the <code class="inline-code-block">IndexPost</code> layout component in a future tutorial.

### layout

We're now ready to add the <code class="inline-code-block">layout</code> property which is used to specify which layout to use for the entry page.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">'IndexPost' || 'Layout'</code>.

From the default value we can see why the entry page originally defaulted to using the <code class="inline-code-block">Layout</code> component before we created the <code class="inline-code-block">IndexPost</code> layout component. Since the blog plugin looks for the <code class="inline-code-block">IndexPost</code> layout component by default, we don't need to explicitly set the property. However, we're going to explicitly set it because this gives us a quick reference to the property and its value.

It's also possible to use a custom value for the <code class="inline-code-block">layout</code> property, e.g., you could use a value of <code class="inline-code-block">MyIndexPost</code> which you would have to explicitly set in the <code class="inline-code-block">config.js</code> file. Then you would have to create a <code class="inline-code-block">MyIndexPost.vue</code> file inside of the <code class="inline-code-block">layouts</code> directory.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{55}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
            layout: 'IndexPost',
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

We're now going to fix the <code class="inline-code-block">Unknown Custom Element</code> error we got after adding the <code class="inline-code-block">dirname</code> property. To fix this error we need to create the previously mentioned <code class="inline-code-block">Post</code> layout component.

### Creating the Post Layout

The <code class="inline-code-block">Post</code> layout component is used to handle the layout for individual post pages.

To create the <code class="inline-code-block">Post</code> layout component we're going to add a <code class="inline-code-block">Post.vue</code> file inside of the <code class="inline-code-block">layouts</code> directory. The <code class="inline-code-block">layouts</code> directory for your site should now look something like this:

::: vue
.
├── `layouts`
│   ├── GlobalLayout.vue
│   ├── IndexPost.vue
│   └── Post.vue
:::

We're going to begin the development of the <code class="inline-code-block">Post</code> layout component by adding <code class="inline-code-block">template</code>, <code class="inline-code-block">script</code>, and <code class="inline-code-block">style</code> tags:

<code-group>
<code-block title="Post.vue">
```vue
<template></template>

<script></script>

<style></style>
```
</code-block>
</code-group>

We'll continue developing the <code class="inline-code-block">Post</code> layout component in a future tutorial.

### itemLayout

We're now ready to add the <code class="inline-code-block">itemLayout</code> property which is used to specify which layout to use for individual post pages.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">'Post'</code>.

From the default value we can see why the blog plugin looks for a <code class="inline-code-block">Post</code> layout component. Since the blog plugin looks for the <code class="inline-code-block">Post</code> layout component by default, we don't need to explicitly set the property. However, we're going to explicitly set it because this once again gives us a quick reference to the property and its value.

It's also possible to use a custom value for the <code class="inline-code-block">itemLayout</code> property, e.g., you could use a value of <code class="inline-code-block">MyPost</code> which you would have to explicitly set in the <code class="inline-code-block">config.js</code> file. Then you would have to create a <code class="inline-code-block">MyPost.vue</code> file inside of the <code class="inline-code-block">layouts</code> directory.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{56}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
            layout: 'IndexPost',
            itemLayout: 'Post',
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

### itemPermalink

We're now ready to add the <code class="inline-code-block">itemPermalink</code> property which is used to build customized <span class="post-term-one">permalinks</span> for each blog post.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">'/:year/:month/:day/:slug'</code>.

From the default value we can see how the blog plugin built the customized <span class="post-term-one">permalinks</span> after only setting the <code class="inline-code-block">dirname</code> property. Since the blog plugin uses the value we currently want, we don't need to explicitly set the property. However, just like the other properties we're going to explicitly set it because this gives us a quick reference to the property and its value.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{57}
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
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
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
  plugins: [
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
            layout: 'IndexPost',
            itemLayout: 'Post',
            itemPermalink: '/:year/:month/:day/:slug',
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

### Summary of URLs and Layouts

Here's a table that summarizes the relationship between the page URLs the blog plugin builds using customized <span class="post-term-one">permalinks</span> and the layout components.

| URLs                                  | Layouts                |
| ------------------------------------- | ---------------------- |
| <code class="inline-code-block">/posts/</code>                                   | <code class="inline-code-block">IndexPost</code> (falls back to <code class="inline-code-block">Layout</code>) |
| <code class="inline-code-block">/2020/07/03/example-page-1/</code>      | <code class="inline-code-block">Post</code>                 |
| <code class="inline-code-block">/2021/11/16/example-page-2/</code> | <code class="inline-code-block">Post</code>                 |
| <code class="inline-code-block">/2022/05/08/example-page-3/</code>      | <code class="inline-code-block">Post</code>                 |

## Next Steps

In the next tutorial we'll be discussing the configuration for the <code class="inline-code-block">pagination</code> property as well as how to access the <span class="post-term-one">pagination</span> data in the layout components by using the <span class="post-term-one">Client API</span>.
