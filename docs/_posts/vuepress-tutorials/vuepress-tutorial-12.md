---
title: VuePress Tutorial 12 - Highlight SVGs on Hover
date: 2022-09-08T18:18:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to add a highlight effect when hovering over SVGs, then check out VuePress Tutorial 12 - Highlight SVGs on Hover! 🍌🐒
preview: We're now ready to add a highlight effect when hovering over the SVG icons. The method we'll be using doesn't require a lot of...
img: vuepress-tutorials/tutorial-12/vuepress-tutorial-12-highlight-svgs-on-hover-post.png
placeholder: vuepress-tutorials/tutorial-12/vuepress-tutorial-12-highlight-svgs-on-hover-post-90w.png
alt: VuePress Tutorial 12 - Highlight SVGs on Hover Post Picture
linkImg: vuepress-tutorials/tutorial-12/vuepress-tutorial-12-highlight-svgs-on-hover-post-link.png
linkImgAlt: VuePress Tutorial 12 - Highlight SVGs on Hover Image
videoURL: 'https://www.youtube-nocookie.com/embed/T4ytJl4nA7A'
canonicalUrl: vuepress-tutorial-12/
---

::: slot header

# VuePress Tutorial 12 - Highlight SVGs on Hover

:::

## What We're Doing

We're now ready to add a highlight effect when hovering over the [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) icons. The method we'll be using doesn't require a lot of styling, but it does require us to edit the <code class="inline-code-block">fill</code> attribute of the [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) icons.

We'll demonstrate how to edit the <code class="inline-code-block">fill</code> attribute by manually editing the files as well as using a Command-line Interface (CLI) command provided by [vuepress-plugin-svg-icons](https://github.com/ntnyq/vuepress-plugin-svg-icons/tree/vuepress-v1) which will automate the process and optimize the files.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

When adding the styling updates be sure to add each block of code below one at a time to your project then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-12</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-12) repository.

Now let's begin by manually editing one of the icon files.

## Manual Editing

