---
title: VuePress Tutorial 7 - Navbar Logo and Links
author: Jay the Code Monkey
date: 2022-03-12T17:46:45.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to configure the navbar for VuePress, then check out VuePress Tutorial 7 - Navbar Logo and Links! 🍌🐒
cardDescription: In this tutorial we'll be discussing how to configure the navbar by using the options exposed by the default theme...
img: vuepress-tutorials/tutorial-7/vuepress-tutorial-7-navbar-logo-and-links-post.png
altText: VuePress Tutorial 7 Navbar Logo and Links Post Picture
sidebar: auto
permalink: /vuepress-tutorial-7/
redirectFrom: /posts/2022/03/12/vuepress-tutorial-7/
meta:
  - property: 'og:title'
    content: 'VuePress Tutorial 7 - Navbar Logo and Links'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-7/vuepress-tutorial-7-navbar-logo-and-links-post-link.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'VuePress Tutorial 7 - Navbar Logo and Links Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/vuepress-tutorial-7/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn how to configure the navbar for VuePress, then check out VuePress Tutorial 7 - Navbar Logo and Links! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'VuePress Tutorial 7 - Navbar Logo and Links'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Want to learn how to configure the navbar for VuePress, then check out VuePress Tutorial 7 - Navbar Logo and Links! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/vuepress-tutorial-7/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/vuepress-tutorials/tutorial-7/vuepress-tutorial-7-navbar-logo-and-links-post-link.png'
  - name: 'twitter:image:alt'
    content: 'VuePress Tutorial 7 - Navbar Logo and Links Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

::: slot header

# VuePress Tutorial 7 - Navbar Logo and Links

:::

## What is a Navbar?

In this tutorial we'll be discussing how to configure the navbar by using the options exposed by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html). A navbar is used to provide users with a quick and easy way to navigate to the main pages of a site. Most sites display the navbar on most or all of the pages, so it's generally designed to be a global component which allows it to be easily shown on all pages.

The navbar for a site made with [VuePress](https://vuepress.vuejs.org/) can consist of a <span class="post-term-one">logo</span>, a <span class="post-term-one">site title</span>, a <span class="post-term-one">search box</span>, <span class="post-term-one">internal links</span>, <span class="post-term-one">languages the site can be translated to</span>, and <span class="post-term-one">external links</span>. Depending on how you want to configure your navbar your site can have all of or some of these options. We'll be discussing how to configure the <span class="post-term-one">logo</span>, <span class="post-term-one">site title</span>, <span class="post-term-one">internal links</span>, and <span class="post-term-one">external links</span>. We'll also discuss how to disable the navbar globally as well as locally for specific pages.

Take a look at the navbar on this page to see what we'll be designing for the [Code Monkeys Blog](/). To see another example you can check out the [VuePress](https://vuepress.vuejs.org/) navbar as well.

::: tip Using a Custom Theme
Since the options being used for the navbar are provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), they may be different if you're [using a custom theme](https://vuepress.vuejs.org/theme/using-a-theme.html).
:::

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

## Navbar Logo and Site Title

The navbar logo is used to brand your site, and it provides a link to the homepage. The image we're going to be using for the navbar is the Code Monkeys face logo. We're going to be adding the image which is named <code class="inline-code-block">face.png</code> to the <code class="inline-code-block">code-monkeys-logos</code> directory.

The site title in the navbar also provides a link to the homepage, and it's being set by the value of the <code class="inline-code-block">title</code> property in the <code class="inline-code-block">config.js</code> file which we set up in a previous tutorial.

After adding the image, the directory structure for your site should now look something like this:

