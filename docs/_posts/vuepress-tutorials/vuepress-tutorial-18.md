---
title: VuePress Tutorial 18 - IndexPost Images
date: 2022-11-09T22:15:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Ready to learn how to add images to the IndexPost layout component, then check out VuePress Tutorial 18 - IndexPost Images! 🍌🐒
preview: In this tutorial we're going to continue the development of the IndexPost layout component by using the globally...
img: vuepress-tutorials/tutorial-18/vuepress-tutorial-18-indexpost-images-post.png
placeholder: vuepress-tutorials/tutorial-18/vuepress-tutorial-18-indexpost-images-post-90w.png
alt: VuePress Tutorial 18 - IndexPost Images Post Picture
linkImg: vuepress-tutorials/tutorial-18/vuepress-tutorial-18-indexpost-images-post-link.png
linkImgAlt: VuePress Tutorial 18 - IndexPost Images Image
videoURL: https://www.youtube-nocookie.com/embed/bJt3yUymxc4
canonicalUrl: vuepress-tutorial-18/
---

::: slot header

# VuePress Tutorial 18 - IndexPost Images

:::

## What We're Doing

In this tutorial we're going to continue the development of the <code class="inline-code-block">IndexPost</code> layout component by using the globally scoped <code class="inline-code-block">$pagination</code> variable to access <span class="post-term-one">pagination</span> data related to images. To display the data on the <span class="post-term-one">pagination</span> pages we'll be updating the <code class="inline-code-block">IndexPost</code> layout component's <code class="inline-code-block">template</code> tag like we did in the previous tutorial.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

Be sure to add each block of code below one at a time to your project, then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-18</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-18) repository.

## Adding Post Images

Before we can access the <span class="post-term-one">pagination</span> data related to images, we need to first add the images that we'll be displaying in the list of post pages. We're going to be adding three post images to the blog one for each post.

Each post image has a <code class="inline-code-block">width</code> of <code class="inline-code-block">155px</code> and a <code class="inline-code-block">height</code> of <code class="inline-code-block">185px</code>. Using the same <code class="inline-code-block">width</code> and <code class="inline-code-block">height</code> for the post images makes the list of post pages look consistent.

You can download all of the images below from your browser, and they're also available in the <code class="inline-code-block">tutorial-18</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-18) repository.

