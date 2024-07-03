---
title: VuePress Tutorial 20 - Pagination Links Styling
date: 2022-11-23T19:23:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Ready to learn how to style the pagination links, then check out VuePress Tutorial 20 - Pagination Links Styling! 🍌🐒
preview: We're going to begin the process of styling the Prev and Next pagination links that we added to each of the...
img: vuepress-tutorials/tutorial-20/vuepress-tutorial-20-pagination-links-styling-post.png
placeholder: vuepress-tutorials/tutorial-20/vuepress-tutorial-20-pagination-links-styling-post-90w.png
alt: VuePress Tutorial 20 - Pagination Links Styling Post Picture
linkImg: vuepress-tutorials/tutorial-20/vuepress-tutorial-20-pagination-links-styling-post-link.png
linkImgAlt: VuePress Tutorial 20 - Pagination Links Styling Image
videoURL: https://www.youtube-nocookie.com/embed/Iui9-GBirrU
canonicalUrl: vuepress-tutorial-20/
---

::: slot header

# VuePress Tutorial 20 - Pagination Links Styling

:::

## What We're Doing

We're going to begin the process of styling the Prev and Next <span class="post-term-one">pagination</span> links that we added to each of the <span class="post-term-one">pagination</span> pages in the previous tutorial. To implement the styling we'll be adding the following CSS classes <code class="inline-code-block">pagination</code>, <code class="inline-code-block">left-arrow</code>, and <code class="inline-code-block">right-arrow</code> to the <code class="inline-code-block">IndexPost</code> layout component.

The <code class="inline-code-block">pagination</code> class will be used to properly space out the Prev and Next <span class="post-term-one">pagination</span> links. The <code class="inline-code-block">left-arrow</code> and <code class="inline-code-block">right-arrow</code> classes will be used to add some styling to the left arrow and right arrow icons which we'll be adding using the global <code class="inline-code-block">vp-icon</code> component which is provided by [vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/).

When adding the styling updates be sure to add each block of code below one at a time to your project then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-20</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-20) repository.

## Pagination Class

We're going to start by adding the <code class="inline-code-block">pagination</code> class to the <code class="inline-code-block">div</code> tag that is wrapping both of the <code class="inline-code-block">router-link</code> components in the <code class="inline-code-block">IndexPost.vue</code> file.

Then we'll apply the following styles:

<code-group>
<code-block title="Adding the pagination Class">
```vue{22,43-48}
<template>
  <div class="theme-default-content">
    <h1>The Scribblings of a Monkey!!!</h1>
    <div v-for="post in $pagination.pages" :key="post.key">
      <div>
        <div>
          <h2>
            {{ post.title }}
          </h2>
        </div>
        <p>
          {{ post.frontmatter.preview }}
        </p>
      </div>
      <div>
        <img
          :src="`/images/${post.frontmatter.img}`"
          :alt="post.frontmatter.alt || 'Post Picture'"
        />
      </div>
    </div>
    <div class="pagination">
      <div>
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
          Prev
        </router-link>
      </div>
      <div>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
          Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style lang="stylus" scoped>
.pagination
  display: flex
  justify-content: space-between
  padding-top: 2rem
</style>
```
</code-block>
</code-group>

