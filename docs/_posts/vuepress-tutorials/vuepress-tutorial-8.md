---
title: VuePress Tutorial 8 - Custom Footer
date: 2022-04-06T16:58:30.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to create a custom footer for your VuePress site, then check out VuePress Tutorial 8 - Custom Footer! 🍌🐒
cardDescription: Now it's time to start building the custom footer component for the site. Before creating the footer component, we're...
img: vuepress-tutorials/tutorial-8/vuepress-tutorial-8-custom-footer-post.png
alt: VuePress Tutorial 8 - Custom Footer Post Picture
linkImg: vuepress-tutorials/tutorial-8/vuepress-tutorial-8-custom-footer-post-link.png
linkImgAlt: VuePress Tutorial 8 - Custom Footer Image
canonicalUrl: vuepress-tutorial-8/
permalink: /vuepress-tutorial-8/
redirectFrom: /posts/2022/04/06/vuepress-tutorial-8/
---

::: slot header

# VuePress Tutorial 8 - Custom Footer

:::

## What is a Footer?

Now it's time to start building the custom footer component for the site. Before creating the footer component, we're going to first describe what a footer is then we'll mention some other options for footers provided by [VuePress](https://vuepress.vuejs.org/) and the [@vuepress/theme-blog](https://vuepress-theme-blog.billyyyyy3320.com/config/#footer).

A footer is located at the bottom of a page, and it typically contains:

- Authorship Information
- Copyright Information
- Contact Information
- Sitemap (Important Links Regardless of Current Page - Similar to Global Navbar)

For the [Code Monkeys Blog](/) we'll be building a footer that consists of links to various social media platforms. This gives the user an easy way to interact with various content and the community.

Take a look at the footer on this page to see what we'll be designing for the blog. To see another example you can check out the [VuePress](https://vuepress.vuejs.org/) site footer as well.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

## Homepage Layout Footer