<code-group class="remove-code-group-line-numbers">
<code-block title="Directory Structure with Code Monkeys Face Logo">
```{10}
.
├── .yarn (Optional)
│   ├── releases
│   │   └── yarn-1.22.17.cjs
├── docs
│   ├── .vuepress
│   │   ├── public
│   │   │   ├── images
│   │   │   │   ├── code-monkeys-logos
│   │   │   │   │   ├── face.png
│   │   │   │   │   └── full.png
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

If the directory structure is confusing you, then be sure to take a look at the [Adding an Image](/vuepress-tutorial-6/#adding-an-image) section from the previous tutorial where it's described in more detail. That section also contains links to resources for creating, editing, and compressing images and for coming up with color schemes and palettes for your site.

Here's the Code Monkeys face logo:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png')"
      alt="Code Monkeys Head and Shoulders Logo"
  />
</div>

You can download the logo right here from your browser, and it will also be in the <code class="inline-code-block">tutorial-7</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-6) repository.

After adding the image to the site, we can reference it in the <code class="inline-code-block">config.js</code> file as follows:

<code-group>
<code-block title="Adding the Navbar Logo">
```js{7-9}
module.exports = {
  title: 'Code Monkeys',
  ...
  head: [
    ...
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/face.png'
  }
};
```
</code-block>
</code-group>

Notice you don't need to include <code class="inline-code-block">.vuepress/public</code> in the path to the navbar logo because whenever you reference assets stored in the <code class="inline-code-block">public</code> directory it's added automatically.

Also, notice the value of the site title is being set here by using the <code class="inline-code-block">title</code> property.

Here's what the HTML looks like after adding the navbar logo:

<code-group>
<code-block title="HTML After Adding the Navbar Logo">
```html{9-10}
<html lang="en-US">
  <head>...</head>
  <body>
    <div id="app">
      <div class="theme-container no-sidebar">
        <header class="navbar">
            <div class="sidebar-button">...</div>
            <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">
                <img src="/images/code-monkeys-logos/face.png" alt="Code Monkeys" class="logo">
                <span class="site-name can-hide">Code Monkeys</span>
            </a>
            <div class="links" style="max-width: 1094px;">...</div>
        </header>
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main aria-labelledby="main-title" class="home">...</main>
      </div>
      <div class="global-ui"></div>
    </div>
    ...
  </body>
</html>
```
</code-block>
</code-group>

You should now see the navbar logo in the upper left of the page.

## Navbar Links

To add links to the navbar other than to the homepage we need to add a <code class="inline-code-block">nav</code> property to the <code class="inline-code-block">themeConfig</code> object. The <code class="inline-code-block">nav</code> property expects an array of navbar link objects. We're going to start by adding internal links.

### Internal Links

An internal link is a link that points to another section of the same page or to another page on the same site or domain.

To add an internal link you need to add <code class="inline-code-block">{ text: 'Link Name', link: '/path-to-page/' }</code> to the <code class="inline-code-block">nav</code> property where the <code class="inline-code-block">text</code> defines the name of the link in the navbar and <code class="inline-code-block">link</code> defines the path to the preferred page.

For our site we're going to add the following internal links: <code class="inline-code-block">Topics</code>, <code class="inline-code-block">Posts</code>, <code class="inline-code-block">Resources</code>, and <code class="inline-code-block">Donate</code>.

Here's what the <code class="inline-code-block">config.js</code> file looks like after adding the internal links:

<code-group>
<code-block title="Adding Internal Links">
```js{9-26}
module.exports = {
  title: 'Code Monkeys',
  ...
  head: [
    ...
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/face.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/'
      },
      {
        text: 'Posts',
        link: '/posts/'
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
  }
};
```
</code-block>
</code-group>

Here's what the HTML looks like after adding the internal links:

<code-group>
<code-block title="HTML After Adding the Internal Links">
```html{11-25}
<html lang="en-US">
  <head>...</head>
  <body>
    <div id="app">
      <div class="theme-container no-sidebar">
        <header class="navbar">
            <div class="sidebar-button">...</div>
            <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
            <div class="links" style="max-width: 1094px;">
                <div class="search-box">...</div>
                <nav class="nav-links can-hide">
                    <div class="nav-item">
                        <a href="/topics/" class="nav-link"> Topics </a>
                    </div>
                    <div class="nav-item">
                        <a href="/posts/" class="nav-link"> Posts </a>
                    </div>
                    <div class="nav-item">
                        <a href="/resources/" class="nav-link"> Resources </a>
                    </div>
                    <div class="nav-item">
                        <a href="/donate/" class="nav-link"> Donate </a>
                    </div>
                    <!---->
                </nav>
            </div>
        </header>
        ...
      </div>
      ...
    </div>
    ...
  </body>