When we downloaded the icons from [iconfont](https://www.iconfont.cn/collections/index) we downloaded them with a <code class="inline-code-block">fill</code> attribute which will override the color we set for the hover effect.

To fix this issue we can manually remove the <code class="inline-code-block">fill</code> attribute from each icon file.

### Icon Example

We'll use the <code class="inline-code-block">GitHub.svg</code> file as an example:

<code-group>
<code-block title="GitHub.svg with fill Attribute">
```svg{33}
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
>
<svg
  t="1625711611350"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="2770"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200"
>
  <defs>
    <style type="text/css"></style>
  </defs>
  <path
    d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9
       19.9-10.8 19.9-22.2v-77.6c-135.8
       15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5
       31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5
       17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5
       16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2
       118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0
       80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7
       24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59
       188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8
       9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4
       512.1c0-247.5-200.6-447.9-447.9-447.9C265
       64.1 64.6 264.5 64.6 512z"
    fill="#e6e6e6"
    p-id="2771"
  ></path>
</svg>
```
</code-block>
</code-group>

After removing <code class="inline-code-block">fill="e6e6e6"</code>, the file will look like this:

<code-group>
<code-block title="GitHub.svg without fill Attribute">
```svg
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
>
<svg
  t="1625711611350"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="2770"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200"
>
  <defs>
    <style type="text/css"></style>
  </defs>
  <path
    d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9
       19.9-10.8 19.9-22.2v-77.6c-135.8
       15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5
       31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5
       17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5
       16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2
       118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0
       80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7
       24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59
       188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8
       9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4
       512.1c0-247.5-200.6-447.9-447.9-447.9C265
       64.1 64.6 264.5 64.6 512z"
    p-id="2771"
  ></path>
</svg>
```
</code-block>
</code-group>

:::tip SVG File Formatting
The files above have been formatted to make them easier to read for this post, but the contents in your file may all be on one line. If this is the case, just scroll until you find the <code class="inline-code-block">fill</code> attribute or search for <code class="inline-code-block">fill</code> in the file to be able to easily find and remove it.
:::

### Icon Styles

Now that we have removed the <code class="inline-code-block">fill</code> attribute from the file, we can add the styling to highlight the icon when hovering over it.

Here's what the <code class="inline-code-block">Footer.vue</code> file looks like after adding the hover effect:

<code-group>
<code-block title="Footer.vue">
```vue{74-75}
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
        href="https://www.youtube.com/@codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="YouTube"></vp-icon>
      </a>
      <a
        href="https://gab.com/codemonkeys"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Gab"></vp-icon>
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
        href="https://codemonkeys.tech/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="RSS"></vp-icon>
      </a>
      <a
        href="https://keybase.io/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Keybase"></vp-icon>
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
    svg:hover
      fill: $accentColor
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
</style>
```
</code-block>
</code-group>

- <code class="inline-code-block">svg:hover</code> applies the <code class="inline-code-block">hover</code> pseudo-class to the <code class="inline-code-block">svg</code> selector which will apply the styles defined inside of it when the user hovers their pointer over the <code class="inline-code-block">svg</code> tag.
- <code class="inline-code-block">fill: $accentColor</code> changes the fill of the <code class="inline-code-block">svg</code> tag to be the accent color.

Notice the icon fill is now set to be the accent color even if you're not hovering over the icon.

This is because we haven't set a <code class="inline-code-block">fill</code> attribute value for when the user isn't hovering over the icon, so it falls back to the value set in <code class="inline-code-block">svg:hover</code>.

To fix this issue we'll add the following styling to the <code class="inline-code-block">Footer.vue</code> file:

<code-group>
<code-block title="Footer.vue">
```vue{74-75}
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
        href="https://www.youtube.com/@codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="YouTube"></vp-icon>
      </a>
      <a
        href="https://gab.com/codemonkeys"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Gab"></vp-icon>
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
        href="https://codemonkeys.tech/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="RSS"></vp-icon>
      </a>
      <a
        href="https://keybase.io/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Keybase"></vp-icon>
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
    svg
      fill: $textColor
    svg:hover
      fill: $accentColor
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
</style>
```
</code-block>
</code-group>

- <code class="inline-code-block">svg</code> is the selector used to target the icon.
- <code class="inline-code-block">fill: $textColor</code> sets the fill of the <code class="inline-code-block">svg</code> to be the text color when the user isn't hovering over the icon.

The fill should now be the same as the text color when you're not hovering over the icon, and it should get set to be the accent color when you hover over the icon.

To set the hover effect for the other icons, you will need to remove the <code class="inline-code-block">fill</code> attribute from the other icon files.

If you have questions about the CSS discussed above, then check out these resources:

- <span class="external-link-wrap">[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)</span>
- <span class="external-link-wrap">[:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)</span>
- <span class="external-link-wrap">[SVG Attribute reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)</span>
- <span class="external-link-wrap">[fill](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)</span>

You can also check out this [CSS-Tricks post](https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/) if you're interested in learning about other ways to change the fill on hover.

Instead of manually editing each file, we can use the CLI command provided by [vuepress-plugin-svg-icons](https://github.com/ntnyq/vuepress-plugin-svg-icons/tree/vuepress-v1) to automate the process.

## Automated Editing

The CLI command provided by [vuepress-plugin-svg-icons](https://github.com/ntnyq/vuepress-plugin-svg-icons/tree/vuepress-v1) optimizes [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) files by removing a lot of redundant and useless information including the <code class="inline-code-block">fill</code> attribute. The plugin does this by integrating [SVGO](https://github.com/svg/svgo) which stands for Scalable Vector Graphic Optimizer and is a [Node.js](https://nodejs.org/en/) based tool for optimizing [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) files.

### CLI Command

Here's the CLI command you need to run <code class="inline-code-block">vuepress svgo [docsDir]</code> where <code class="inline-code-block">[docsDir]</code> is the docs directory for your project which in our case is <code class="inline-code-block">docs</code>.

You can add the CLI command to the <code class="inline-code-block">scripts</code> object in the <code class="inline-code-block">package.json</code> file:

<code-group>
<code-block title="package.json">
```json{19}
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
    "name": "J the Code Monkey",
    "email": "support@codemonkeys.tech",
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
    "vuepress": "1.8.2"
  }
}
```
</code-block>
</code-group>

Then you can run the script using:

<code-group>
<code-block title="Yarn">
```sh
yarn svgo
```
</code-block>

<code-block title="npm">
```sh
npm run svgo
```
</code-block>
</code-group>

After running the script, the [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) files will be optimized which includes removing the <code class="inline-code-block">fill</code> attribute from the files.

The hover effect should now be applied to each icon assuming you added the styling from the section above.

If you have any questions or want to learn more about the plugin, then check out the [guide](https://github.com/ntnyq/vuepress-plugin-svg-icons/tree/vuepress-v1/docs/guide).

You can also check out [SVGO](https://github.com/svg/svgo) if you want to learn more about the optimization tool including CLI usage, configuration, API usage, etc.

### Optimized Icon Example

Here's the contents of the optimized <code class="inline-code-block">GitHub.svg</code> file:

<code-group>
<code-block title="Optimized GitHub.svg">
```svg{32}
<svg
  viewBox="0 0 1024 1024"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <style/>
  </defs>
  <path
    d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9
    19.9-10.8 19.9-22.2v-77.6c-135.8
    15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5
    31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5
    17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5
    16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2
    118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0
    80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7
    24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59
    188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c.8
    9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4
    512.1c0-247.5-200.6-447.9-447.9-447.9C265
    64.1 64.6 264.5 64.6 512z"
  />
</svg>
```
</code-block>
</code-group>

:::tip SVG File Formatting
Just like the previous examples the file is formatted to make it easier to read for this post, but the contents in your file may all be on one line.
:::

If you compare the optimized file with the original file above, you'll notice a lot of unnecessary information was removed including the <code class="inline-code-block">fill</code> attribute without affecting the rendering of the icons.

## Next Steps

In the next tutorial we'll be styling the navbar by updating the background color, height, border, etc.
