---
title: VuePress Tutorial 17 - IndexPost Layout
date: 2022-10-17T14:12:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Ready to start developing the IndexPost layout component, then check out VuePress Tutorial 17 - IndexPost Layout! 🍌🐒
preview: We're now ready to begin the development of the IndexPost layout component. We'll be using the globally scoped...
img: vuepress-tutorials/tutorial-17/vuepress-tutorial-17-indexpost-layout-post.png
alt: VuePress Tutorial 17 - IndexPost Layout Post Picture
linkImg: vuepress-tutorials/tutorial-17/vuepress-tutorial-17-indexpost-layout-post-link.png
linkImgAlt: VuePress Tutorial 17 - IndexPost Layout Image
videoURL: https://www.youtube-nocookie.com/embed/mIx_utuexDc
canonicalUrl: vuepress-tutorial-17/
---

::: slot header

# VuePress Tutorial 17 - IndexPost Layout

:::

## What We're Doing

We're now ready to begin the development of the <code class="inline-code-block">IndexPost</code> layout component. We'll be using the globally scoped <code class="inline-code-block">$pagination</code> variable provided by the blog plugin [Client API](https://vuepress-plugin-blog.billyyyyy3320.com/client-api/) to access the <span class="post-term-one">pagination</span> data. In this tutorial we'll be focusing on the post title and preview <span class="post-term-one">pagination</span> data. To display the data on the <span class="post-term-one">pagination</span> pages we'll be updating the <code class="inline-code-block">IndexPost</code> layout component's <code class="inline-code-block">template</code> tag.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

Be sure to add each block of code below one at a time to your project, then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-17</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-17) repository.

## Naming the Component

Before accessing and displaying the <span class="post-term-one">pagination</span> data, we're going to first give the component a name and remove the <code class="inline-code-block">created</code> lifecycle hook which we were using in the previous tutorial to log the <span class="post-term-one">pagination</span> data to the console.

Here's the updated <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Naming the Component">
```vue{5}
<template></template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style></style>
```
</code-block>
</code-group>

## Looping Over Pagination Pages

To display the <span class="post-term-one">pagination</span> data we're going to loop over the <code class="inline-code-block">$pagination.pages</code> property which if you remember from the previous tutorial [VuePress Tutorial 16 - Pagination](/vuepress-tutorial-16) is an array of objects where each object contains data related to post pages that are accessible on the current <span class="post-term-one">pagination</span> page.

### Using the v-for Directive

Since <code class="inline-code-block">$pagination.pages</code> is an array that we want to loop over, we're going to use the <code class="inline-code-block">v-for</code> directive to render a list of post pages based on the data within the array. The <code class="inline-code-block">v-for</code> directive uses the following syntax <code class="inline-code-block">v-for="item in items"</code> where <code class="inline-code-block">items</code> is the array you want to loop over, and <code class="inline-code-block">item</code> is an alias for the array element being iterated on. Here, <code class="inline-code-block">items</code> corresponds to <code class="inline-code-block">\$pagination.pages</code>, and we'll use <code class="inline-code-block">post</code> as the alias for the array element being iterated on. This means our <code class="inline-code-block">v-for</code> directive will be <code class="inline-code-block">v-for="post in $pagination.pages"</code>.

### Using the key Attribute

When using the <code class="inline-code-block">v-for</code> directive the common best practice is to bind a <code class="inline-code-block">key</code> attribute where each value given to the <code class="inline-code-block">key</code> attribute should be unique. The <code class="inline-code-block">key</code> attribute uses the following syntax <code class="inline-code-block">:key="item.id"</code> where <code class="inline-code-block">id</code> is a property with a unique value for every <code class="inline-code-block">item</code> in the <code class="inline-code-block">items</code> array.

You really only need to use the <code class="inline-code-block">key</code> attribute when the rendered list relies on child component state or temporary [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) state, e.g., form input values . This means we don't actually need to include the <code class="inline-code-block">key</code> attribute since we're currently just rendering a static list.