</html>
```
</code-block>
</code-group>

Your navbar should now have <code class="inline-code-block">Topics</code>, <code class="inline-code-block">Posts</code>, <code class="inline-code-block">Resources</code>, and <code class="inline-code-block">Donate</code> links to the left of the search box.

::: tip 404 When Clicking the Links
If you click the links they will show the 404 layout because we haven't set up the pages for <code class="inline-code-block">Topics</code>, <code class="inline-code-block">Posts</code>, <code class="inline-code-block">Resources</code>, and <code class="inline-code-block">Donate</code> yet. In future tutorials we'll create these pages which will fix these issues.
:::

### External Links

An external link is a link that points to a page outside of the same site or domain.

Adding an external link is the same as adding an internal link except the value provided to the <code class="inline-code-block">link</code> property is a URL to an external site.

External links automatically get <code class="inline-code-block">target="\_blank" rel="noopener noreferrer"</code> attributes added to the <code class="inline-code-block">\<a></code> tag. The <code class="inline-code-block">target</code> attribute specifies where to open the linked document, and the <code class="inline-code-block">rel</code> attribute specifies the relationship between the current document and the linked document.

These attributes are used to prevent a vulnerability known as [reverse tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing) which can happen when a user clicks on an external link. All major browsers have fixed this vulnerability, but you can still include these attributes in case a user is using a browser without this security update.

You can also customize the values for the <code class="inline-code-block">target</code> and <code class="inline-code-block">rel</code> attributes by specifying them as properties in the external link. You can disable the <code class="inline-code-block">rel</code> attribute for a link by setting it like this <code class="inline-code-block">rel: false</code>.

For example, we could add an external link to the [code-monkeys-blog](https://github.com/codemonkeysio/code-monkeys-blog) repository on our site with custom values for <code class="inline-code-block">target</code> and <code class="inline-code-block">rel</code>.

Here's what the <code class="inline-code-block">config.js</code> file looks like after adding the external link:

<code-group>
<code-block title="Adding the External Link">
```js{26-31}
module.exports = {
  title: 'Code Monkeys',
  ...
  head: [
    ...
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/face.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/'
      },
      {
        text: 'Posts',
        link: '/posts/'
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'Donate',
        link: '/donate/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/codemonkeysio/code-monkeys-blog',
        target:'_self',
        rel:false
      }
    ]
  }
};
```
</code-block>
</code-group>

Here's what the HTML looks like after adding the external link:

<code-group>
<code-block title="HTML After Adding the External Link">
```html{16-21}
<html lang="en-US">
  <head>...</head>
  <body>
    <div id="app">
      <div class="theme-container no-sidebar">
        <header class="navbar">
            <div class="sidebar-button">...</div>
            <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
            <div class="links" style="max-width: 1094px;">
                <div class="search-box">...</div>
                <nav class="nav-links can-hide">
                    <div class="nav-item">...</div>
                    <div class="nav-item">...</div>
                    <div class="nav-item">...</div>
                    <div class="nav-item">...</div>
                    <div class="nav-item">
                        <a href="https://github.com/codemonkeysio/code-monkeys-blog" target="_self" class="nav-link external"> 
                            " GitHub "
                            <!---->
                        </a>
                    </div>
                    <!---->
                </nav>
            </div>
        </header>
        ...
      </div>
      ...
    </div>
    ...
  </body>
</html>
```
</code-block>
</code-group>

::: tip No External Link in Navbar
Currently, the [Code Monkeys Blog](/) doesn't include an external link in the navbar, but in the future one may be added for the [code-monkeys-blog](https://github.com/codemonkeysio/code-monkeys-blog) repository using the default values for external links mentioned above.
:::

### Dropdown Menus

The links in the navbar can also be dropdown menus if an <code class="inline-code-block">items</code> property which expects an array of navbar link objects is used instead of just a <code class="inline-code-block">link</code> property.

For example, the <code class="inline-code-block">Posts</code> link we made earlier can be turned into a dropdown menu containing links to pages for <code class="inline-code-block">All Posts</code> and for posts <code class="inline-code-block">By Topic</code>.

Here's what the <code class="inline-code-block">config.js</code> file looks like after turning the <code class="inline-code-block">Posts</code> link into a dropdown menu:

<code-group>
<code-block title="Adding a Dropdown Menu">
```js{14-20}
module.exports = {
  title: 'Code Monkeys',
  ...
  head: [
    ...
  ],
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
          { text: 'By Topic', link: '/topics/' }
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
  }
};
```
</code-block>
</code-group>

Here's what the HTML looks like after adding a dropdown menu:

<code-group>
<code-block title="HTML After Adding a Dropdown Menu">
```html{9-28}
<header class="navbar">
    <div class="sidebar-button">...</div>
    <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
    <div class="links" style="max-width: 1094px;">
        <div class="search-box">...</div>
        <nav class="nav-links can-hide">
            <div class="nav-item">...</div>
            <div class="nav-item">
                <div class="dropdown-wrapper">
                    <button type="button" aria-label="Posts" class="dropdown-title">
                        <span class="title">Posts</span>
                        <span class="arrow down"></span>
                    </button>
                    <button type="button" aria-label="Posts" class="mobile-dropdown-title">
                        <span class="title">Posts</span>
                        <span class="arrow right"></span>
                    </button>
                    <ul class="nav-dropdown" style="display: none;">
                        <li class="dropdown-item">
                            <!---->
                            <a href="/posts/" class="nav-link"> All Posts </a>
                        </li>
                        <li class="dropdown-item">
                            <!---->
                            <a href="/topics/" class="nav-link"> By Topic </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">...</div>
            <div class="nav-item">...</div>
            <!---->
        </nav>
    </div>