The images were created using [Canva](https://www.canva.com/). The site offers a lot of features for free, but some features and images require payment after your free trial is expired. A good alternative to use is [GIMP](https://www.gimp.org/).

Here are some other useful online image tools:

- <span class="external-link-wrap">[LunaPic](https://www5.lunapic.com/editor/)</span>
- <span class="external-link-wrap">[HCTI API](https://htmlcsstoimage.com/)</span>
- <span class="external-link-wrap">[PhotoScissors](https://photoscissors.com/)</span>
- <span class="external-link-wrap">[iLoveIMG](https://www.iloveimg.com/)</span>

It's also important to reduce the file sizes of your images by using compression. This will help to optimize your site's bundle size, save bandwidth, and decrease the loading time for your images. [Canva](https://www.canva.com/) and [GIMP](https://www.gimp.org/), and some of the other image tools mentioned above offer the ability to compress your images.

Here are some other useful online tools for image compression:

- <span class="external-link-wrap">[TinyPNG](https://tinypng.com/)</span>
- <span class="external-link-wrap">[Image Compressor](https://imagecompressor.com/)</span>

### Adding an Examples Directory

Let's start by creating an <code class="inline-code-block">examples</code> directory inside of the <code class="inline-code-block">images</code> directory. The <code class="inline-code-block">examples</code> directory will be used to store the post images for each example post.

The directory structure for your site should now look something like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   │   ├── `images`
│   │   │   │   ├── `code-monkeys-logos`
│   │   │   │   └── `examples`
│   │   ├── `theme`
│   │   └── config.js
:::

### Example Post 1

After adding the <code class="inline-code-block">examples</code> directory, we're now ready to add the post images for each example post. We'll be creating a directory for each example post inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the post images to the directories of each example post.

We're going to start with the first example post by adding an <code class="inline-code-block">example-post-1</code> directory inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the image for the first example post which is named <code class="inline-code-block">example-post-1.png</code> inside of the <code class="inline-code-block">example-post-1</code> directory.

The directory structure for your site should now look something like this:

::: vue
.
├── `examples`
│   ├── `example-post-1`
│   │   └── example-post-1.png
:::

Here's the example post 1 image:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-18/example-post-1-155w.png')"
      :src-placeholder="$withBase('/images/vuepress-tutorials/tutorial-18/example-post-1-90w.png')"
      alt="Example Post 1 Image"
  />
</div>

### Example Post 2

For the second example post we'll be adding an <code class="inline-code-block">example-post-2</code> directory inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the image for the second example post which is named <code class="inline-code-block">example-post-2.png</code> inside of the <code class="inline-code-block">example-post-2</code> directory.

The directory structure for your site should now look something like this:

::: vue
.
├── `examples`
│   ├── `example-post-1`
│   ├── `example-post-2`
│   │   └── example-post-2.png
:::

Here's the example post 2 image:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-18/example-post-2-155w.png')"
      :src-placeholder="$withBase('/images/vuepress-tutorials/tutorial-18/example-post-2-90w.png')"
      alt="Example Post 2 Image"
  />
</div>

### Example Post 3

For the third example post we'll be adding an <code class="inline-code-block">example-post-3</code> directory inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the image for the third example post which is named <code class="inline-code-block">example-post-3.png</code> inside of the <code class="inline-code-block">example-post-3</code> directory.

The directory structure for your site should now look something like this:

::: vue
.
├── `examples`
│   ├── `example-post-1`
│   ├── `example-post-2`
│   ├── `example-post-3`
│   │   └── example-post-3.png
:::

Here's the example post 3 image:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-18/example-post-3-155w.png')"
      :src-placeholder="$withBase('/images/vuepress-tutorials/tutorial-18/example-post-3-90w.png')"
      alt="Example Post 3 Image"
  />
</div>

## Post Images

After adding the post images to the blog, we now need to add a way to access each image in the <code class="inline-code-block">IndexPost</code> layout component which we'll accomplish by adding a custom variable <code class="inline-code-block">img</code> to the [YAML](https://yaml.org/) frontmatter blocks of each post file. The value of the <code class="inline-code-block">img</code> custom variable will be the path to the image in the project.

We're also going to add another custom variable of <code class="inline-code-block">alt</code> to the [YAML](https://yaml.org/) frontmatter blocks of each post file. The value of the <code class="inline-code-block">alt</code> custom variable will be a description of the image.

If you have any questions or want to learn more about [YAML](https://yaml.org/) frontmatter blocks in [VuePress](https://vuepress.vuejs.org/) then check these resources:

- [YAML Frontmatter Blocks](/vuepress-tutorial-6/#yaml-frontmatter-blocks)
- <span class="external-link-wrap">[Frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html)</span>
- <span class="external-link-wrap">[Glossary - frontmatter](https://vuepress.vuejs.org/miscellaneous/glossary.html#frontmatter)</span>


### Adding Img and Alt to Post Files

Here's what the post files look like after adding the <code class="inline-code-block">img</code> and <code class="inline-code-block">alt</code> custom variables:

<code-group>
<code-block title="Example Page 1">
```md{3-4}
---
preview: Example Post 1 preview
img: examples/example-post-1/example-post-1.png
alt: Example Post 1 Post Picture
---

# Example Post 1
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 2">
```md{3-4}
---
preview: Example Post 2 preview
img: examples/example-post-2/example-post-2.png
alt: Example Post 2 Post Picture
---

# Example Post 2
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 3">
```md{3-4}
---
preview: Example Post 3 preview
img: examples/example-post-3/example-post-3.png
alt: Example Post 3 Post Picture
---

# Example Post 3
```
</code-block>
</code-group>

### Adding Img and Alt to $page Variables

As mentioned in the previous tutorial when [VuePress](https://v1.vuepress.vuejs.org/) encounters a [YAML](https://yaml.org/) frontmatter block in a Markdown file it automatically adds each variable as a property to the globally scoped <code class="inline-code-block">\$page.frontmatter</code> variable.

Since the page objects in the <code class="inline-code-block">\$pagination.pages</code> property are the same as the <code class="inline-code-block">\$page</code> variables used by the post pages, we will now have a <code class="inline-code-block">frontmatter.img</code> property and a <code class="inline-code-block">frontmatter.alt</code> property that we can access in the <code class="inline-code-block">IndexPost</code> layout component.

### Displaying Images

Now that we can access the values of the <code class="inline-code-block">img</code> and <code class="inline-code-block">alt</code> custom variables in the <code class="inline-code-block">\$pagination.pages</code> property, we're ready to render the images on the <span class="post-term-one">pagination</span> pages.

We're going to display the images using the <code class="inline-code-block">img</code> tag which we'll place in a <code class="inline-code-block">div</code> tag underneath the parent <code class="inline-code-block">div</code> tag of the <code class="inline-code-block">p</code> tag.

The <code class="inline-code-block">img</code> tag allows us to embed an image into the page. We'll be using the <code class="inline-code-block">src</code> and <code class="inline-code-block">alt</code> attributes provided by the <code class="inline-code-block">img</code> tag.

The <code class="inline-code-block">src</code> attribute is required, and it contains the path to the image you want to display which in our case are the post images we created earlier.

The <code class="inline-code-block">alt</code> attribute is optional and consists of a text description of the image which is useful for [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) because screen readers will be able to read the description to the users. This allows the users to gain an understanding of what the image is. The description is also displayed on the page if the image is unable to be loaded.

If you want to learn more about the <code class="inline-code-block">img</code> tag, then check out [\<img>: The Image Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

We can access the <code class="inline-code-block">img</code> and <code class="inline-code-block">alt</code> properties on each page object in our loop by using <code class="inline-code-block">post.frontmatter.img</code> and <code class="inline-code-block">post.frontmatter.alt</code>, respectively.

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Displaying the Images">
```vue{15-20}
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
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style></style>
```
</code-block>
</code-group>

Here we're binding the <code class="inline-code-block">src</code> and <code class="inline-code-block">alt</code> attributes by placing a <code class="inline-code-block">:</code> before them which is shorthand for <code class="inline-code-block">v-bind</code>. This allows us to bind the JavaScript expressions to the HTML attributes.

Also, notice <code class="inline-code-block">/images/</code> was added to the beginning of the path to the post images which we need to add since they're all located in the <code class="inline-code-block">images</code> directory. We don't need to include <code class="inline-code-block">.vuepress/public</code> in the path to the post images though because whenever you reference assets stored in the <code class="inline-code-block">public</code> directory that gets added automatically.

We also added an alternative value for the post image <code class="inline-code-block">alt</code> attribute in case the <code class="inline-code-block">alt</code> custom variable isn't present in the frontmatter of a post. This is done by using a logical OR operator, i.e., <code class="inline-code-block">||</code>. Here, we're using <code class="inline-code-block">"post.frontmatter.alt || 'Post Picture'"</code> which means if the <code class="inline-code-block">alt</code> property evaluates to a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, then we'll display the <code class="inline-code-block">Post Picture</code> text instead.

If you have any questions or want to learn more about <code class="inline-code-block">v-bind</code> or the logical OR operator, then check these resources:

- <span class="external-link-wrap">[v-bind](https://v2.vuejs.org/v2/api/#v-bind)</span>
- <span class="external-link-wrap">[Using v-bind in Vue](https://masteringjs.io/tutorials/vue/bind)</span>
- <span class="external-link-wrap">[logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)</span>

### Entry Page HTML

After updating the <code class="inline-code-block">IndexPost.vue</code> file with the code above, if you navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) you should now see the images being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the entry page should now look something like this:

<code-group>
<code-block title="Entry Page HTML">
```html{13-16,25-28}
<body>
  <div id="app">
    <div id="global-layout">
      <div class="theme-default-content">
        <h1>The Scribblings of a Monkey!!!</h1>
        <div>
          <div>
            <div>
              <h2> Example Post 1 </h2>
            </div>
            <p> Example Post 1 preview </p>
          </div>
          <div>
             <img src="/images/examples/example-post-1/example-post-1.png"
                  alt="Exmple Post 1 Post Picture">
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2> Example Post 2 </h2>
            </div>
            <p> Example Post 2 preview </p>
          </div>
          <div>
            <img src="/images/examples/example-post-2/example-post-2.png"
                 alt="Example Post 2 Post Picture">
          </div>
        </div>
      </div>
      <footer data-v-60ae214a class="footer">...</footer>
    </div>
    ...
  </div>
  ...
</body>
```
</code-block>
</code-group>

### Page 2 HTML

If you navigate to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/) you should now see the image being displayed with some styling which again is being provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the second page should now look something like this:

<code-group>
<code-block title="Page 2 HTML">
```html{13-16}
<body>
  <div id="app">
    <div id="global-layout">
      <div class="theme-default-content">
        <h1>The Scribblings of a Monkey!!!</h1>
        <div>
          <div>
            <div>
              <h2> Example Post 3 </h2>
            </div>
            <p> Example Post 3 Preview </p>
          </div>
          <div>
            <img src="/images/examples/example-post-3/example-post-3.png"
                 alt="Example Post 3 Post Picture">
          </div>
        </div>
      </div>
      <footer data-v-60ae214a class="footer">...</footer>
    </div>
    ...
  </div>
  ...
</body>
```
</code-block>
</code-group>

## Next Steps

In the next tutorial we'll be continuing the development of the <code class="inline-code-block">IndexPost</code> layout component by beginning the process of adding the <span class="post-term-one">pagination</span> buttons to the <span class="post-term-one">pagination</span> pages.

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
  width: 9.6875rem
  margin: 0 auto
  .v-lazy-image
    filter: blur(0.375rem)
    will-change: filter
    width: 100%
  .v-lazy-image-loaded
    transition: filter 0.7s
    filter: blur(0)
</style>
