---
title: VuePress Tutorial 19 - Pagination Links
date: 2022-11-19T20:47:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Ready to learn how to add the pagination links to the IndexPost layout component, then check out VuePress Tutorial 19 - Pagination Links! 🍌🐒
preview: Every time we navigate to the entry page or the second page in the list of pagination pages we have to manually...
img: vuepress-tutorials/tutorial-19/vuepress-tutorial-19-pagination-links-post.png
placeholder: vuepress-tutorials/tutorial-19/vuepress-tutorial-19-pagination-links-post-90w.png
alt: VuePress Tutorial 19 - Pagination Links Post Picture
linkImg: vuepress-tutorials/tutorial-19/vuepress-tutorial-19-pagination-links-post-link.png
linkImgAlt: VuePress Tutorial 19 - Pagination Links Image
videoURL: https://www.youtube-nocookie.com/embed/lnYvXvmFpZo
canonicalUrl: vuepress-tutorial-19/
---

::: slot header

# VuePress Tutorial 19 - Pagination Links

:::

## What We're Doing

Every time we navigate to the entry page or the second page in the list of <span class="post-term-one">pagination</span> pages we have to manually input the URL into the search bar of the browser which isn't a great user experience. To resolve this issue we're going to be adding <span class="post-term-one">pagination</span> links to each of the <span class="post-term-one">pagination</span> pages.

To accomplish this we'll be using the following properties provided by the blog plugin [Client API](https://vuepress-plugin-blog.billyyyyy3320.com/client-api/):

- <code class="inline-code-block">$pagination.hasPrev</code>
- <code class="inline-code-block">$pagintaion.prevLink</code>
- <code class="inline-code-block">$pagination.hasNext</code>
- <code class="inline-code-block">$pagintaion.nextLink</code>

Before, we use the properties to add the <span class="post-term-one">pagination</span> links, we're going to add two more example posts to the blog. This will allow us to view the <span class="post-term-one">pagination</span> links in every scenario, i.e., when there isn't a previous page, when there isn't a next page, and when there is a previous page and a next page.

You can view all of the code in this tutorial by going to the tutorial-19 branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-19) repository.

## Adding More Example Pages

We'll be adding the following example pages to the <code class="inline-code-block">_posts</code> directory:

- <code class="inline-code-block">2022-07-14-example-page-4.md</code>
- <code class="inline-code-block">2022-11-10-example-page-5.md</code>

The <code class="inline-code-block">_posts</code> directory for your site should now look like this:

::: vue
.
├── `_posts`
│   ├── 2020-07-03-example-page-1.md
│   ├── 2021-11-16-example-page-2.md
│   ├── 2022-05-08-example-page-3.md
│   ├── 2022-07-14-example-page-4.md
│   └── 2022-11-10-example-page-5.md
:::

### Adding Titles and Frontmatter

We're now going to add post titles and frontmatter to the example pages we just added like we did for the other example pages.

Here's what the <code class="inline-code-block">2022-07-14-example-page-4.md</code> file and the <code class="inline-code-block">2022-11-10-example-page-5.md</code> file look like after adding the titles and frontmatter:

<code-group>
<code-block title="Example Page 4">
```md
---
preview: Example Post 4 preview
img: examples/example-post-4/example-post-4.png
alt: Example Post 4 Post Picture
---

# Example Post 4
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 5">
```md
---
preview: Example Post 5 preview
img: examples/example-post-5/example-post-5.png
alt: Example Post 5 Post Picture
---

