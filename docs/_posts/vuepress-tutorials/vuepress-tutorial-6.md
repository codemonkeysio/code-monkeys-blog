---
title: VuePress Tutorial 6 - Homepage Layout
date: 2022-02-03T05:06:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn about the default theme homepage layout for VuePress, then check out VuePress Tutorial 6 - Homepage Layout! 🍌🐒
preview: In this tutorial we'll be discussing how to configure the homepage layout by using the options exposed by the default theme...
img: vuepress-tutorials/tutorial-6/vuepress-tutorial-6-homepage-layout-post.png
placeholder: vuepress-tutorials/tutorial-6/vuepress-tutorial-6-homepage-layout-post-90w.png
alt: VuePress Tutorial 6 - Homepage Layout Post Picture
linkImg: vuepress-tutorials/tutorial-6/vuepress-tutorial-6-homepage-layout-post-link.png
linkImgAlt: VuePress Tutorial 6 - Homepage Layout Image
videoURL: 'https://www.youtube-nocookie.com/embed/u7hN8zrvjlY'
canonicalUrl: vuepress-tutorial-6/
permalink: /vuepress-tutorial-6/
redirectFrom: /posts/2022/02/03/vuepress-tutorial-6/
---

::: slot header

# VuePress Tutorial 6 - Homepage Layout

:::

## What is a VuePress Theme?

In this tutorial we'll be discussing how to configure the homepage layout by using the options exposed by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) which comes with the installation of [VuePress](https://vuepress.vuejs.org/) and is designed for technical documentation. Along with the homepage the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) also allows customization for the navbar, sidebar, search box, etc. We'll discuss those customizations in more detail in future tutorials.

Before moving on to the homepage layout, we're going to first describe what a theme is. If you remember from the [VuePress Tutorial 2 - Why Use VuePress?](/vuepress-tutorial-2) post, a [VuePress](https://vuepress.vuejs.org/) theme allows you to control how your project is structured. Within a theme you are able to create directories that handle <span class="post-term-one">global components</span>, <span class="post-term-one">components</span>, <span class="post-term-one">layouts</span>, <span class="post-term-one">styles</span>, and <span class="post-term-one">templates</span>. You can also create files for <span class="post-term-one">theme configuration</span> and <span class="post-term-one">app level enhancements</span>. So, a theme handles all of the layout and interactivity details for your site.

Now that we have a good understanding of what a theme is, let's move on to configuring the homepage layout.

## Homepage Layout

To see the homepage layout in action you can take a look at the homepages of  the [VuePress](https://vuepress.vuejs.org/) site and the [Code Monkeys Blog](/).

::: tip Using a Custom Theme
Since the options being used for the homepage are provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), they may be different if you're [using a custom theme](https://vuepress.vuejs.org/theme/using-a-theme.html).
:::

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes to your site. If the changes aren't appearing after you save them, then try restarting your local development server.

### Using the Homepage Layout