</header>
```
</code-block>
</code-group>

Your navbar should now have a <code class="inline-code-block">Posts</code> dropdown menu containing <code class="inline-code-block">All Posts</code> and <code class="inline-code-block">By Topic</code> links.

### Dropdown Menu Subgroups

It's also possible to make a dropdown menu with subgroups where a label is used to group a list of links. This is done by using the <code class="inline-code-block">items</code> property which expects an array of navbar link objects instead of using just a <code class="inline-code-block">link</code> property for a dropdown menu entry.

For example, the <code class="inline-code-block">By Topic</code> link we made earlier can be turned into a subgroup containing links to posts filtered by main topics. Currently, the blog consists of three main topics <code class="inline-code-block">LeetCode</code>, <code class="inline-code-block">Node.js</code>, and <code class="inline-code-block">VuePress</code>, so we'll add each of these as an entry to the <code class="inline-code-block">By Topic</code> subgroup in our dropdown menu.

Here's what the <code class="inline-code-block">config.js</code> file looks like after turning the <code class="inline-code-block">By Topic</code> link in the dropdown menu into a subgroup:

<code-group>
<code-block title="Adding a Subgroup to the Dropdown Menu">
```js{18-25}
module.exports = {
  title: 'Code Monkeys',
  ...
  head: [
    ...
  ],
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
  }
};
```
</code-block>
</code-group>

::: tip Final config.js File
This is how the <code class="inline-code-block">config.js</code> file should look at the end of this tutorial if you're following along with the building of the blog.
:::

Here's what the HTML looks like after adding a subgroup to the dropdown menu:

<code-group>
<code-block title="HTML After Adding a Subgroup to the Dropdown Menu">
```html{16-27}
<div class="dropdown-wrapper">
    <button type="button" aria-label="Posts" class="dropdown-title">
        <span class="title">Posts</span>
        <span class="arrow down"></span>
    </button>
    <button type="button" aria-label="Posts" class="mobile-dropdown-title">
        <span class="title">Posts</span>
        <span class="arrow right"></span>
    </button>
    <ul class="nav-dropdown" style="display: none;">
        <li class="dropdown-item">
            <!---->
            <a href="/posts/" class="nav-link"> All Posts </a>
        </li>
        <li class="dropdown-item">
            <h4> By Topic </h4>
            <ul class="dropdown-subitem-wrapper">
                <li class="dropdown-subitem">
                    <a href="/topics/LeetCode/" class="nav-link"> LeetCode </a>
                </li>
                <li class="dropdown-subitem">
                    <a href="/topics/Node.js/" class="nav-link"> Node.js </a>
                </li>
                <li class="dropdown-subitem">
                    <a href="/topics/VuePress/" class="nav-link"> VuePress </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
```
</code-block>
</code-group>

Your navbar should now have a <code class="inline-code-block">By Topic</code> subgroup in the dropdown menu containing these links <code class="inline-code-block">LeetCode</code>, <code class="inline-code-block">Node.js</code>, and <code class="inline-code-block">VuePress</code>.

To add more links to the <code class="inline-code-block">By Topic</code> subgroup all you need to do is add another element into its <code class="inline-code-block">items</code> array.

::: tip 404 Reminder When Clicking the Links
Clicking the links will show the 404 layout because we haven't set up the pages for the navbar links except for the homepage. In future tutorials we'll create these pages which will fix these issues.
:::

## Disabling the Navbar

You can disable the navbar globally if you prefer to not have a navbar for your site. You also have the option to disable the navbar locally for specific pages. We'll demonstrate how to do each of these below.

### Globally

To disable the navbar globally add the following to your <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="Disabling the Navbar Globally">
```js
module.exports = {
  themeConfig: {
    navbar: false
  }
};
```
</code-block>
</code-group>

The <code class="inline-code-block">navbar</code> property is a predefined variable provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html). Check out [Predefined Variables Powered By Default Theme](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables-powered-by-default-theme) for a list of the predefined variables.

### Locally

To disable the navbar locally for a specific page you can add the following to the page's frontmatter:

<code-group>
<code-block title="Disabling the Navbar Locally">
```yaml
---
navbar: false
---
```
</code-block>
</code-group>

## Next Steps

In the next tutorial we'll begin creating the Footer component which will stick to the bottom of the page and consist of social media icons and a made by message.

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';

export default {
  components: {
    VLazyImage
  }
}
</script>