# Example Post 5
```
</code-block>
</code-group>

### Adding Images

We also need to add the post images for the example pages we just added. We'll do this just like we did in the previous tutorial by creating a directory for each example post inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the post images to the directories for each example post.

You can download all of the images below from your browser, and they're also available in the <code class="inline-code-block">tutorial-19</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-19) repository.

#### Example Post 4

For the fourth example post we'll be adding an <code class="inline-code-block">example-post-4</code> directory inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the image for the fourth example post which is named <code class="inline-code-block">example-post-4.png</code> inside of the <code class="inline-code-block">example-post-4</code> directory.

The directory structure for your site should now look something like this:

::: vue
.
├── `examples`
│   ├── `example-post-1`
│   ├── `example-post-2`
│   ├── `example-post-3`
│   ├── `example-post-4`
│   │   └── example-post-4.png
:::

Here's the example post 4 image:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-19/example-post-4.png')"
      alt="Example Post 4 Image"
  />
</div>

#### Example Post 5

For the fifth example post we'll be adding an <code class="inline-code-block">example-post-5</code> directory inside of the <code class="inline-code-block">examples</code> directory. Then we'll add the image for the fifth example post which is named <code class="inline-code-block">example-post-5.png</code> inside of the <code class="inline-code-block">example-post-5</code> directory.

The directory structure for your site should now look something like this:

::: vue
.
├── `examples`
│   ├── `example-post-1`
│   ├── `example-post-2`
│   ├── `example-post-3`
│   ├── `example-post-4`
│   ├── `example-post-5`
│   │   └── example-post-5.png

:::

Here's the example post 5 image:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/vuepress-tutorials/tutorial-19/example-post-5.png')"
      alt="Example Post 5 Image"
  />
</div>

### Viewing the Pagination Pages

After adding the titles and frontmatter to the example pages and adding the post images, you should now have the following <span class="post-term-one">pagination</span> pages:

- <span class="external-link-wrap">[http://localhost:8080/posts/](http://localhost:8080/posts/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/3/](http://localhost:8080/posts/page/3/)</span>

Having these three <span class="post-term-one">pagination</span> pages will allow us to view the <span class="post-term-one">pagination</span> links in every scenario that we mentioned in the beginning of the post.

:::tip Order of Posts
The order of the posts may not be what you're expecting and may change each time you start the local development server. This is because the blog plugin uses a <code class="inline-code-block">date</code> property to sort the posts which it looks for on the frontmatter of each post page. Since we haven't added a <code class="inline-code-block">date</code> custom variable to the frontmatter blocks for the post pages, the blog plugin will not sort the posts in a predictable way. We'll fix this issue in a future tutorial by adding the <code class="inline-code-block">date</code> custom variable to the frontmatter blocks of the post pages.
:::

If you have any questions about adding the example pages to the <code class="inline-code-block">_posts</code> directory, adding titles to the post pages, adding the frontmatter to the post pages, and/or adding the post images, then check out the relevant sections from the previous tutorials:

- [VuePress Tutorial 15 - Blog Plugin](/vuepress-tutorial-15/#directory-classification)
- [VuePress Tutorial 17 - IndexPost Layout](/vuepress-tutorial-17/#post-titles)
- [VuePress Tutorial 18 - IndexPost Images](/vuepress-tutorial-18/#adding-post-images)

## Displaying Pagination Links

We're now ready to use the properties provided by the blog plugin [Client API](https://vuepress-plugin-blog.billyyyyy3320.com/client-api/) to add the <span class="post-term-one">pagination</span> links to the <span class="post-term-one">pagination</span> pages.

We're going to display the <span class="post-term-one">pagination</span> links using two <code class="inline-code-block">router-link</code> components one for the previous page and one for the next page. We'll be wrapping each <code class="inline-code-block">router-link</code> component in a <code class="inline-code-block">div</code> tag.

We'll then wrap the <code class="inline-code-block">div</code> tags inside another <code class="inline-code-block">div</code> tag which we'll place underneath the <code class="inline-code-block">div</code> tag that is being used to loop over the <span class="post-term-one">pagination</span> pages.

The <code class="inline-code-block">router-link</code> component is provided by [Vue Router](https://v3.router.vuejs.org/) which gets installed when installing [VuePress](https://vuepress.vuejs.org/). The <code class="inline-code-block">router-link</code> component is used for enabling user navigation for the site. The target location for the link is specified by using the <code class="inline-code-block">to</code> prop, and it renders as an <code class="inline-code-block">a</code> tag with the specified <code class="inline-code-block">href</code> by default.

If you want to learn more about the <code class="inline-code-block">router-link</code> component, then check out the [\<router-link>](https://v3.router.vuejs.org/api/#router-link) documentation.

To display the <span class="post-term-one">pagination</span> link for the previous page we'll be using the <code class="inline-code-block">$pagination.hasPrev</code> property to check if the current <span class="post-term-one">pagination</span> page has a previous page. We'll use the <code class="inline-code-block">\$pagination.prevLink</code> property to provide the path of the previous <span class="post-term-one">pagination</span> page to the <code class="inline-code-block">router-link</code> component <code class="inline-code-block">to</code> prop.

Similarly, to display the <span class="post-term-one">pagination</span> link for the next page we'll be using the <code class="inline-code-block">$pagination.hasNext</code> property to check if the current <span class="post-term-one">pagination</span> page has a next page. We'll use the <code class="inline-code-block">\$pagination.nextLink</code> property to provide the path of the next <span class="post-term-one">pagination</span> page to the <code class="inline-code-block">router-link</code> component <code class="inline-code-block">to</code> prop.

We discussed the properties above in detail in the [VuePress Tutorial 16 - Pagination](/vuepress-tutorial-16/#client-api) post, so if you need a refresher or if you have any questions read through the relevant sections in that post.

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Displaying the Pagination Links">
```vue{22-33}
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
    <div>
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