- <code class="inline-code-block">lang="stylus"</code> is used to specify which pre-processor we want to use in the component which in our case is <span class="external-link-wrap">[Stylus](https://stylus-lang.com/)</span> which is the default pre-processor used by <span class="external-link-wrap">[VuePress](https://vuepress.vuejs.org/)</span>.
- <code class="inline-code-block">scoped</code> is used to only apply the styles to the current component, i.e., the <code class="inline-code-block">IndexPost</code> layout component. We're scoping these styles since they currently only apply to the <code class="inline-code-block">IndexPost</code> layout component.
- <code class="inline-code-block">display: flex</code> defines a flex container for all of the direct children of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">pagination</code>.
- <code class="inline-code-block">justify-content: space-between</code> evenly spaces out the flex items along the main-axis of the flex container where the first item is flush with the start of the flex container, and the last item is flush with the end of the flex container. Here, the main-axis of the flex container is the horizontal axis. The flex items are the direct children of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">pagination</code>, i.e., the <code class="inline-code-block">div</code> tags that are wrapping the <code class="inline-code-block">router-link</code> components.
- <code class="inline-code-block">padding-top: 2rem</code> adds a padding of <code class="inline-code-block">2rem</code> to the top of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">pagination</code>.

The <span class="post-term-one">pagination</span> links should now be properly spaced out, and you can view the styling updates by navigating to the <span class="post-term-one">pagination</span> pages:

- <span class="external-link-wrap">[http://localhost:8080/posts/](http://localhost:8080/posts/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/3/](http://localhost:8080/posts/page/3/)</span>

If you have any questions about the <code class="inline-code-block">lang</code> attribute, the <code class="inline-code-block">scoped</code> attribute, flexbox, or CSS in general, then check out these resources:

- <span class="external-link-wrap">[Using Pre-Processors](https://vue-loader-v14.vuejs.org/en/configurations/pre-processors.html)</span>
- <span class="external-link-wrap">[Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css)</span>
- <span class="external-link-wrap">[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)</span>
- <span class="external-link-wrap">[Basics of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)</span>
- <span class="external-link-wrap">[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)</span>
- <span class="external-link-wrap">[CSS Tutorial](https://www.w3schools.com/css/default.asp)</span>

## Left and Right Arrow Icons

We're now ready to add the left and right arrow icons to the <span class="post-term-one">pagination</span> links.

### Downloading the Icons

To add the left and right arrow icons to the site we need to first download the icons. To find icons for your site [vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/) recommends using [iconfont](https://www.iconfont.cn/collections/index). After searching for the icons and downloading them, you'll be asked to specify a color and size for the icons. For the blog we'll be using a color of <code class="inline-code-block">#e6e6e6</code> and a size of <code class="inline-code-block">200</code> which is the default size.

Instead of searching [iconfont](https://www.iconfont.cn/collections/index) for the left and right arrow icons, you can download them from the <code class="inline-code-block">tutorial-20</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-20) repository.

::: tip Using SVG Export
To easily download the left and right arrow icons you can also install the browser extension [SVG Export](https://svgexport.io/). After installing the extension, all you need to do is click the extension icon which will extract all of the SVGs including their inline styles from the current page. A new tab will open containing all of the extracted SVGs which you can then download.
:::

### Updating the Icons Directory

After downloading the left and right arrow icons, we'll need to add them to the <code class="inline-code-block">icons</code> directory which should now look something like this:

::: vue
├── `icons`
│   ├── Discord.svg
│   ├── leftArrow.svg
│   ├── GitHub.svg
│   ├── LinkedIn.svg
│   ├── Keybase.svg
│   ├── rightArrow.svg
│   ├── Telegram.svg
│   ├── Twitter.svg
│   └── YouTube.svg
:::

### Displaying the Icons

After adding the left and right arrow icons to the <code class="inline-code-block">icons</code> directory, the plugin will automatically load the icons and provides the global <code class="inline-code-block">vp-icon</code> component. To use the <code class="inline-code-block">vp-icon</code> component we need to pass a <code class="inline-code-block">name</code> attribute to it where the value is the name of the SVG file we want to use.

Here, the value for the <code class="inline-code-block">name</code> attribute will be <code class="inline-code-block">leftArrow</code> for the Prev <span class="post-term-one">pagination</span> link and <code class="inline-code-block">rightArrow</code> for the Next <span class="post-term-one">pagination</span> link.

We're going to be adding the <code class="inline-code-block">vp-icon</code> components inside of the corresponding <code class="inline-code-block">router-link</code> components.

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Displaying the Icons">
```vue{25,30}
<template>
  <div class="theme-default-content">
    <h1>The Scribblings of a Monkey!!!</h1>
    <div v-for="post in $pagination.pages" :key="post.key">
      <div>
        <div>
          <h2>
            {{ post.title }}
          </h2>
        </div>
        <p>
          {{ post.frontmatter.preview }}
        </p>
      </div>
      <div>
        <img
          :src="`/images/${post.frontmatter.img}`"
          :alt="post.frontmatter.alt || 'Post Picture'"
        />
      </div>
    </div>
    <div class="pagination">
      <div>
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
          <vp-icon name="leftArrow"></vp-icon>Prev
        </router-link>
      </div>
      <div>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
          Next<vp-icon name="rightArrow"></vp-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style lang="stylus" scoped>
.pagination
  display: flex
  justify-content: space-between
  padding-top: 2rem
</style>
```
</code-block>
</code-group>

To view the left and right arrow icons navigate to the <span class="post-term-one">pagination</span> pages:

- <span class="external-link-wrap">[http://localhost:8080/posts/](http://localhost:8080/posts/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/3/](http://localhost:8080/posts/page/3/)</span>

Notice how the left arrow icon is being displayed to the left of the Prev <span class="post-term-one">pagination</span> text and how the right arrow icon is being displayed to the right of the Next <span class="post-term-one">pagination</span> text. This ensures the arrows and the text look correct when being displayed.

### Styling the Icons

We're now going to add some styling to the left and right arrow icons. The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Styling the Icons">
```vue{25,30,48-51}
<template>
  <div class="theme-default-content">
    <h1>The Scribblings of a Monkey!!!</h1>
    <div v-for="post in $pagination.pages" :key="post.key">
      <div>
        <div>
          <h2>
            {{ post.title }}
          </h2>
        </div>
        <p>
          {{ post.frontmatter.preview }}
        </p>
      </div>
      <div>
        <img
          :src="`/images/${post.frontmatter.img}`"
          :alt="post.frontmatter.alt || 'Post Picture'"
        />
      </div>
    </div>
    <div class="pagination">
      <div>
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
          <vp-icon name="leftArrow" class="left-arrow"></vp-icon>Prev
        </router-link>
      </div>
      <div>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
          Next<vp-icon name="rightArrow" class="right-arrow"></vp-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style lang="stylus" scoped>
.pagination
  display: flex
  justify-content: space-between
  padding-top: 2rem
  .left-arrow
    padding-right: 0.25rem
  .right-arrow
    padding-left: 0.25rem
</style>
```
</code-block>
</code-group>

- <code class="inline-code-block">padding-right: 0.25rem</code> adds a padding of <code class="inline-code-block">0.25rem</code> to the right of the <code class="inline-code-block">vp-icon</code> component with a class of <code class="inline-code-block">left-arrow</code>.

- <code class="inline-code-block">padding-left: 0.25rem</code> adds a padding of <code class="inline-code-block">0.25rem</code> to the left of the <code class="inline-code-block">vp-icon</code> component with a class of <code class="inline-code-block">right-arrow</code>.

To view the styling updates to the left and right arrow icons navigate to the <span class="post-term-one">pagination</span> pages:

- <span class="external-link-wrap">[http://localhost:8080/posts/](http://localhost:8080/posts/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/3/](http://localhost:8080/posts/page/3/)</span>

If you have any questions about the CSS discussed above, then check out this resource:

- <span class="external-link-wrap">[CSS Tutorial](https://www.w3schools.com/css/default.asp)</span>

## Optimizing the Icons

When downloading the left and right arrow icons from [iconfont](https://www.iconfont.cn/collections/index), the icons will have a lot of redundant and useless information. We can use a Command-line Interface (CLI) command provided by [vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/) to optimize the icons.

:::tip Icons Already Optimized
If you downloaded the left and right arrow icons from the repository or by using the [SVG Export](https://svgexport.io/) browser extension, then the icons should already be optimized and you shouldn't have to run the CLI command.
:::

Here's the CLI command you can run to optimize the icons <code class="inline-code-block">vuepress svgo [docsDir]</code> where <code class="inline-code-block">[docsDir]</code> is the docs directory for your project which in our case is <code class="inline-code-block">docs</code>.

We added this CLI command to the <code class="inline-code-block">scripts</code> object in the <code class="inline-code-block">package.json</code> file in the previous post [VuePress Tutorial 12 - Highlight SVGs on Hover](/vuepress-tutorial-12/#cli-command).

Here's how to run the script:

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

After running the script, the icons should be optimized.

If you have questions about how the plugin implements the CLI command or about the plugin in general, then checkout the [guide](https://github.com/ntnyq/vuepress-plugin-svg-icons/tree/vuepress-v1/docs/guide).

You can also check out [SVGO](https://github.com/svg/svgo) which is the optimization tool being used by the plugin to optimize the icons.

## Next Steps

In the next tutorial we're going to continue styling the <code class="inline-code-block">IndexPost</code> layout component by making each post in the list of posts look like a card.
