---
title: VuePress Tutorial 5 - Configuration Basics
author: Jay the Code Monkey
date: 2022-01-26T17:54:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn about the configuration basics for VuePress, then check out VuePress Tutorial 5 - Configuration Basics! 🍌🐒
cardDescription: Currently, the site consists of a homepage with a title saying "Hello VuePress", and a search box which builds an index from...
img: vuepress-tutorials/tutorial-5/vuepress-tutorial-5-configuration-basics-post.png
altText: VuePress Tutorial 5 Configuration Basics Post Picture
canonicalUrl: https://codemonkeys.tech/vuepress-tutorial-5/
sidebar: auto
permalink: /vuepress-tutorial-5/
redirectFrom: /posts/2022/01/26/vuepress-tutorial-5/
meta:
  - property: 'og:title'
    content: 'VuePress Tutorial 5 - Configuration Basics'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-5/vuepress-tutorial-5-configuration-basics-post-link.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'VuePress Tutorial 5 - Configuration Basics Image'
  - property: 'og:url'
    content: 'https://codemonkeys.tech/vuepress-tutorial-5/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn about the configuration basics for VuePress, then check out VuePress Tutorial 5 - Configuration Basics! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'VuePress Tutorial 5 - Configuration Basics'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn about the configuration basics for VuePress, then check out VuePress Tutorial 5 - Configuration Basics! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://codemonkeys.tech/vuepress-tutorial-5/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-5/vuepress-tutorial-5-configuration-basics-post-link.png'
  - name: 'twitter:image:alt'
    content: 'VuePress Tutorial 5 - Configuration Basics Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# VuePress Tutorial 5 - Configuration Basics

:::

## Adding a Config File

Currently, the site consists of a homepage with a title saying "Hello VuePress" and a search box provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) which builds an index from all <code class="inline-code-block">h2</code> and <code class="inline-code-block">h3</code> [markdown](https://vuepress.vuejs.org/config/#markdown) headers and from the <code class="inline-code-block">title</code> and <code class="inline-code-block">tags</code> included in the [frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html) of pages.

We'll be discussing the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), [markdown](https://vuepress.vuejs.org/config/#markdown), and [frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html) in more detail in future tutorials.

To see your site be sure to start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/).

The site is working, but it doesn't have a lot of functionality or customization. To add more functionality and customization like site navigation with a navbar, a site title, a site description, favicons, etc. we need to add a config file.

Before adding the config file, let's first create a <code class="inline-code-block">.vuepress</code> directory in the <code class="inline-code-block">docs</code> directory. The <code class="inline-code-block">.vuepress</code> directory will be used to store all [VuePress](https://vuepress.vuejs.org/) specific directories and files.

The directory structure for your site should now look something like this:

<code-group class="remove-code-group-line-numbers">
<code-block title="Directory Structure with .vuepress">
```
.
├── .yarn (Optional)
│   ├── releases
│   │   └── yarn-1.22.17.cjs
├── docs
│   ├── .vuepress
│   └── README.md
├── node_modules
├── .gitattributes (Optional)
├── .gitignore
├── .yarnrc (Optional)
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```
</code-block>
</code-group>

Now inside of the <code class="inline-code-block">.vuepress</code> directory, let's add a <code class="inline-code-block">config.js</code> file.

After adding the <code class="inline-code-block">config.js</code> file, the directory structure for your site should now look something like this:

<code-group class="remove-code-group-line-numbers">
<code-block title="Directory Structure with config.js">
```
.
├── .yarn (Optional)
│   ├── releases
│   │   └── yarn-1.22.17.cjs
├── docs
│   ├── .vuepress
│   │   └── config.js
│   └── README.md
├── node_modules
├── .gitattributes (Optional)
├── .gitignore
├── .yarnrc (Optional)
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```
</code-block>
</code-group>

The <code class="inline-code-block">config.js</code> file should export a JavaScript object like the following:

<code-group>
<code-block title="config.js File">
```js
module.exports = {};
```
</code-block>
</code-group>

If you run into any issues when adding the directory and file above, then be sure to check out the [Configuration](https://vuepress.vuejs.org/guide/basic-config.html) documentaion.

::: tip Alternative Config Formats
In this series we'll be using a JS config file format, i.e., <code class="inline-code-block">.vuepress/config.js</code>. However, [VuePress](https://vuepress.vuejs.org/) also supports the following config file formats: YAML - <code class="inline-code-block">.vuepress/config.yml</code>, TOML - <code class="inline-code-block">.vuepress/config.toml</code>, and TS - <code class="inline-code-block">.vuepress/config.ts</code>. If you want to use TS, then you need to have a [VuePress](https://vuepress.vuejs.org/) version of <code class="inline-code-block">1.9.0+</code> installed. See the [TypeScript as Config](https://vuepress.vuejs.org/guide/typescript-as-config.html) documentation for more details.
:::

## Config File Properties

Now that we have added a <code class="inline-code-block">config.js</code> file, we can begin to add more functionality and customization to the site by setting some of the basic config file properties.

The properties we'll be setting will be using the <code class="inline-code-block">\<head></code>, <code class="inline-code-block">\<meta></code>, and <code class="inline-code-block">\<title></code> tags. To learn more about these tags check out the following references: [HTML \<head> Tag](https://www.w3schools.com/tags/tag_head.asp), [HTML \<meta> Tag](https://www.w3schools.com/tags/tag_meta.asp), and [HTML \<title> Tag](https://www.w3schools.com/tags/tag_title.asp).

As we develop the site we'll be adding more config file properties as needed. For a full list of the available config file properties check out the [Config Reference](https://vuepress.vuejs.org/config/).

### Title

The <code class="inline-code-block">title</code> property is used to define the title for the site. The provided value is used to prefix all page titles, and it gets shown in the navbar when using the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) as a link to the homepage.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">undefined</code>.