<style></style>
```
</code-block>
</code-group>

Here we're using the <code class="inline-code-block">v-if</code> directive to conditionally render the <span class="post-term-one">pagination</span> links by using the values of the <code class="inline-code-block">\$pagination.hasPrev</code> and <code class="inline-code-block">$pagination.hasNext</code> properties. The block of code using the <code class="inline-code-block">v-if</code> directive will only be rendered if the expression provided to it returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value.

We're also binding the <code class="inline-code-block">to</code> prop by placing a <code class="inline-code-block">:</code> before it which is shorthand for <code class="inline-code-block">v-bind</code>. Using <code class="inline-code-block">v-bind</code> allows us to bind JavaScript expressions to the HTML attributes.

If you have any questions or want to learn more about conditional rendering or <code class="inline-code-block">v-bind</code>, then check these resources:

- <span class="external-link-wrap">[Conditional Rendering](https://v2.vuejs.org/v2/guide/conditional.html)</span>
- <span class="external-link-wrap">[v-bind](https://v2.vuejs.org/v2/api/#v-bind)</span>
- <span class="external-link-wrap">[Using v-bind in Vue](https://masteringjs.io/tutorials/vue/bind)</span>

### Entry Page HTML

After updating the <code class="inline-code-block">IndexPost.vue</code> file with the code above, if you navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) you should now see the Next <span class="post-term-one">pagination</span> link being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

You should now be able to click on the Next <span class="post-term-one">pagination</span> link, and it should take you to the next page in the list of <span class="post-term-one">pagination</span> pages.

The HTML for the <code class="inline-code-block">body</code> tag for the entry page should now look something like this:

<code-group>
<code-block title="Entry Page HTML">
```html{30-37}
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
        <div>
          <div>
            <!---->
          </div>
          <div>
            <a href="/posts/page/2/" class=""> Next </a>
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

If you navigate to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/) you should now see the Prev and Next <span class="post-term-one">pagination</span> links being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

You should be able to click on the Prev <span class="post-term-one">pagination</span> link, and it should take you to the previous page. You should also be able to click on the Next <span class="post-term-one">pagination</span> link, and it should take you to the next page.

The HTML for the <code class="inline-code-block">body</code> tag for the second page should now look something like this:

<code-group>
<code-block title="Page 2 HTML">
```html{30-37}
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
            <p> Example Post 3 preview </p>
          </div>
          <div>
             <img src="/images/examples/example-post-3/example-post-3.png"
                  alt="Exmple Post 3 Post Picture">
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2> Example Post 4 </h2>
            </div>
            <p> Example Post 4 preview </p>
          </div>
          <div>
            <img src="/images/examples/example-post-4/example-post-4.png"
                 alt="Example Post 4 Post Picture">
          </div>
        </div>
        <div>
          <div>
            <a href="/posts/" class="router-link-active"> Prev </a>
          </div>
          <div>
            <a href="/posts/page/3/" class> Next </a>
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

### Page 3 HTML

If you navigate to the third page [http://localhost:8080/posts/page/3/](http://localhost:8080/posts/page/3/) you should now see the Prev <span class="post-term-one">pagination</span> link being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

You should be able to click on the Prev <span class="post-term-one">pagination</span> link, and it should take you to the previous page.

The HTML for the <code class="inline-code-block">body</code> tag for the third page should now look something like this:

<code-group>
<code-block title="Page 3 HTML">
```html{18-25}
<body>
  <div id="app">
    <div id="global-layout">
      <div class="theme-default-content">
        <h1>The Scribblings of a Monkey!!!</h1>
        <div>
          <div>
            <div>
              <h2> Example Post 5 </h2>
            </div>
            <p> Example Post 5 preview </p>
          </div>
          <div>
             <img src="/images/examples/example-post-5/example-post-5.png"
                  alt="Exmple Post 5 Post Picture">
          </div>
        </div>
        <div>
          <div>
            <a href="/posts/page/2/" class> Prev </a>
          </div>
          <div>
            <!---->
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

### Next Steps

You may have noticed the styling of the Prev and Next <span class="post-term-one">pagination</span> links doesn't look too good, so in the next tutorial we'll begin styling these links. We'll also be adding left and right arrow icons to the Prev and Next <span class="post-term-one">pagination</span> links, respectively.

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';

export default {
  components: {
    VLazyImage
  }
}
</script>