To use the homepage layout open the <code class="inline-code-block">README.md</code> file in the <code class="inline-code-block">docs</code> directory of your project then you need to add <code class="inline-code-block">home: true</code> to a [YAML](https://yaml.org/) frontmatter block at the top of the page.

We're also going to remove the <code class="inline-code-block"># Hello VuePress</code> line from the file since we're going to start customizing the homepage.

The <code class="inline-code-block">README.md</code> file now looks like this:

<code-group>
<code-block title="Specifying the Homepage Layout">
```md
---
home: true
---
```
</code-block>
</code-group>

Before discussing the changes to the site, let's first describe what [YAML](https://yaml.org/) and frontmatter are.

### YAML Frontmatter Blocks

[YAML](https://yaml.org/) is a recursive acroynym for <span class="post-term-one">"YAML Ain't Markup Language"</span>, and it's a human-readable data serialization language that can be used with a wide variety of programming languages. Frontmatter is structured metadata that allows you to add variables to your pages.

The [YAML](https://yaml.org/) frontmatter block support comes with the installation of [VuePress](https://vuepress.vuejs.org/) and is processed using the frontmatter parser [gray-matter](https://github.com/jonschlinkert/gray-matter).

When you add a [YAML](https://yaml.org/) frontmatter block to a page you need to declare it at the top of a Markdown file, and the content must adhere to proper [YAML](https://yaml.org/) formatting between a set of triple-dashed lines, i.e., <code class="inline-code-block">---</code> like the example above.

Within the triple-dashed lines you are able to set [predefined variables](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables), [predefined variables powered by the default theme](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables-powered-by-default-theme), and you can define your own custom variables. These variables can then be accessed within the current page by using the [\$frontmatter](https://vuepress.vuejs.org/guide/global-computed.html#frontmatter) variable. We'll be discussing and adding predefined and custom variables and using the [\$frontmatter](https://vuepress.vuejs.org/guide/global-computed.html#frontmatter) variable as we continue to develop the site.

If you have any questions, then check out the [Frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html) documentation.

### Alternative Frontmatter Formats

[VuePress](https://vuepress.vuejs.org/) also supports [JSON](https://www.json.org/json-en.html) and [TOML](https://toml.io/en/) frontmatter syntax.

We'll be using the [YAML](https://yaml.org/) syntax throughout the tutorials, but if you're interested here's how to set the homepage layout using the other supported syntaxes.

For [JSON](https://www.json.org/json-en.html) the frontmatter needs to start and end with curly brackets:

<code-group>
<code-block title="Specifying the Homepage Layout Using JSON">
```md
---
{
  "home": "true"
}
---
```
</code-block>
</code-group>

For [TOML](https://toml.io/en/) the frontmatter needs to be explicitly marked as <code class="inline-code-block">toml</code>:

<code-group>
<code-block title="Specifying the Homepage Layout Using TOML">
```md
---toml
home = "true"
---
```
</code-block>
</code-group>

Now that we have a better understanding of [YAML](https://yaml.org/) frontmatter blocks, let's discuss the changes to the site after specifying the homepage layout.

### Homepage Layout Changes

Before specifying the homepage layout, the HTML for the homepage consists of the following:

<code-group>
<code-block title="HTML Before Specifying the Homepage Layout">
```html{3,15-27}
<html lang="en-US">
  <head>
    <title>Hello VuePress | Code Monkeys</title>
    ...
    <meta name="description" content="Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵">
    <meta name="author" content="J the Code Monkey">
    ...
  </head>
  <body>
    <div id="app">
      <div class="theme-container no-sidebar">
        <header class="navbar">...</header>
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main class="page">
          <div class="theme-default-content content__default">
            <h1 id="hello-vuepress">
              <a href="#hello-vuepress" class="header-anchor">#</a>
              " Hello VuePress"
            </h1>
          </div>
          <footer class="page-edit">
            <!---->
            <!---->
          </footer>
          <!---->
        </main>
      </div>
      <div class="global-ui"></div>
    </div>
    ...
  </body>
</html>
```
</code-block>
</code-group>

The highlighted lines refer to what gets changed after specifying the homepage layout.

After specifying the homepage layout, the HTML for the homepage consists of the following:

<code-group>
<code-block title="HTML After Specifying the Homepage Layout">
```html{3,15-27}
<html lang="en-US">
  <head>
    <title>Code Monkeys</title>
    ...
    <meta name="description" content="Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵">
    <meta name="author" content="J the Code Monkey">
    ...
  </head>
  <body>
    <div id="app">
      <div class="theme-container no-sidebar">
        <header class="navbar">...</header>
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main aria-labelledby="main-title" class="home">
          <header class="hero">
            <!---->
            <h1 id="main-title"> Code Monkeys </h1>
            <p class="description">
              " Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵"
            </p>
            <!---->
          </header>
          <!---->
          <div class="theme-default-content custom content__default"></div>
          <!---->
        </main>
      </div>
      <div class="global-ui"></div>
    </div>
    ...
  </body>
</html>
```
</code-block>
</code-group>

Here are the changes in the HTML after specifying the homepage layout:

- Line 3: The initial <code class="inline-code-block">title</code> tag that was set to <code class="inline-code-block">Hello VuePress | Code Monkeys</code> is now set to <code class="inline-code-block">Code Monkeys</code>.
- Line 15: The initial <code class="inline-code-block">main</code> tag had a class of <code class="inline-code-block">"page"</code>, and it now has a class of <code class="inline-code-block">"home"</code> and an attribute of <code class="inline-code-block">aria-labelledby="main-title"</code>.
- Line 16: The initial child elements of the <code class="inline-code-block">div</code> tag are removed since the <code class="inline-code-block"># Hello VuePress</code> line was removed from the <code class="inline-code-block">README.md</code> file, and the <code class="inline-code-block">div</code> tag is moved to line 25 with an added class of <code class="inline-code-block">"custom"</code>. Line 16 now consists of a <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">"hero"</code>, and the child tags of <code class="inline-code-block">\<h1 id="main-title">Code Monkeys\</h1></code> and <code class="inline-code-block">\<p class="description">" Learn to Code like a Monkey... "\</p></code>.
- Line 22: The initial <code class="inline-code-block">footer</code> tag is removed from the page.

### Adding an Image

Before adding a homepage image, we're going to first create a <code class="inline-code-block">public</code> directory inside of the <code class="inline-code-block">.vuepress</code> directory.

The directory structure for your site should now look something like this:

::: vue
.
├── `.yarn` _(**Optional**)_
│   ├── `releases`
│   │   └── yarn-1.22.17.cjs
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   └── config.js
│   └── README.md
├── `node_modules`
├── .gitattributes _(**Optional**)_
├── .gitignore
├── .yarnrc _(**Optional**)_
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
:::

The <code class="inline-code-block">public</code> directory is a static resource directory which is useful in the following cases:

- You need to provide static assests that aren't directly referenced in any of your Markdown or component files, e.g., <span class="post-term-one">favicons</span> and <span class="post-term-one">PWA icons</span> which we'll discuss in more detail in future tutorials.
- You need to serve shared static assets that are referenced outside of your site, e.g., logo images.
- You want to reference images using <span class="post-term-one">absolute URLs</span> in your Markdown and component files.

In a future tutorial we'll discuss what <span class="post-term-one">absolute URLs</span> are in more detail as well as <span class="post-term-one">relative URLs</span>, the <span class="post-term-one">base URL</span>, and how to use <span class="post-term-one">aliases</span>. If you're interested in learning more now, then check out the [Assest Handling](https://vuepress.vuejs.org/guide/assets.html) documentation.

The image we're going to be adding to the homepage is the Code Monkeys full logo. We're going to create an <code class="inline-code-block">images</code> directory in the <code class="inline-code-block">public</code> directory. Then we're going to create a <code class="inline-code-block">code-monkeys-logos</code> directory inside of the <code class="inline-code-block">images</code> directory. These directories are optional, but will be helpful for organizational purposes when we add more images in the future. Now inside of the <code class="inline-code-block">code-monkeys-logos</code> directory, we're going to add the full Code Monkeys logo which is named <code class="inline-code-block">code-monkeys-full-logo.png</code>.

After adding those directories and the image, the directory structure for your site should now look something like this:

::: vue
.
├── `.yarn` _(**Optional**)_
│   ├── `releases`
│   │   └── yarn-1.22.17.cjs
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   │   ├── `images`
│   │   │   │   ├── `code-monkeys-logos`
│   │   │   │   │   └── code-monkeys-full-logo.png
│   │   └── config.js
│   └── README.md
├── `node_modules`
├── .gitattributes _(**Optional**)_
├── .gitignore
├── .yarnrc _(**Optional**)_
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
:::

Here's the full Code Monkeys logo:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/code-monkeys-logos/code-monkeys-full-logo-260w.png')"
      :src-placeholder="$withBase('/images/code-monkeys-logos/code-monkeys-full-logo-150w.png')"
      alt="Code Monkeys Full Logo"
  />
</div>

You can download the logo right here from your browser, and it will also be in the <code class="inline-code-block">tutorial-6</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-6) repository.

The logo was created using [Canva](https://www.canva.com/). The site offers a lot of features for free, but some features and images require payment after your free trial is expired. A good alternative to use is [GIMP](https://www.gimp.org/).

Here are some other useful online image tools:

- <span class="external-link-wrap">[LunaPic](https://www5.lunapic.com/editor/)</span>
- <span class="external-link-wrap">[HCTI API](https://htmlcsstoimage.com/)</span>
- <span class="external-link-wrap">[PhotoScissors](https://photoscissors.com/)</span>
- <span class="external-link-wrap">[iLoveIMG](https://www.iloveimg.com/)</span>

Here are some useful resources for coming up with color schemes and palettes for your site:

- <span class="external-link-wrap">[Coolors](https://coolors.co/)</span>
- <span class="external-link-wrap">[Canva Color Palettes](https://www.canva.com/colors/color-palettes/)</span>
- <span class="external-link-wrap">[Colors Tutorial](https://www.w3schools.com/colors/default.asp)</span>

It's also important to reduce the file sizes of your images by using compression. This will help to optimize your site's bundle size, save bandwidth, and decrease the loading time for your images. [Canva](https://www.canva.com/) and [GIMP](https://www.gimp.org/), and some of the other image tools mentioned above offer the ability to compress your images.

Here are some other useful online tools for image compression:

- <span class="external-link-wrap">[TinyPNG](https://tinypng.com/)</span>
- <span class="external-link-wrap">[Image Compressor](https://imagecompressor.com/)</span>

After adding the logo to the site, we can reference the logo in our homepage by adding <code class="inline-code-block">heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png</code> to the frontmatter.

Notice you don't need to include <code class="inline-code-block">.vuepress/public</code> in the path to the logo because whenever you reference assets stored in the <code class="inline-code-block">public</code> directory it's added automatically.

The <code class="inline-code-block">README.md</code> file now looks like this:

<code-group>
<code-block title="Adding a Homepage Image">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
---
```
</code-block>
</code-group>

The homepage image is added as a child element of the <code class="inline-code-block">\<header></code> tag that has a class of <code class="inline-code-block">"hero"</code>.

Here's what the HTML looks like after adding the homepage image:

<code-group>
<code-block title="HTML After Adding a Homepage Image">
```html{3}
<main aria-labelledby="main-title" class="home">
  <header class="hero">
    <img src="/images/code-monkeys-logos/code-monkeys-full-logo.png" alt="hero">
    <h1 id="main-title"> Code Monkeys </h1>
    <p class="description">...</p>
    <!---->
  </header>
  <!---->
  <div class="theme-default-content custom content__default"></div>
  <!---->
</main>
```
</code-block>
</code-group>

### Adding a Title

Since we already added a site <code class="inline-code-block">title</code> property in the <code class="inline-code-block">config.js</code> file, we already have a title on the homepage which has the same value as the site <code class="inline-code-block">title</code> property.

If you prefer to have the site <code class="inline-code-block">title</code> property and the title on the homepage to be different, then you can add <code class="inline-code-block">heroText: Homepage Title</code> to the frontmatter.

The <code class="inline-code-block">README.md</code> file would look like this:

<code-group>
<code-block title="Adding a Homepage Title">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
heroText: Homepage Title
---
```
</code-block>
</code-group>

For the [Code Monkeys Blog](/) we'll be using the value of the site <code class="inline-code-block">title</code> property for the homepage title, so the <code class="inline-code-block">README.md</code> file will look the same as before:

<code-group>
<code-block title="Using the Site Title for the Homepage Title">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
---
```
</code-block>
</code-group>

Here's the HTML with the homepage title highlighted:

<code-group>
<code-block title="HTML After Adding a Homepage Title">
```html{4}
<main aria-labelledby="main-title" class="home">
  <header class="hero">
    <img src="/images/code-monkeys-logos/code-monkeys-full-logo.png" alt="hero">
    <h1 id="main-title"> Code Monkeys </h1>
    <p class="description">...</p>
    <!---->
  </header>
  <!---->
  <div class="theme-default-content custom content__default"></div>
  <!---->
</main>
```
</code-block>
</code-group>

### Adding a Tagline

Since we already added a site <code class="inline-code-block">description</code> property in the <code class="inline-code-block">config.js</code> file, we already have a tagline on the homepage which has the same value as the site <code class="inline-code-block">description</code> property.

If you prefer to have the site <code class="inline-code-block">description</code> property and the tagline on the homepage to be different, then you can add <code class="inline-code-block">tagline: Your tagline</code> to the frontmatter.

We're going to update the tagline on the homepage from the value of the site <code class="inline-code-block">description</code> to be <code class="inline-code-block">tagline: Let's get down to Monkey Business</code>.

The <code class="inline-code-block">README.md</code> file now looks like this:

<code-group>
<code-block title="Adding a Homepage Tagline">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
tagline: Let's get down to Monkey Business
---
```
</code-block>
</code-group>

Here's the HTML with the homepage tagline highlighted:

<code-group>
<code-block title="HTML After Adding a Homepage Tagline">
```html{5}
<main aria-labelledby="main-title" class="home">
  <header class="hero">
    <img src="/images/code-monkeys-logos/code-monkeys-full-logo.png" alt="hero">
    <h1 id="main-title"> Code Monkeys </h1>
    <p class="description"> Let's get down to Monkey Business </p>
    <!---->
  </header>
  <!---->
  <div class="theme-default-content custom content__default"></div>
  <!---->
</main>
```
</code-block>
</code-group>

### Adding an Action Button

An action button provides a link to a preferred page on your site, and it's placed directly below the tagline.

To add an action button you need to add <code class="inline-code-block">actionText: Text on Action Button</code> and <code class="inline-code-block">actionLink: /preferred-page/</code> to the frontmatter.

We're going to add the <code class="inline-code-block">actionText: Learn to Code like a Monkey →</code> and the <code class="inline-code-block">actionLink: /topics/</code> to the homepage of the site.

The <code class="inline-code-block">README.md</code> file now looks like this:

<code-group>
<code-block title="Adding an Action Button">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
tagline: Let's get down to Monkey Business
actionText: Learn to Code like a Monkey →
actionLink: /topics/
---
```
</code-block>
</code-group>

Here's the HTML with the action button highlighted:

<code-group>
<code-block title="HTML After Adding an Action Button">
```html{6-8}
<main aria-labelledby="main-title" class="home">
  <header class="hero">
    <img src="/images/code-monkeys-logos/code-monkeys-full-logo.png" alt="hero">
    <h1 id="main-title"> Code Monkeys </h1>
    <p class="description"> Let's get down to Monkey Business </p>
    <p class="action">
      <a href="/topics/" class="nav-link action-button"> Learn to Code like a Monkey → </a>
    </p>
  </header>
  <!---->
  <div class="theme-default-content custom content__default"></div>
  <!---->
</main>
```
</code-block>
</code-group>

::: tip 404 When Clicking the Action Button
If you click the action button, it will show the 404 layout because we haven't set up the route to <code class="inline-code-block">/topics/</code>. In a future tutorial we'll create the <code class="inline-code-block">Topics</code> page which will fix this issue.
:::

### Adding Features

Features are text that get displayed under the action button that are used to provide a summary of what your site is about.

You can add as many features as you like, but the recommended number is three. Using three features looks the best with the default styling, and it gives a user a quick introduction to your site.

Here's the format for adding features with titles and details to the frontmatter of your page:

<code-group>
<code-block title="Adding Features with Titles and Details">
```md
---
home: true
features:
  - title: Feature 1
    details: Feature 1 details
  - title: Feature 2
    details: Feature 2 details
  - title: Feature 3
    details: Feature 3 details
---
```
</code-block>
</code-group>

We're going to be adding only the feature titles to the homepage of the site.

The <code class="inline-code-block">README.md</code> file now looks like this:

<code-group>
<code-block title="Adding Feature Titles">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
tagline: Let's get down to Monkey Business
actionText: Learn to Code like a Monkey →
actionLink: /topics/
features:
  - title: Learn
  - title: Code
  - title: Crush
---
```
</code-block>
</code-group>

Here's the HTML with the features highlighted:

<code-group>
<code-block title="HTML After Adding Feature Titles">
```html{10-23}
<main aria-labelledby="main-title" class="home">
  <header class="hero">
    <img src="/images/code-monkeys-logos/code-monkeys-full-logo.png" alt="hero">
    <h1 id="main-title"> Code Monkeys </h1>
    <p class="description"> Let's get down to Monkey Business </p>
    <p class="action">
      <a href="/topics/" class="nav-link action-button"> Learn to Code like a Monkey → </a>
    </p>
  </header>
  <div class="features">
    <div class="feature">
      <h2>Learn</h2>
      <p></p>
    </div>
    <div class="feature">
      <h2>Code</h2>
      <p></p>
    </div>
    <div class="feature">
      <h2>Crush</h2>
      <p></p>
    </div>
  </div>
  <div class="theme-default-content custom content__default"></div>
  <!---->
</main>
```
</code-block>
</code-group>

### Adding a Footer

A footer typically contains:

- Authorship Information
- Copyright Information
- Contact Information
- Sitemap (Important Links Regardless of Current Page - Similar to Global Navbar)

Here's how to add a footer to the frontmatter of your page:

<code-group>
<code-block title="Adding a Footer">
```md
---
home: true
footer: Your Site's License | Copyright © 2022-present Your Name
---
```
</code-block>
</code-group>

We're not going to be adding a footer using the frontmatter in the homepage for the site. Instead we're going to be creating a Footer component in a future tutorial that sticks to the bottom of the page.

If you do decide to add a footer using the frontmatter in the homepage, then the HTML will look like this:

<code-group>
<code-block title="HTML After Adding a Footer">
```html{5}
<main aria-labelledby="main-title" class="home">
  <header class="hero">...</header>
  <div class="features">...</div>
  <div class="theme-default-content custom content__default"></div>
  <div class="footer"> Your Site's License | Copyright © 2022-present Your Name </div>
</main>
```
</code-block>
</code-group>

### Final Homepage Layout

Here's the contents of the <code class="inline-code-block">README.md</code> file for the homepage after adding all of the desired frontmatter:

<code-group>
<code-block title="Final Homepage Layout">
```md
---
home: true
heroImage: /images/code-monkeys-logos/code-monkeys-full-logo.png
tagline: Let's get down to Monkey Business
actionText: Learn to Code like a Monkey →
actionLink: /topics/
features:
  - title: Learn
  - title: Code
  - title: Crush
---
```
</code-block>
</code-group>

The contents of your <code class="inline-code-block">README.md</code> file may be different depending on what metadata you decide to use in the frontmatter of your homepage.

### Homepage Layout Notes

Here are some general notes about the homepage layout:

- You can disable any frontmatter by setting any of the options to <code class="inline-code-block">null</code>.
- Any content after the frontmatter block gets parsed as normal Markdown and will be rendered after the features section.
- You can also use a fully custom homepage layout. We'll discuss how to use a [Custom Layout for Specific Pages](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages) in a future tutorial.

### Next Steps

In the next tutorial we'll discuss how to configure the navbar that comes with the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';

export default {
  components: {
    VLazyImage
  }
}
</script>

<style lang="stylus" scoped>
.website-diagrams
  max-width: 16.25rem
  margin: 0 auto
  .v-lazy-image
    filter: blur(0.625rem)
    will-change: filter
    width: 100%
  .v-lazy-image-loaded
    transition: filter 0.7s
    filter: blur(0)
</style>