However, we're going to bind the <code class="inline-code-block">key</code> attribute in case we ever need to use it in the future. To ensure the <code class="inline-code-block">key</code> attribute has a unique value for each item in the list, we're going to use the <code class="inline-code-block">key</code> property which is a unique value generated for each page object within the <code class="inline-code-block">$pagination.pages</code> array. Here's what the <code class="inline-code-block">key</code> attribute will look like in our case <code class="inline-code-block">:key="post.key"</code>.

### Determining a Tag

Now we need to determine what tag we want to add our <code class="inline-code-block">v-for</code> directive and <code class="inline-code-block">key</code> attribute to. We're going to add them to a <code class="inline-code-block">div</code> tag which will allow us to wrap the <span class="post-term-one">pagination</span> data for each post in the list of post pages. Here's what the <code class="inline-code-block">div</code> tag is going to look like after adding the <code class="inline-code-block">v-for</code> directive and <code class="inline-code-block">key</code> attribute <code class="inline-code-block">\<div v-for="post in $pagination.pages" :key="post.key">&lt;/div></code>.

### Using a Root Element

Since the <code class="inline-code-block">div</code> tag uses the <code class="inline-code-block">v-for</code> directive, it's going to render multiple elements. This means we cannot use it as the root element, i.e., the first element in the <code class="inline-code-block">template</code> tag because the <code class="inline-code-block">template</code> tag can only have one root element. To resolve this issue we're going to wrap the <code class="inline-code-block">div</code> tag that's using the <code class="inline-code-block">v-for</code> directive within another <code class="inline-code-block">div</code> tag which will serve as the root element.

### Adding the Loop

Here's what the <code class="inline-code-block">IndexPost.vue</code> file should now look like:

<code-group>
<code-block title="Adding the Loop">
```vue{2-4}
<template>
  <div>
    <div v-for="post in $pagination.pages" :key="post.key"></div>
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

If you any questions or want to learn more about the <code class="inline-code-block">v-for</code> directive and the <code class="inline-code-block">key</code> attribute then check out these resources:

- <span class="external-link-wrap">[List Rendering](https://v2.vuejs.org/v2/guide/list.html)</span>
- <span class="external-link-wrap">[Maintaining State](https://v2.vuejs.org/v2/guide/list.html#Maintaining-State)</span>
- <span class="external-link-wrap">[key](https://v2.vuejs.org/v2/api/#key)</span>
- <span class="external-link-wrap">[Does Vue v-for really need a key?](https://www.youtube.com/watch?v=yg0n19SdKzs)</span>
- <span class="external-link-wrap">[Understanding the :key Attribute in Vue](https://michaelnthiessen.com/understanding-the-key-attribute)</span>

### Entry Page HTML

After updating the <code class="inline-code-block">IndexPost.vue</code> file with the code above, if you navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) you won't notice any changes on the page. This is because we've rendered <code class="inline-code-block">div</code> tags without any of the <span class="post-term-one">pagination</span> data inside of them.

If you navigate to the entry page, inspect the browser, and go to the <code class="inline-code-block">Elements</code> tab, the HTML for the <code class="inline-code-block">body</code> tag should now look something like this:

<code-group>
<code-block title="Entry Page HTML">
```html{4-7}
<body>
  <div id="app">
    <div id="global-layout">
      <div>
        <div></div>
        <div></div>
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

Notice how the entry page consists of two <code class="inline-code-block">div</code> tags wrapped inside of the <code class="inline-code-block">div</code> tag that's being used as the root element of the <code class="inline-code-block">template</code> tag. Each of those <code class="inline-code-block">div</code> tags inside of the parent <code class="inline-code-block">div</code> tag corresponds to a post page that is accessible on the entry page.

### Page 2 HTML

If you navigate to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/) you also won't notice any changes on the page. This is because we've rendered a <code class="inline-code-block">div</code> tag without any of the <span class="post-term-one">pagination</span> data inside of it.

The HTML for the <code class="inline-code-block">body</code> tag for the second page should now look something like this:

<code-group>
<code-block title="Page 2 HTML">
```html{4-6}
<body>
  <div id="app">
    <div id="global-layout">
      <div>
        <div></div>
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

Notice how the second page consists of one <code class="inline-code-block">div</code> tag wrapped inside of the <code class="inline-code-block">div</code> tag that's being used as the root element of the <code class="inline-code-block">template</code> tag. There is only one <code class="inline-code-block">div</code> tag since we have one post page accessible on the second page.

## Post Titles

Before we can access the post title data using the <code class="inline-code-block">$pagination.pages</code> property, we need to first add titles to the post files we created in the <code class="inline-code-block">_posts</code> directory:

- <code class="inline-code-block">2020-07-03-example-page-1.md</code>
- <code class="inline-code-block">2021-11-16-example-page-2.md</code>
- <code class="inline-code-block">2022-05-08-example-page-3.md</code>

### Adding Titles to Post Files

Since the post files are Markdown files, we can add titles to the files by adding a heading level one, e.g., <code class="inline-code-block"># Heading Level 1</code> to each file which gets converted to the following HTML <code class="inline-code-block">&lt;h1>Heading Level 1&lt;/h1></code>.

Here's what the post files look like after adding the titles:

<code-group>
<code-block title="Example Page 1">
```md
# Example Post 1
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 2">
```md
# Example Post 2
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 3">
```md
# Example Post 3
```
</code-block>
</code-group>

If you have any questions or want to learn more about Markdown headings, then check out the [Basic Syntax](https://www.markdownguide.org/basic-syntax) guide.

### Adding Titles to $page Variables

When [VuePress](https://v1.vuepress.vuejs.org/) encounters a heading level one in a Markdown file it automatically adds a <code class="inline-code-block">title</code> property to the globally scoped <code class="inline-code-block">\$page</code> variable.

The page objects in the <code class="inline-code-block">\$pagination.pages</code> property are the same as the <code class="inline-code-block">\$page</code> variables used by the post pages which means each page object will now have a <code class="inline-code-block">title</code> property that we can access in the <code class="inline-code-block">IndexPost</code> layout component.

You can take a look at the [Global Computed](https://v1.vuepress.vuejs.org/guide/global-computed.html) documentation to learn more about the <code class="inline-code-block">\$page</code> variable and other globally scoped variables.

### Displaying Post Titles

Now that we can access the post titles in the <code class="inline-code-block">\$pagination.pages</code> property, we're ready to render the post titles on the <span class="post-term-one">pagination</span> pages.

We're going to display the post titles as <code class="inline-code-block">h2</code> tags which we'll be wrapping inside of two <code class="inline-code-block">div</code> tags. We'll be using the <code class="inline-code-block">div</code> tags to add styling to the list of post pages in a future tutorial.

To display the post titles we'll be using [Text Interpolation](https://v2.vuejs.org/v2/guide/syntax.html#Text) which allows us to use variables inside of HTML tags by using the "Mustache" syntax. The "Mustache" syntax consists of wrapping a variable inside of double curly braces.

We can access the <code class="inline-code-block">title</code> property on each page object in our loop by using <code class="inline-code-block">post.title</code>. We can then display this by using the text interpolation described above.

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Displaying Post Titles">
```vue{4-10}
<template>
  <div>
    <div v-for="post in $pagination.pages" :key="post.key">
      <div>
        <div>
          <h2>
            {{ post.title }}
          </h2>
        </div>
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

### Entry Page HTML

After updating the <code class="inline-code-block">IndexPost.vue</code> file with the code above, if you navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) you should now see the post titles being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the entry page should now look something like this:

<code-group>
<code-block title="Entry Page HTML">
```html{5-18}
<body>
  <div id="app">
    <div id="global-layout">
      <div>
        <div>
          <div>
            <div>
              <h2> Example Post 1 </h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2> Example Post 2 </h2>
            </div>
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

If you navigate to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/) you should now see one post title being displayed with some styling which again is being provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the second page should now look something like this:

<code-group>
<code-block title="Page 2 HTML">
```html{5-11}
<body>
  <div id="app">
    <div id="global-layout">
      <div>
        <div>
          <div>
            <div>
              <h2> Example Post 3 </h2>
            </div>
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