If you remember from the previous post [VuePress Tutorial 6 - Homepage Layout](/vuepress-tutorial-6/#adding-a-footer), [VuePress](https://vuepress.vuejs.org/) provides a way to add a footer to the homepage by adding the following to the homepage layout which is located in <code class="inline-code-block">docs/README.md</code>:

<code-group>
<code-block title="Adding a Homepage Footer">
```md{11}
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
footer: Your Site's License | Copyright © 2022-present Your Name
---
```
</code-block>
</code-group>

If you do decide to add a footer using the frontmatter in the homepage, then the HTML will look like this:

<code-group>
<code-block title="HTML After Adding a Homepage Footer">
```html{13-15}
<html lang="en-US">
  <head>...</head>
  <body>
    <div id="app">
      <div class="theme-container no-sidebar">
        <header class="navbar">...</header>
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main aria-labelledby="main-title" class="home">
          <header class="hero">...</header>
          <div class="features">...</div>
          <div class="theme-default-content custom content__default"></div>
          <div class="footer">
            Your Site's License | Copyright © 2022-present Your Name
          </div>
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

## Rich-text Footer

[VuePress](https://vuepress.vuejs.org/) also provides a [rich-text footer](https://vuepress.vuejs.org/theme/default-theme-config.html#rich-text-footer) which gives you the ability to easily add more functionality to your footer like links. To set this type of footer you need to use [markdown slot syntax](https://vuepress.vuejs.org/guide/markdown-slot.html) which we won't discuss in detail here.

Since the [rich-text footer](https://vuepress.vuejs.org/theme/default-theme-config.html#rich-text-footer) uses [markdown slot syntax](https://vuepress.vuejs.org/guide/markdown-slot.html), you can only add it to markdown files, and it needs to be manaully added to each markdown file to be displayed.

These limitations are why we'll be creating a custom footer component. If you only want to show the footer on one or a few markdown pages, then this option should work fine for you.

## VuePress Blog Theme Footer

The [Code Monkeys Blog](/) uses the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), but if you're interested in using [@vuepress/theme-blog](https://vuepress-theme-blog.billyyyyy3320.com/) be sure to take a look at the [footer option](https://vuepress-theme-blog.billyyyyy3320.com/config/#footer).

Here are some examples of sites that use the [@vuepress/theme-blog](https://vuepress-theme-blog.billyyyyy3320.com/) footer:

- <span class="external-link-wrap">[VuePress Blog Example](https://example.vuepress-theme-blog.billyyyyy3320.com/)</span>
- <span class="external-link-wrap">[Billy Chin's Blog](https://billyyyyy3320.com/)</span>

Since we'll be using social media sites that are not currently supported by the [footer.contact](https://vuepress-theme-blog.billyyyyy3320.com/config/#footer-contact) option, we won't be using this footer. You can contribute social media contact types by making a pull request to the [vuepress-theme-blog](https://github.com/vuepress/vuepress-theme-blog) repository though if you're interested.

## Custom Footer

Before designing the custom footer component, we need to have an understanding of the following topics:

- <span class="external-link-wrap">[Writing a Theme](https://vuepress.vuejs.org/theme/writing-a-theme.html#writing-a-theme)</span>
- <span class="external-link-wrap">[Plugins](https://vuepress.vuejs.org/plugin/#plugin)</span>
- <span class="external-link-wrap">[vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/)</span>
- <span class="external-link-wrap">[Theme Inheritance](https://vuepress.vuejs.org/theme/inheritance.html)</span>
- <span class="external-link-wrap">[globalLayout](https://vuepress.vuejs.org/theme/option-api.html#globallayout)</span>

We won't be describing every detail about each topic above since we only need to understand how to create our custom footer component. If you're interested in learning more now, then check out the links above.

### Writing a Theme

In [VuePress](https://vuepress.vuejs.org/) you have the ability to make your site into a theme. This gives you the option to publish your site as an [npm](https://www.npmjs.com/) package which allows other developers to easily install and use your theme.

To write your own theme you need to create a <code class="inline-code-block">theme</code> directory in the <code class="inline-code-block">.vuepress</code> directory. The <code class="inline-code-block">docs</code> directory for your site should now look something like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   ├── `theme`
│   │   └── config.js
│   └── README.md
:::

After creating the <code class="inline-code-block">theme</code> directory, all you need to do is create a <code class="inline-code-block">Layout.vue</code> file inside of it like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   ├── `theme`
│   │   │   └── Layout.vue
│   │   └── config.js
│   └── README.md
:::

From here you can develop your site like any other [Vue](https://vuejs.org/) application by organizing your theme however you want. Being able to organize your theme however you want provides a lot of flexibility when creating your site, but it's recommended to use the directory structure below when designing your theme:

::: vue
`theme`
├── `components`
│   └── xxx.vue
├── `global-components`
│   └── xxx.vue
├── `layouts`
│   ├── Layout.vue _(**Mandatory**)_
│   └── xxx.vue
├── `styles`
│   ├── index.styl
│   └── palette.styl
├── `templates`
│   ├── dev.html
│   └── ssr.html
├── enhanceApp.js
└── index.js
:::

Here's a description for each directory and file in the <code class="inline-code-block">theme</code> directory:

- <code class="inline-code-block">components</code>: Local components used in your theme.
- <code class="inline-code-block">global-components</code>: Components in this directory automatically get registered as global, so you don't need to explicitly import them in a file when using them.
- <code class="inline-code-block">layouts</code>: Layout components used in your theme.
  - <code class="inline-code-block">Layout.vue</code>: A mandatory layout file for every theme.
- <code class="inline-code-block">styles</code>: Stores files related to styling your theme.
  - <code class="inline-code-block">index.styl</code>: Overrides any default styling and allows you to globally style your site.
  - <code class="inline-code-block">palette.styl</code>: Overrides any default styling variables and allows you to add any global styling variables.
- <code class="inline-code-block">templates</code>: Stores HTML template files.
  - <code class="inline-code-block">dev.html</code>: HTML template file for development environment.
  - <code class="inline-code-block">ssr.html</code>: HTML template file used in the build time.
- <code class="inline-code-block">enhanceApp.js</code>: Enhances the theme of your site by giving you the ability to install Vue plugins, add router hooks, etc.
- <code class="inline-code-block">index.js</code>: Entry file for for theme configuration.

::: tip Reviewing the Recommended Directory Structure for Themes
You may have recognized this directory structure from the [VuePress Tutorial 4 - Directory Structure](/vuepress-tutorial-4/) post.
:::

When creating the custom footer component we'll use the <code class="inline-code-block">global-components</code> directory, the <code class="inline-code-block">index.js</code> file, and the <code class="inline-code-block">layouts</code> directory. The <code class="inline-code-block">global-components</code> directory will be where we add the custom footer component since we want the footer to be available globally. The <code class="inline-code-block">index.js</code> file will be used to inherit the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) using [theme inheritance](https://vuepress.vuejs.org/theme/inheritance.html). Finally, the <code class="inline-code-block">layouts</code> directory will be where we add the <code class="inline-code-block">GlobalLayout.vue</code> file which allows us to add our custom footer component to the global layout of the site.

Since we'll be using the [vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/) to add social media icons to our footer, let's go over what [plugins](https://vuepress.vuejs.org/plugin/#plugin) are, how to install them, and how to configure them.

### Basics of Plugins

[Plugins](https://v1.vuepress.vuejs.org/plugin/) allow you to add global-level functionality to [VuePress](https://v1.vuepress.vuejs.org/). You can configure them by passing in options. It's also possible to write your own and publish them as [npm](https://www.npmjs.com/) packages.

To use a plugin you need to first install it by using either <code class="inline-code-block">yarn</code> or <code class="inline-code-block">npm</code>. We'll be using <code class="inline-code-block">yarn</code> to install all of the plugins for the blog, but the commands for installing the plugins with <code class="inline-code-block">npm</code> will also be provided. After installing a plugin, you can configure it by adding it to the <code class="inline-code-block">config.js</code> file.

Now that we know the basics, we're ready to install and configure [vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/).

### VuePress Plugin - SVG Icons

To install the plugin run the following command:

<code-group>
<code-block title="yarn">
```sh
yarn add @goy/vuepress-plugin-svg-icons -D
```
</code-block>

<code-block title="npm">
```sh
npm install @goy/vuepress-plugin-svg-icons -D
```
</code-block>
</code-group>

After installing the plugin, the <code class="inline-code-block">package.json</code> file should look something like this:

<code-group>
<code-block title="package.json">
```json{4}
{
  ...
  "devDependencies": {
    "@goy/vuepress-plugin-svg-icons": "^4.2.3",
    "vuepress": "1.8.2"
  }
}
```
</code-block>
</code-group>

Next we need to configure the plugin by editing the <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{9}
module.exports = {
  ...
  head: [
    ...
  ],
  themeConfig: {
    ...
  },
  plugins: ['@goy/svg-icons'],
}
```
</code-block>
</code-group>

To add the social media icons to the site we need to create an <code class="inline-code-block">icons</code> directory in the <code class="inline-code-block">docs</code> directory. Here's what the <code class="inline-code-block">docs</code> directory should look like after adding the <code class="inline-code-block">icons</code> directory:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   ├── `icons`
│   └── README.md
:::

The plugin recommends using [iconfont](https://www.iconfont.cn/collections/index) to find [Scalable Vector Graphics (SVGs)](https://developer.mozilla.org/en-US/docs/Web/SVG) for your site. After creating an account, you can search for icons and download them. When downloading the icons you have the option to specify a color and size for the icon. For the blog we'll be using a color of <code class="inline-code-block">#e6e6e6</code> and a size of <code class="inline-code-block">200</code> which is the default size.

You can download the icons from the <code class="inline-code-block">tutorial-8</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-8) repository.

::: tip Using SVG Export
To easily download the icons used in the footer you can also install the browser extension [SVG Export](https://svgexport.io/). After installing the extension, all you need to do is click the extension icon which will extract all of the SVGs including their inline styles from the current page. A new tab will open containing all of the extracted SVGs which you can then download.
:::

We'll be using icons for these social media sites in the footer:

- <span class="external-link-wrap">[GitHub](https://github.com/)</span>
- <span class="external-link-wrap">[YouTube](https://www.youtube.com/)</span>
- <span class="external-link-wrap">[Discord](https://discord.com/)</span>
- <span class="external-link-wrap">[Telegram](https://telegram.org/)</span>
- <span class="external-link-wrap">[Twitter](https://twitter.com/)</span>
- <span class="external-link-wrap">[LinkedIn](https://www.linkedin.com/)</span>
- <span class="external-link-wrap">[Patreon](https://www.patreon.com/)</span>

After downloading the icons the <code class="inline-code-block">icons</code> directory should look something like this:

::: vue
├── `icons`
│   ├── Discord.svg
│   ├── GitHub.svg
│   ├── LinkedIn.svg
│   ├── Patreon.svg
│   ├── Telegram.svg
│   ├── Twitter.svg
│   └── YouTube.svg
:::

After adding the icons to <code class="inline-code-block">icons</code> directory, the plugin will automically load the icons and will provide a global component named <code class="inline-code-block">vp-icon</code>. To use the <code class="inline-code-block">vp-icon</code> component you need to pass a <code class="inline-code-block">name</code> attribute to it where the value is the name of the SVG file you want to use.

If you're interested in learning more about the plugin, then check out the [vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/) documentation which contains more information about configuration options, component props, and command-line interface (CLI) commands.

We're now ready to create the custom footer component.

### Footer Component

The custom footer component will be added to the <code class="inline-code-block">global-components</code> directory. Here's what the <code class="inline-code-block">theme</code> directory will look like after adding the <code class="inline-code-block">Footer.vue</code> file:

::: vue
├── `theme`
│   ├── `global-components`
│   │   └── Footer.vue
:::

Here we're creating a <code class="inline-code-block">\*.vue</code> file which is known as a [Single-File Component (SFC)](https://v2.vuejs.org/v2/guide/single-file-components.html?redirect=true). This is a special file format that allows you to encapsulate the HTML in a <code class="inline-code-block">template</code> tag, the JavaScript in a <code class="inline-code-block">script</code> tag, and the CSS in a <code class="inline-code-block">style</code> tag for the component.

Here's what the <code class="inline-code-block">Footer.vue</code> file looks like after adding these three main sections:

<code-group>
<code-block title="Main Sections">
```vue
<template></template>

<script></script>

<style></style>
````
</code-block>
</code-group>

To start we'll add the HTML to the <code class="inline-code-block">template</code> tag. The contents of the footer will be wrapped in a <code class="inline-code-block">footer</code> tag containing two child tags a <code class="inline-code-block">div</code> tag and a <code class="inline-code-block">p</code> tag. The <code class="inline-code-block">div</code> tag will contain seven child <code class="inline-code-block">a</code> tags one for each of the social media icons. The <code class="inline-code-block">p</code> tag will contain authorship information for the blog.

Each <code class="inline-code-block">a</code> tag will have the following attributes: <code class="inline-code-block">href</code>, <code class="inline-code-block">target</code>, and <code class="inline-code-block">rel</code>. The <code class="inline-code-block">href</code> specifies the URL of the page the link goes to, the <code class="inline-code-block">target</code> specifies where to open the link, and the <code class="inline-code-block">rel</code> specifies the relationship between the current page and the link. Each <code class="inline-code-block">a</code> tag will also have a child <code class="inline-code-block">vp-icon</code> tag which will have the <code class="inline-code-block">name</code> attribute discussed earlier.

Here's what the <code class="inline-code-block">Footer.vue</code> file looks like after adding the HTML to the <code class="inline-code-block">template</code> tag:

<code-group>
<code-block title="Adding the HTML to the Template Tag">
```vue{2-55}
<template>
  <footer>
    <div>
      <a
        href="https://github.com/codemonkeysio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="GitHub"></vp-icon>
      </a>
      <a
        href="https://www.youtube.com/channel/UCteut5f1PHW8vP29o66z-kg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="YouTube"></vp-icon>
      </a>
      <a
        href="https://discord.gg/mh9rQmwJ8H"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Discord"></vp-icon>
      </a>
      <a
        href="https://t.me/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Telegram"></vp-icon>
      </a>
      <a
        href="https://twitter.com/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Twitter"></vp-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/jason-chiarulli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="LinkedIn"></vp-icon>
      </a>
      <a
        href="https://www.patreon.com/codemonkeys?fan_landing=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Patreon"></vp-icon>
      </a>
    </div>
    <p>Made by & for Code Monkeys 🐵</p>
  </footer>
</template>

<script></script>

<style></style>
````

</code-block>
</code-group>

Each <code class="inline-code-block">href</code> has a value of the related URL for the social media site. Each <code class="inline-code-block">target</code> has a value of <code class="inline-code-block">\_blank</code>, and each <code class="inline-code-block">rel</code> has a value of <code class="inline-code-block">noopener noreferrer</code>.

As mentioned in the previous post these values for the <code class="inline-code-block">target</code> and <code class="inline-code-block">rel</code> attributes are used to prevent a vulnerability known as [reverse tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing) which can happen when a user clicks on an external link. All major browsers have fixed this vulnerability, but you can still include these attributes in case a user is using a browser without this security update.

Each <code class="inline-code-block">name</code> attribute has a value of the name of the related SVG file with the <code class="inline-code-block">.svg</code> extension omitted.

Next we'll export the JavaScript in the <code class="inline-code-block">script</code> tag and give the component a name. Here's what the <code class="inline-code-block">Footer.vue</code> file looks like after updating the <code class="inline-code-block">script</code> tag:

<code-group>
<code-block title="Exporting and Naming the Component">
```vue{6-8}
<template>
  ...
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
</style>
````
</code-block>
</code-group>

Finally, we'll style the component by adding the following CSS classes: <code class="inline-code-block">"footer"</code>, <code class="inline-code-block">"icons"</code>, and <code class="inline-code-block">"made-by"</code>. We'll be adding the <code class="inline-code-block">"footer"</code> class to the <code class="inline-code-block">footer</code> tag, the <code class="inline-code-block">"icons"</code> class to the <code class="inline-code-block">div</code> tag, and the <code class="inline-code-block">"made-by"</code> class to the <code class="inline-code-block">p</code> tag. Then we'll add styling for each of the CSS classes in the <code class="inline-code-block">style</code> tag. Here's what the <code class="inline-code-block">Footer.vue</code> file looks like after styling:

<code-group>
<code-block title="Styling the Component">
```vue{2-3,6,14-27}
<template>
  <footer class="footer">
    <div class="icons">
      ...
    </div>
    <p class="made-by">Made by & for Code Monkeys 🐵</p>
  </footer>
</template>

<script>
  ...
</script>

<style lang="stylus" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 2.5rem 2.5rem 2rem
  .icons
    display: flex
    margin-bottom: 1.75rem
    font-size: 2rem
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
</style>
````

</code-block>
</code-group>

The <code class="inline-code-block">lang</code> attribute used in the <code class="inline-code-block">style</code> tag is used to specify which pre-processor we want to use in the component. Here we're using [Stylus](https://stylus-lang.com/) which is the default pre-processor used by [VuePress](https://vuepress.vuejs.org/). If you want to learn how to use a different pre-processor, then check out [Using Pre-processors](https://vuepress.vuejs.org/guide/using-vue.html#using-pre-processors).

A <code class="inline-code-block">scoped</code> attribute is also used in the <code class="inline-code-block">style</code> tag which means all of the styling only applies to the current component. Take a look at [Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css) to learn more about the <code class="inline-code-block">scoped</code> attribute.

The <code class="inline-code-block">"footer"</code> class is given <code class="inline-code-block">display: flex</code> which defines a flex container for all of the direct children of the tag where the <code class="inline-code-block">"footer"</code> class is used. In this case the <code class="inline-code-block">"footer"</code> class is used on the <code class="inline-code-block">footer</code> tag which means the <code class="inline-code-block">div</code></code> tag and <code class="inline-code-block">p</code> tag will be in a flex container. The <code class="inline-code-block">"footer"</code> class is also given <code class="inline-code-block">flex-direction: column</code> which means the flex items in the flex container, i.e., the <code class="inline-code-block">div</code> tag and the <code class="inline-code-block">p</code> tag will be stacked on top of each other in a column as opposed to the default row setting. The flex items are then given <code class="inline-code-block">align-items: center</code></code> which will horizontally center the flex items since the flex direction is set to column. The <code class="inline-code-block">"footer"</code> class is then given <code class="inline-code-block">padding: 2.5rem 2.5rem 2rem</code> which will set a padding of <code class="inline-code-block">2.5rem</code> for the top, <code class="inline-code-block">2.5rem</code> for the left and right, and <code class="inline-code-block">2rem</code> for the bottom.

If you're unfamiliar with flexbox, then check out [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). Also, if you're unfamiliar with CSS units like <code class="inline-code-block">rem</code>, then check out [CSS Units](https://www.w3schools.com/cssref/css_units.asp).

The <code class="inline-code-block">"icons"</code> class is also given <code class="inline-code-block">display: flex</code> which means each <code class="inline-code-block">a</code> tag will be in a flex container since they're all direct children of the <code class="inline-code-block">div</code> tag which has the <code class="inline-code-block">"icons"</code> class. The <code class="inline-code-block">"icons"</code> class is also given <code class="inline-code-block">margin-bottom: 1.75rem</code> and <code class="inline-code-block">font-size: 2rem</code> which increases the size of the icons. The CSS selector <code class="inline-code-block">.icons > a:not(:last-child)</code> is then used which selects all <code class="inline-code-block">a</code> tags where the parent tag has a class of <code class="inline-code-block">"icons"</code> except for the last <code class="inline-code-block">a</code> tag. Each <code class="inline-code-block">a</code> tag that is selected is given <code class="inline-code-block">margin-right: 4.6875rem</code>.

If you're unfamiliar with CSS selectors, then check out the [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp).

Finally, the <code class="inline-code-block">"made-by"</code> class is given <code class="inline-code-block">margin: 0</code> which removes the margin from the <code class="inline-code-block">p</code> tag.

If you didn't feel comfortable with the CSS discussed above, then here's a good resource to go through [CSS Tutorial](https://www.w3schools.com/css/default.asp).

As we continue to develop the blog, we'll add more styling to the footer to make it look presentable in different scenarios like on smaller screen sizes, when a sidebar is present, etc.

Here's what the <code class="inline-code-block">Footer.vue</code> file should look like:

<code-group>
<code-block title="Footer.vue">
```vue
<template>
  <footer class="footer">
    <div class="icons">
      <a
        href="https://github.com/codemonkeysio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="GitHub"></vp-icon>
      </a>
      <a
        href="https://www.youtube.com/channel/UCteut5f1PHW8vP29o66z-kg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="YouTube"></vp-icon>
      </a>
      <a
        href="https://discord.gg/mh9rQmwJ8H"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Discord"></vp-icon>
      </a>
      <a
        href="https://t.me/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Telegram"></vp-icon>
      </a>
      <a
        href="https://twitter.com/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Twitter"></vp-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/jason-chiarulli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="LinkedIn"></vp-icon>
      </a>
      <a
        href="https://www.patreon.com/codemonkeys?fan_landing=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Patreon"></vp-icon>
      </a>
    </div>
    <p class="made-by">Made by & for Code Monkeys 🐵</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="stylus" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 2.5rem 2.5rem 2rem
  .icons
    display: flex
    margin-bottom: 1.75rem
    font-size: 2rem
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
</style>
````
</code-block>
</code-group>

After adding the <code class="inline-code-block">global-components</code> directory to the <code class="inline-code-block">theme</code> directory, you may have noticed the site is rendering a blank page. This is because we created a directory in the <code class="inline-code-block">theme</code> directory, so [VuePress](https://vuepress.vuejs.org/) is now looking for a <code class="inline-code-block">Layout.vue</code> file in the <code class="inline-code-block">theme</code> directory.

We have the option of creating a <code class="inline-code-block">layouts</code> directory and placing our own <code class="inline-code-block">Layout.vue</code> file inside of it, but as previously mentioned we're going to use [theme inheritance](https://vuepress.vuejs.org/theme/inheritance.html) to inherit the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

### Theme Inheritance

[Theme inheritance](https://vuepress.vuejs.org/theme/inheritance.html) allows you to pass all of the capabilities from a parent theme to a child theme. In our case the parent theme is the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), and we'll be creating the child theme as we develop the blog.

To create the child theme from the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), we need to configure the [extend](https://vuepress.vuejs.org/theme/option-api.html#extend) option in the <code class="inline-code-block">index.js</code> file.

First, we need to create the <code class="inline-code-block">index.js</code> file in the <code class="inline-code-block">theme</code> directory which should now look like this:

::: vue
├── `theme`
│   ├── `global-components`
│   └── index.js
:::

We can now configure the [extend](https://vuepress.vuejs.org/theme/option-api.html#extend) option:

<code-group>
<code-block title="Configuring the Extend Option">
```js
module.exports = {
  extend: '@vuepress/theme-default',
};
````

</code-block>
</code-group>

The inherited [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) should now be rendering alongside the child theme instead of the blank page.

::: tip Missing Layout.vue File
You may have noticed that the <code class="inline-code-block">Layout.vue</code> file is listed as a mandatory file, but we didn't need to create one in the <code class="inline-code-block">theme</code> directory. This is because you don't need to explicitly create the <code class="inline-code-block">Layout.vue</code> file when you're inheriting it from the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).
:::

The child theme is also able to override files in the parent theme by creating a file with the same name in the same location. We'll go over how to override parent theme files in more detail in future tutorials. You can also override some parent theme files by just using the same name as the parent theme file in the child theme. For example, we're going to override the <code class="inline-code-block">GlobalLayout.vue</code> file by using the same name for the file in the child theme and the code provided by the documentation.

Now let's create the <code class="inline-code-block">layouts</code> directory in the <code class="inline-code-block">theme</code> directory. This is where we'll be adding the <code class="inline-code-block">GlobalLayout.vue</code> file which again allows us to add our custom footer component to the global layout of the site.

### Using the Global Layout

Here's what the <code class="inline-code-block">theme</code> directory will look like after creating the <code class="inline-code-block">GlobalLayout.vue</code> file in the <code class="inline-code-block">layouts</code> directory:

:::vue
├── `theme`
│   ├── `global-components`
│   ├── `layouts`
│   │   └── GlobalLayout.vue
│   └── index.js
:::

The <code class="inline-code-block">GlobalLayout.vue</code> file is responsible for handling the global layout of the site. Here's the path to the default <code class="inline-code-block">GlobalLayout.vue</code> file provided by [VuePress](https://vuepress.vuejs.org/) <code class="inline-code-block">node_modules/@vuepress/core/lib/client/components</code>. You can also view the code for the default global layout [here](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/components/GlobalLayout.vue).

The default global layout gives you the ability to render different layouts depending on if <code class="inline-code-block">\$page.path</code> is defined, i.e., the URL of the page is valid and if <code class="inline-code-block">\$page.frontmatter.layout</code> is defined. If only the <code class="inline-code-block">\$page.path</code> is defined, then the default layout will be used which is <code class="inline-code-block">Layout</code>. If <code class="inline-code-block">\$page.frontmatter.layout</code> is defined, then the specific layout for that page will be used. If <code class="inline-code-block">\$page.path</code> is not defined, then the <code class="inline-code-block">NotFound</code> layout is used which is the layout for the 404 page provided by [VuePress](https://vuepress.vuejs.org/). In most scenarios you don't need to edit the default global layout, but if you want to add a global header or a global footer to your site, then this is a good place to add it.

To override and edit the <code class="inline-code-block">GlobalLayout.vue</code> file we're going to use the code provided by the [globalLayout](https://vuepress.vuejs.org/theme/option-api.html#globallayout) section from the documentation. The code provided by the documentation basically uses a [computed property](https://v2.vuejs.org/v2/guide/computed.html?redirect=true) to determine the layout for a page based on if the URL of the page is defined and if the page uses a specific layout provided by the frontmatter. This is similar to the logic previously described when discussing the default global layout.

Here's the code from the documentation:

<code-group>
<code-block title="GlobalLayout.vue from Docs">
```vue
<template>
  <div id="global-layout">
    <header><h1>Header</h1></header>
    <component :is="layout"/>
    <footer><h1>Footer</h1></footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>
````
</code-block>
</code-group>

We're going to remove the example <code class="inline-code-block">header</code> tag and replace the example <code class="inline-code-block">footer</code> tag with our previously created footer component.

Here's what the <code class="inline-code-block">GlobalLayout.vue</code> file should look like after the changes:

<code-group>
<code-block title="GlobalLayout.vue">
```vue{4}
<template>
  <div id="global-layout">
    <component :is="layout"/>
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
  },
}
</script>
````

</code-block>
</code-group>

::: tip Importing the Footer Component
Notice that we don't need to explicitly import the footer component since we made it a global component by adding it to the <code class="inline-code-block">global-components</code> directory in the <code class="inline-code-block">theme</code> directory.
:::

### Next Steps

In the next tutorial we'll discuss how to override the <code class="inline-code-block">index.styl</code> and <code class="inline-code-block">palette.styl</code> files to add our own global styling to the site. The global styling will include background color, accent color, text color, etc.