Now let's set the <code class="inline-code-block">title</code> of the site:

<code-group>
<code-block title="Adding a Title">
```js
module.exports = {
  title: 'Code Monkeys'
};
```
</code-block>
</code-group>

After adding the <code class="inline-code-block">title</code> and saving the file, you should see <code class="inline-code-block">Code Monkeys</code> or whatever value you set as your site's <code class="inline-code-block">title</code> in the top left of the navbar as a link to the homepage.

You can also inspect the page, go to the Elements tab, open the <code class="inline-code-block">\<head></code> tag, and you'll see the following:

<code-group>
<code-block title="Viewing the Title">
```html
<head>
  ...
  <title>Hello VuePress | Code Monkeys</title>
  ...
</head>
```
</code-block>
</code-group>

The value of the <code class="inline-code-block">\<title></code> tag will be whatever you set as the value for the <code class="inline-code-block">title</code> of your site.

::: tip Removing Hello VuePress
When we update the homepage in the next tutorial, we'll remove the <code class="inline-code-block">Hello VuePress |</code> from the <code class="inline-code-block">\<title></code> tag.
:::

### Description

The <code class="inline-code-block">description</code> property is used to define the description for the site. The provided value is used in a <code class="inline-code-block">\<meta></code> tag in the <code class="inline-code-block">\<head></code> tag of the site.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">undefined</code>.

Now let's set the <code class="inline-code-block">description</code> of the site:

<code-group>
<code-block title="Adding a Description">
```js
module.exports = {
  description: 'Learn to Code like a Monkey by joining the Code Monkeys Community!!! We create videos, tutorials, blog posts, etc. to help others learn about code and other tech related topics! Start Monkeying Around Today!!! 🐵'
};
```
</code-block>
</code-group>

After adding the <code class="inline-code-block">description</code> and saving the file, you can inspect the page, go to the Elements tab, open the <code class="inline-code-block">\<head></code> tag, and you'll see the following:

<code-group>
<code-block title="Viewing the Description">
```html
<head>
  ...
  <meta name="description" content="Learn to Code like a Monkey by joining the Code Monkeys Community!!! We create videos, tutorials, blog posts, etc. to help others learn about code and other tech related topics! Start Monkeying Around Today!!! 🐵">
  ...
</head>
```
</code-block>
</code-group>

The value of the <code class="inline-code-block">content</code> attribute will be whatever you set as the value for the <code class="inline-code-block">description</code> of your site.

### Head

The <code class="inline-code-block">head</code> property is used to inject extra tags into the <code class="inline-code-block">\<head></code> tag of the site.

The expected type is an <code class="inline-code-block">array</code>, and the default value is <code class="inline-code-block">[]</code>.

You can specify a tag to inject into the <code class="inline-code-block">\<head></code> tag by using the following form: <code class="inline-code-block">[tagName, { attr1Name: attr1Value, attr2Name: attr2Value, ... }]</code>.

Here are some examples of what can be injected into the <code class="inline-code-block">\<head></code> tag:

- Author of the Site
- Favicons
- Social Media Metadata
- Links to External Style Sheets
- Client-Side Scripts

We'll be injecting more tags into the <code class="inline-code-block">\<head></code> tag as we develop the site.

To start we'll set an <code class="inline-code-block">author</code> by using a <code class="inline-code-block">\<meta></code> tag in the <code class="inline-code-block">\<head></code> tag:

<code-group>
<code-block title="Adding an Author to the Head Tag">
```js
module.exports = {
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey'
      }
    ]
  ]
};
```
</code-block>
</code-group>

After adding the <code class="inline-code-block">author</code> and saving the file, you can inspect the page, go to the Elements tab, open the <code class="inline-code-block">\<head></code> tag, and you'll see the following:

<code-group>
<code-block title="Viewing the Author">
```html
<head>
  ...
  <meta name="author" content="Jay the Code Monkey">
  ...
</head>
```
</code-block>
</code-group>

To change the <code class="inline-code-block">author</code> for your site you can use a different value for the <code class="inline-code-block">content</code> attribute.

## Updated Config File

Here's the content of the <code class="inline-code-block">config.js</code> file after adding the <code class="inline-code-block">title</code>, <code class="inline-code-block">description</code>, and <code class="inline-code-block">author</code>:

<code-group>
<code-block title="Updated Config File">
```js
module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community!!! We create videos, tutorials, blog posts, etc. to help others learn about code and other tech related topics! Start Monkeying Around Today!!! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey'
      }
    ]
  ]
};
```
</code-block>
</code-group>

Be sure to substitute the values with the preferred values for your site.

## Next Steps

In the next tutorial we'll discuss the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) in more detail, specifically the homepage layout.