## Post Previews

The post preview data is a snippet of text taken from the beginning of a post which is used as an introduction to the post in the list of post pages. Before we can access the post preview data using the <code class="inline-code-block">$pagination.pages</code> property, we need to first add previews to the post files we created in the <code class="inline-code-block">_posts</code> directory:

- <code class="inline-code-block">2020-07-03-example-page-1.md</code>
- <code class="inline-code-block">2021-11-16-example-page-2.md</code>
- <code class="inline-code-block">2022-05-08-example-page-3.md</code>

### Adding Previews to Post Files

Since the post files are Markdown files, we can use [YAML](https://yaml.org/) frontmatter blocks in the files and define a custom variable <code class="inline-code-block">preview</code>.

Here's what the post files look like after adding the <code class="inline-code-block">preview</code> variables:

<code-group>
<code-block title="Example Page 1">
```md{1-3}
---
preview: Example Post 1 preview
---

# Example Post 1
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 2">
```md{1-3}
---
preview: Example Post 2 preview
---

# Example Post 2
```
</code-block>
</code-group>

<code-group>
<code-block title="Example Page 3">
```md{1-3}
---
preview: Example Post 3 preview
---

# Example Post 3
```
</code-block>
</code-group>

If you have any questions or want to learn more about [YAML](https://yaml.org/) frontmatter blocks in [VuePress](https://vuepress.vuejs.org/) then check these resources:

- [YAML Frontmatter Blocks](/vuepress-tutorial-6/#yaml-frontmatter-blocks)
- <span class="external-link-wrap">[Frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html)</span>
- <span class="external-link-wrap">[Glossary - frontmatter](https://vuepress.vuejs.org/miscellaneous/glossary.html#frontmatter)</span>

:::tip Number of Characters Used in Preview
The value for each post <code class="inline-code-block">preview</code> variable should be within a preferred minimum and maximum number of characters. This will ensure the post previews in the list of post pages looks consistent.
:::

### Adding Previews to $page Variables

When [VuePress](https://v1.vuepress.vuejs.org/) encounters a [YAML](https://yaml.org/) frontmatter block in a Markdown file it automatically adds each variable as a property to the globally scoped <code class="inline-code-block">\$page.frontmatter</code> variable.

The page objects in the <code class="inline-code-block">\$pagination.pages</code> property are the same as the <code class="inline-code-block">\$page</code> variables used by the post pages which means each page object will now have a <code class="inline-code-block">frontmatter.preview</code> property that we can access in the <code class="inline-code-block">IndexPost</code> layout component.

You can take a look at the [Global Computed](https://v1.vuepress.vuejs.org/guide/global-computed.html) documentation to learn more about the <code class="inline-code-block">\$page</code> variable and other globally scoped variables.

:::tip Content Excerpt
Instead of defining the custom variable <code class="inline-code-block">preview</code> in the [YAML](https://yaml.org/) frontmatter blocks of Markdown files, [VuePress](https://v1.vuepress.vuejs.org/) provides the ability to use a [Content Excerpt](https://vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt) by adding a <code class="inline-code-block">&lt;!-- more --></code> comment to a Markdown file. Any content above the comment gets extracted and exposed as a globally scoped <code class="inline-code-block">$page.excerpt</code> variable. This variable can then be used to render the list of post pages with excerpts for each post just like our custom variable <code class="inline-code-block">preview</code>. I prefer to use the custom variable <code class="inline-code-block">preview</code> because the <code class="inline-code-block">&lt;!-- more --></code> comment takes all of the content above it which includes any HTML as opposed to using just the text of a post.
:::

### Displaying Post Previews

Now that we can access the post previews in the <code class="inline-code-block">\$pagination.pages</code> property, we're ready to render the post previews on the <span class="post-term-one">pagination</span> pages.

We're going to display the post previews as <code class="inline-code-block">p</code> tags which we'll place underneath the parent <code class="inline-code-block">div</code> tag of the <code class="inline-code-block">h2</code> tag.

To display the post previews we'll be using [Text Interpolation](https://v2.vuejs.org/v2/guide/syntax.html#Text) just like we did when displaying the post titles.

We can access the <code class="inline-code-block">preview</code> property on each page object in our loop by using <code class="inline-code-block">post.frontmatter.preview</code>.

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Displaying Post Previews">
```vue{10-12}
<template>
  <div>
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

### Entry Page HTML

After updating the <code class="inline-code-block">IndexPost.vue</code> file with the code above, if you navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) you should now see the post previews being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the entry page should now look something like this:

<code-group>
<code-block title="Entry Page HTML">
```html{10,18}
<body>
  <div id="app">
    <div id="global-layout">
      <div>
        <div>
          <div>
            <div>
              <h2> Example Post 1 </h2>
            </div>
            <p> Example Post 1 preview </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2> Example Post 2 </h2>
            </div>
            <p> Example Post 2 preview </p>
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

If you navigate to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/) you should now see one post preview being displayed with some styling which again is being provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the second page should now look something like this:

<code-group>
<code-block title="Page 2 HTML">
```html{10}
<body>
  <div id="app">
    <div id="global-layout">
      <div>
        <div>
          <div>
            <div>
              <h2> Example Post 3 </h2>
            </div>
            <p> Example Post 3 preview </p>
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

## IndexPost Styling

When viewing the <span class="post-term-one">pagination</span> pages you probably noticed the list of post pages stretches across the entire width of the page. This styling doesn't look too good, so we're going to update the styling by adding the following class <code class="inline-code-block">theme-default-content</code> to the outermost <code class="inline-code-block">div</code> tag.

### Adding theme-default-content

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Adding theme-default-content">
```vue{2}
<template>
  <div class="theme-default-content">
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

### theme-default-content Styles

The <code class="inline-code-block">theme-default-content</code> class is provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config) and provides the following styles:

<code-group>
<code-block title="theme-default-content Styles">
```css
.theme-default-content:not(.custom) {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

@media (max-width: 959px) {
  .theme-default-content:not(.custom) {
    padding: 2rem;
  }
}

@media (max-width: 419px) {
  .theme-default-content:not(.custom) {
    padding: 1.5rem;
  }
}
```
</code-block>
</code-group>

- <code class="inline-code-block">.theme-default-content:not(.custom)</code> is used to select tags that have a class of <code class="inline-code-block">theme-default-content</code> and that don't have a class of <code class="inline-code-block">custom</code> by using the <code class="inline-code-block">:not()</code> pseudo-class. This selector is defined by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config) since other pages can use the <code class="inline-code-block">theme-default-content</code> class along with a class of <code class="inline-code-block">custom</code> to apply different styles than the ones shown here. The homepage is an example of a page that uses the <code class="inline-code-block">theme-default-content</code> class along with a class of <code class="inline-code-block">custom</code> to apply different styles.
- <code class="inline-code-block">max-width: 740px;</code> sets the maximum width of the <code class="inline-code-block">div</code> tag to be <code class="inline-code-block">740px</code>. If the content is greater than the <code class="inline-code-block">max-width</code>, then the height of the <code class="inline-code-block">div</code> tag will automatically be changed. If the content is smaller than the <code class="inline-code-block">max-width</code>, then the <code class="inline-code-block">max-width</code> property has no effect.
- <code class="inline-code-block">margin: 0 auto;</code> sets the margins for the <code class="inline-code-block">div</code> tag by setting the top and bottom margins to be <code class="inline-code-block">0</code> and the left and right margins to a value of <code class="inline-code-block">auto</code>. The value of <code class="inline-code-block">auto</code> means the browser will automatically set the left and right margins to horizontally center the <code class="inline-code-block">div</code> tag.
- <code class="inline-code-block">padding: 2rem 2.5rem;</code> sets the padding for the <code class="inline-code-block">div</code> tag by setting the top and bottom paddings to be <code class="inline-code-block">2rem</code> and the left and right paddings to be <code class="inline-code-block">2.5rem</code>.
- <code class="inline-code-block">@media (max-width: 959px)</code> will apply the styles within it when the maximum width of the display area, e.g., the browser window is less than or equal to the provided value which in this case is <code class="inline-code-block">959px</code>.
- <code class="inline-code-block">padding: 2rem;</code> sets the padding for all of the sides of the <code class="inline-code-block">div</code> tag to be <code class="inline-code-block">2rem</code> when the width of the display area is less than or equal to <code class="inline-code-block">959px</code>.
- <code class="inline-code-block">@media (max-width: 419px)</code> will apply the styles within it when the maximum width of the display area is less than or equal to the provided value which in this case is <code class="inline-code-block">419px</code>.
- <code class="inline-code-block">padding: 1.5rem;</code> sets the padding for all of the sides of the <code class="inline-code-block">div</code> tag to be <code class="inline-code-block">1.5rem</code> when the width of the display area is less than or equal to <code class="inline-code-block">419px</code>.

If you have any questions about the CSS discussed above, then check out these resources:

- <span class="external-link-wrap">[CSS Tutorial](https://www.w3schools.com/css/)</span>
- <span class="external-link-wrap">[:not()](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)</span>
- <span class="external-link-wrap">[CSS max-width Property](https://www.w3schools.com/cssref/pr_dim_max-width.asp)</span>
- <span class="external-link-wrap">[When Does margin: 0 auto Center?](https://selleo.com/blog/when-does-margin-0-auto-center)</span>
- <span class="external-link-wrap">[CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)</span>

To view these styles in the browser you can navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) or to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/), inspect the browser, go to the <code class="inline-code-block">Elements</code> tab, locate the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-default-content</code>, and then go to the <code class="inline-code-block">Styles</code> tab.

:::tip Use in the Default Theme
The <code class="inline-code-block">theme-default-content</code> class is used on the global <code class="inline-code-block">Content</code> component within the <code class="inline-code-block">Page</code> and <code class="inline-code-block">Home</code> components provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config). If you look at the HTML on the homepage, you'll see the <code class="inline-code-block">theme-default-content</code> class being used on a <code class="inline-code-block">div</code> tag within the <code class="inline-code-block">main</code> tag with a class of <code class="inline-code-block">home</code>. We'll be discussing the global <code class="inline-code-block">Content</code> component, the <code class="inline-code-block">Page</code> component, and the <code class="inline-code-block">Home</code> component in more detail in future tutorials.
:::

## IndexPost Heading

We're now going to add a heading to the <span class="post-term-one">pagination</span> pages. This heading will be displayed on each <span class="post-term-one">pagination</span> page.

### Displaying the Heading

We're going to display the heading as an <code class="inline-code-block">h1</code> tag which we'll be adding as the first child tag of the outermost <code class="inline-code-block">div</code> tag.

The <code class="inline-code-block">IndexPost.vue</code> file should now look like this:

<code-group>
<code-block title="Displaying the Heading">
```vue{3}
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

### Entry Page HTML

After updating the <code class="inline-code-block">IndexPost.vue</code> file with the code above, if you navigate to the entry page [http://localhost:8080/posts/](http://localhost:8080/posts/) you should now see the heading being displayed with some styling provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the entry page should now look something like this:

<code-group>
<code-block title="Entry Page HTML">
```html{5}
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
        </div>
        <div>
          <div>
            <div>
              <h2> Example Post 2 </h2>
            </div>
            <p> Example Post 2 preview </p>
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

If you navigate to the second page [http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/) you should now see the heading being displayed with some styling which again is being provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config).

The HTML for the <code class="inline-code-block">body</code> tag for the second page should now look something like this:

<code-group>
<code-block title="Page 2 HTML">
```html{5}
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

In the next tutorial we'll be continuing the development of the <code class="inline-code-block">IndexPost</code> layout component by using the <code class="inline-code-block">$pagination</code> variable to add images to each post in the list of post pages.
