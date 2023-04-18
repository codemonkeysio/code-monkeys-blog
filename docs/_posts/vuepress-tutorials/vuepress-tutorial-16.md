---
title: VuePress Tutorial 16 - Pagination
date: 2022-09-30T20:07:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Ready to learn about the pagination feature provided by the blog plugin, then check out VuePress Tutorial 16 - Pagination! 🍌🐒
preview: Now it's time to learn more about the pagination feature and the Client API provided by @vuepress/plugin-blog...
img: vuepress-tutorials/tutorial-16/vuepress-tutorial-16-pagination-post.png
placeholder: vuepress-tutorials/tutorial-16/vuepress-tutorial-16-pagination-post-90w.png
alt: VuePress Tutorial 16 - Pagination Post Picture
linkImg: vuepress-tutorials/tutorial-16/vuepress-tutorial-16-pagination-post-link.png
linkImgAlt: VuePress Tutorial 16 - Pagination Image
videoURL: https://www.youtube-nocookie.com/embed/n07CETnl4I0
canonicalUrl: vuepress-tutorial-16/
---

::: slot header

# VuePress Tutorial 16 - Pagination

:::

## What We're Doing

Now it's time to learn more about the <span class="post-term-one">pagination</span> feature and the <span class="post-term-one">Client API</span> provided by [@vuepress/plugin-blog](https://vuepress-plugin-blog.billyyyyy3320.com/). In this tutorial we're going to begin the configuration of the <code class="inline-code-block">pagination</code> property as well as discuss the globally scoped <code class="inline-code-block">$pagination</code> variable provided by the <span class="post-term-one">Client API</span>.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-16</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-16) repository.

## Pagination Configuration

As mentioned in the previous tutorial <span class="post-term-one">pagination</span> allows you to break up the display of your posts into multiple pages. This provides easier navigation and a better user experience.

If you have any questions or want to learn more about the <span class="post-term-one">pagination</span> configuration, then check out the [pagination property](https://vuepress-plugin-blog.billyyyyy3320.com/config/#pagination) and [Pagination Config](https://vuepress-plugin-blog.billyyyyy3320.com/pagination/) documentation.

### pagination

We're going to begin the configuration by adding the <code class="inline-code-block">pagination</code> property which allows you to customize the <span class="post-term-one">pagination</span> of your posts.

The expected type is a <code class="inline-code-block">Pagination</code> object.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{58}
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
            pagination: {},
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

### lengthPerPage

Next, we'll add the <code class="inline-code-block">lengthPerPage</code> property which sets the maximum number of posts to display per page.

The expected type is a <code class="inline-code-block">number</code>, and the default value is <code class="inline-code-block">10</code>.

When the number of posts is greater than the <code class="inline-code-block">lengthPerPage</code> value, the blog plugin will generate the necessary pages to display all of the posts.

The blog plugin does this by adding <code class="inline-code-block">page/n/</code> onto the end of the entry page where <code class="inline-code-block">n</code> represents the number of the page.

So, the second page in the <span class="post-term-one">paginated</span> list of pages would be <code class="inline-code-block">page/2/</code>.

If you remember from the previous tutorial [VuePress Tutorial 15 - Blog Plugin](/vuepress-tutorial-15), the entry page is set by the <code class="inline-code-block">path</code> property which was given a value of <code class="inline-code-block">/posts/</code>.

This means in our case the blog plugin will generate pages with the following format: <code class="inline-code-block">/posts/page/n/</code> where <code class="inline-code-block">n</code> once again represents the number of the page.

We also created the following posts in the <code class="inline-code-block">_posts</code> directory in the previous tutorial:

- <code class="inline-code-block">2020-07-03-example-page-1.md</code>
- <code class="inline-code-block">2021-11-16-example-page-2.md</code>
- <code class="inline-code-block">2022-05-08-example-page-3.md</code>

Since we only have three posts and the default value for <code class="inline-code-block">lengthPerPage</code> is 10, the blog plugin won't generate any more pages. You can test this by attempting to navigate to the following page:

- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>

To demonstrate the generation of pages we can set the <code class="inline-code-block">lengthPerPage</code> to have a value of <code class="inline-code-block">2</code>.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{59}
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
            pagination: {
              lengthPerPage: 2,
            },
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

You should now be able to navigate to the following page:

- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>

:::tip Updating lengthPerPage
In a future tutorial we'll be updating the value of <code class="inline-code-block">lengthPerPage</code> to be <code class="inline-code-block">5</code> which is the current value being used in the blog.
:::

### layout

Now we're going to add the <code class="inline-code-block">layout</code> property which is used to specify which layout component to use for the <span class="post-term-one">pagination</span> pages except for the entry page. The entry page uses the <code class="inline-code-block">IndexPost</code> layout component which we set in the previous tutorial.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">'DirectoryPagination' || 'Layout'</code>.

Since we haven't created a <code class="inline-code-block">DirectoryPagination</code> layout component in the <code class="inline-code-block">layouts</code> directory, the <code class="inline-code-block">layout</code> property uses the other default value which is the <code class="inline-code-block">Layout</code> component. In our case the <code class="inline-code-block">Layout</code> component is provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

To see the difference between the layout of the entry page and the layout of the second page you can navigate to the following pages:

- <span class="external-link-wrap">[http://localhost:8080/posts/posts/](http://localhost:8080/posts/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>

If you want your <span class="post-term-one">pagination</span> pages except for the entry page to use a layout specifically designed for them, then you can create a <code class="inline-code-block">DirectoryPagination.vue</code> file inside of the <code class="inline-code-block">layouts</code> directory. Since <code class="inline-code-block">DirectoryPagination</code> is the default value for the <code class="inline-code-block">layout</code> property you won't need to explicitly set it in the <code class="inline-code-block">config.js</code> file.

We'll be using the same layout for the entry page and for the other <span class="post-term-one">pagination</span> pages, so we're going to provide a custom value of <code class="inline-code-block">IndexPost</code> to the <code class="inline-code-block">layout</code> property.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{60}
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
            pagination: {
              lengthPerPage: 2,
              layout: 'IndexPost',
            },
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

When navigating to the following page you should now see the <code class="inline-code-block">IndexPost</code> layout component being used instead of the <code class="inline-code-block">Layout</code> component:

- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>

Here's a table that summarizes the relationship between the <span class="post-term-one">pagination</span> and post page URLs the blog plugin builds and the layout components:

| URLs                                  | Layouts                |
| ------------------------------------- | ---------------------- |
| <code class="inline-code-block">/posts/</code>                                   | <code class="inline-code-block">IndexPost</code> (falls back to <code class="inline-code-block">Layout</code>) |
| <code class="inline-code-block">/posts/page/2/</code>                                   | <code class="inline-code-block">IndexPost</code> (falls back to <code class="inline-code-block">DirectoryPagination</code> or <code class="inline-code-block">Layout</code>) |
| <code class="inline-code-block">/2020/07/03/example-page-1/</code>      | <code class="inline-code-block">Post</code>                 |
| <code class="inline-code-block">/2021/11/16/example-page-2/</code> | <code class="inline-code-block">Post</code>                 |
| <code class="inline-code-block">/2022/05/08/example-page-3/</code>      | <code class="inline-code-block">Post</code>                 |

:::tip Post Pages Reminder
The post pages were given the URLs above by building customized <span class="post-term-one">permalinks</span> using the format specified by the <code class="inline-code-block">itemPermalink</code> property, and the layout components used by the post pages were set by the <code class="inline-code-block">itemLayout</code> property. Both of these properties can be found in the <code class="inline-code-block">config.js</code> file, and you can refer to the previous tutorial [VuePress Tutorial 15 - Blog Plugin](/vuepress-tutorial-15) if you have any questions about the post pages.
:::

### prevText

Now we'll add the <code class="inline-code-block">prevText</code> property which is used to specify the text for the previous links. The previous links are used to navigate to the previous page in the list of <span class="post-term-one">pagination</span> pages.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">'Prev'</code>.

We'll be using the default value of <code class="inline-code-block">'Prev'</code> for the <code class="inline-code-block">prevText</code> property, so we don't need to explicitly set the property. However, we're going to explicitly set it because this gives us a quick reference to the property and its value.

It's also possible to use a custom value for the <code class="inline-code-block">prevText</code> property, e.g., you could use a value of <code class="inline-code-block">Older</code> which you would have to explicitly set in the <code class="inline-code-block">config.js</code> file.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{61}
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
            pagination: {
              lengthPerPage: 2,
              layout: 'IndexPost',
              prevText: 'Prev',
            },
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

### nextText

We're now ready to add the <code class="inline-code-block">nextText</code> property which is used to specify the text for the next links. The next links are used to navigate to the next page in the list of <span class="post-term-one">pagination</span> pages.

The expected type is a <code class="inline-code-block">string</code>, and the default value is <code class="inline-code-block">'Next'</code>.

We'll be using the default value of <code class="inline-code-block">'Next'</code> for the <code class="inline-code-block">nextText</code> property, so we don't need to explicitly set the property. However, we're going to explicitly set it because this once again gives us a quick reference to the property and its value.

It's also possible to use a custom value for the <code class="inline-code-block">nextText</code> property, e.g., you could use a value of <code class="inline-code-block">Newer</code> which you would have to explicitly set in the <code class="inline-code-block">config.js</code> file.

Here's the updated <code class="inline-code-block">config.js</code> file:

<code-group>
<code-block title="config.js">
```js{62}
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
            pagination: {
              lengthPerPage: 2,
              layout: 'IndexPost',
              prevText: 'Prev',
              nextText: 'Next',
            },
          },
        ],
      },
    ],
  ],
}
```
</code-block>
</code-group>

## Client API

We're now going to take a look at how to use the <span class="post-term-one">Client API</span> to access the <span class="post-term-one">pagination</span> data in the layout components used by the blog plugin.

The <span class="post-term-one">Client API</span> uses globally scoped variables which means you can access these variables from any component as well as in Markdown files when using Vue. You can check out the [Using Vue in Markdown](https://v1.vuepress.vuejs.org/guide/using-vue.html) documentation if you're interested.

The <span class="post-term-one">Client API</span> provides the following globally scoped variables: <code class="inline-code-block">&#36;pagination</code>, <code class="inline-code-block">&#36;frontmatterKey</code>, and <code class="inline-code-block">&#36;service</code>. We'll be focusing on the <code class="inline-code-block">$pagination</code> variable in this tutorial.

If you have any questions or want to learn more about the <span class="post-term-one">Client API</span>, then check out the [Client API](https://vuepress-plugin-blog.billyyyyy3320.com/client-api/) documentation.

### $pagination

We're going to discuss each property the <code class="inline-code-block">$pagination</code> variable exposes as well as demonstrate how to access the properties in the layout components.

To get a better understanding of the <span class="post-term-one">pagination</span> data we're going to log each property to the console. The logging will be added to the <code class="inline-code-block">created</code> lifecycle hook in the <code class="inline-code-block">script</code> tag. To view the data in the console we're going to inspect the browser then go to the <code class="inline-code-block">Console</code> tab.

If you have questions about the <code class="inline-code-block">created</code> lifecycle hook, then check out this resources:

- <span class="external-link-wrap">[created](https://v2.vuejs.org/v2/api/#created)</span>
- <span class="external-link-wrap">[Introduction to Vue lifecycle hooks](https://blog.logrocket.com/introduction-to-vue-lifecycle-hooks/)</span>

:::warning null $paginaton
If you access the <code class="inline-code-block">&#36;pagination</code> variable at a route which doesn't match any classification, i.e., the route isn't a pagination page, then the value of <code class="inline-code-block">$pagination</code> will be <code class="inline-code-block">null</code>.

This means when developing layout components you should check if <code class="inline-code-block">$pagination</code> has a value of <code class="inline-code-block">null</code> before using the variable.
:::

### pages

The <code class="inline-code-block">$pagination.pages</code> property is an array of objects where each object contains data related to post pages that are accessible on the current <span class="post-term-one">pagination</span> page.

Since the <code class="inline-code-block">&#36;pagination.pages</code> property contains data related to post pages that are accessible on the current <span class="post-term-one">pagination</span> page, the data of <code class="inline-code-block">$pagination.pages</code> will be different depending on which <span class="post-term-one">pagination</span> page is being viewed.

To see the differences between the data, we're going to look at the entry page and the second page which in our case is also the last page.

Here are the links to both the entry page and the second page:

- <span class="external-link-wrap">[http://localhost:8080/posts/](http://localhost:8080/posts/)</span>
- <span class="external-link-wrap">[http://localhost:8080/posts/page/2/](http://localhost:8080/posts/page/2/)</span>

Let's add the code to log the <code class="inline-code-block">$pagination.pages</code> property in the layout component which in our case is being used by both the entry page and the second page, i.e., the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.pages">
```vue{6}
<template></template>

<script>
export default {
  created() {
    console.log('$pagination.pages', this.$pagination.pages)
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

:::tip Using Different Layout Components
If you're using different layout components for your entry page and the other <span class="post-term-one">pagination</span> pages, then you'll need to add the logging of the <code class="inline-code-block">$pagination.pages</code> property to both of the files.
:::

After adding the above code to the <code class="inline-code-block">IndexPost.vue</code> file and navigating to the entry page, the console should log an array of page objects with the following data:

<code-group>
<code-block title="Entry Page $pagination.pages">
```json
[
  {
    "frontmatter": {
      "layout": "Post",
      "permalink": "/:year/:month/:day/:slug"
    },
    "id": "posts",
    "key": "v-4e4f6ae5",
    "path": "/2020/07/03/example-page-1/",
    "pid": "posts",
    "regularPath": "/_posts/2020-07-03-example-page-1.html",
    "relativePath": "_posts/2020-07-03-example-page-1.md"
  },
  {
    "frontmatter": {
      "layout": "Post",
      "permalink": "/:year/:month/:day/:slug"
    },
    "id": "posts",
    "key": "v-60c9aaf7",
    "path": "/2021/11/16/example-page-2/",
    "pid": "posts",
    "regularPath": "/_posts/2021-11-16-example-page-2.html",
    "relativePath": "_posts/2021-11-16-example-page-2.md"
  }
]
```
</code-block>
</code-group>

Since the <code class="inline-code-block">lengthPerPage</code> property was given a value of <code class="inline-code-block">2</code> and we have three post pages, the <code class="inline-code-block">$pagination.pages</code> property for the entry page contains two page objects one for each post.

:::tip Formatting Differences
The log in the <code class="inline-code-block">Console</code> tab will be formatted differently than the <code class="inline-code-block">$pagination.pages</code> data shown here which was formatted using [JSON](https://www.json.org/json-en.html). The properties and values will be the same though.
:::

After navigating to the second page, the console should log an array consisting of one page object with the following data:

<code-group>
<code-block title="Second Page $pagination.pages">
```json
[
  {
    "frontmatter": {
      "layout": "Post",
      "permalink": "/:year/:month/:day/:slug"
    },
    "id": "posts",
    "key": "v-9dca171a",
    "path": "/2022/05/08/example-page-3/",
    "pid": "posts",
    "regularPath": "/_posts/2022-05-08-example-page-3.html",
    "relativePath": "_posts/2022-05-08-example-page-3.md"
  }
]
```
</code-block>
</code-group>

Now let's describe what each property in the <code class="inline-code-block">$pagination.pages</code> data represents:

- <code class="inline-code-block">frontmatter</code>: Contains the data present in the <span class="external-link-wrap">[frontmatter](https://v1.vuepress.vuejs.org/guide/frontmatter.html)</span> of the post pages.
- <code class="inline-code-block">layout</code>: Layout component used by the post pages which is set using the <code class="inline-code-block">itemLayout</code> property in the <code class="inline-code-block">config.js</code> file.
- <code class="inline-code-block">permalink</code>: Permalink format used for the post pages which is set using the <code class="inline-code-block">itemPermalink</code> property in the <code class="inline-code-block">config.js</code> file.
- <code class="inline-code-block">id</code>: Unique id for the current classifier which is set using the <code class="inline-code-block">id</code> property in the <code class="inline-code-block">config.js</code> file.
- <code class="inline-code-block">key</code>: Unique key generated for each page in the site.
- <code class="inline-code-block">path</code>: Path for the post page which uses a customized permalink built from the format specified by the <code class="inline-code-block">itemPermalink</code> property found in the <code class="inline-code-block">config.js</code> file.
- <code class="inline-code-block">pid</code>: Represents the pid for the current classifier which is set using the <code class="inline-code-block">id</code> property in the <code class="inline-code-block">config.js</code> file.
- <code class="inline-code-block">regularPath</code>: Default path for the post page which is built using the <code class="inline-code-block">:regular</code> template variable.
- <code class="inline-code-block">relativePath</code>: Location of the post page Markdown file relative to the documents directory which in our case is the <code class="inline-code-block">docs</code> directory.

:::tip The $page Variable
The page objects in the <code class="inline-code-block">&#36;pagination.pages</code> property are the same page objects found by logging the globally scoped <code class="inline-code-block">$page</code> variable in the <code class="inline-code-block">Post</code> layout component. After writing the code to log the <code class="inline-code-block">&#36;page</code> variable, you can view the log by navigating to a post page, e.g., [http://localhost:8080/2020/07/03/example-page-1/](http://localhost:8080/2020/07/03/example-page-1/).

To learn more about the <code class="inline-code-block">&#36;page</code> variable and other globally scoped variables you can take a look at the [Global Computed](https://v1.vuepress.vuejs.org/guide/global-computed.html) documentation.
:::

### length

The <code class="inline-code-block">$pagination.length</code> property is a <code class="inline-code-block">number</code> whose value is determined by the number of <span class="post-term-one">pagination</span> pages.

Let's add the code to log the <code class="inline-code-block">$pagination.length</code> property in the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.length">
```vue{6}
<template></template>

<script>
export default {
  created() {
    console.log('$pagination.length', this.$pagination.length)
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

If we navigate to either the entry page or the second page, the console should log a value of <code class="inline-code-block">2</code> since in our case there are a total of two <span class="post-term-one">pagination</span> pages.

### hasPrev

The <code class="inline-code-block">$pagination.hasPrev</code> property is a <code class="inline-code-block">boolean</code> which has a value of <code class="inline-code-block">true</code> when a previous <span class="post-term-one">pagination</span> page exists and a value of <code class="inline-code-block">false</code> when a previous <span class="post-term-one">pagination</span> page doesn't exist.

Let's add the code to log the <code class="inline-code-block">$pagination.hasPrev</code> property in the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.hasPrev">
```vue{6}
<template></template>

<script>
export default {
  created() {
    console.log('$pagination.hasPrev', this.$pagination.hasPrev)
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

If we navigate to the entry page, the console should log a value of <code class="inline-code-block">false</code>. This makes sense since the entry page is the first <span class="post-term-one">pagination</span> page which means there is no previous <span class="post-term-one">pagination</span> page.

If we navigate to the second page, the console should log a value of <code class="inline-code-block">true</code> which makes sense since the entry page is before the second page.

### prevLink

The <code class="inline-code-block">$pagination.prevLink</code> property is a <code class="inline-code-block">string</code> whose value is the previous <span class="post-term-one">pagination</span> page path if a previous <span class="post-term-one">pagination</span> page exists and a value of <code class="inline-code-block">null</code> when a previous <span class="post-term-one">pagination</span> page doesn't exist.

Let's add the code to log the <code class="inline-code-block">$pagination.prevLink</code> property in the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.prevLink">
```vue{6}
<template></template>

<script>
export default {
  created() {
    console.log('$pagination.prevLink', this.$pagination.prevLink)
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

If we navigate to the entry page, the console should log a value of <code class="inline-code-block">null</code>. This makes sense since the entry page is the first <span class="post-term-one">pagination</span> page which means there is no link to a previous <span class="post-term-one">pagination</span> page.

If we navigate to the second page, the console should log a value of <code class="inline-code-block">/posts/</code> which makes sense since the previous link before the second page is the entry page which has a path of <code class="inline-code-block">/posts/</code>.

### hasNext

The <code class="inline-code-block">$pagination.hasNext</code> property is a <code class="inline-code-block">boolean</code> which has a value of <code class="inline-code-block">true</code> when a <span class="post-term-one">pagination</span> page exists after the current <span class="post-term-one">pagination</span> page and a value of <code class="inline-code-block">false</code> when a <span class="post-term-one">pagination</span> page doesn't exist after the current <span class="post-term-one">pagination</span> page.

Let's add the code to log the <code class="inline-code-block">$pagination.hasNext</code> property in the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.hasNext">
```vue{6}
<template></template>

<script>
export default {
  created() {
    console.log('$pagination.hasNext', this.$pagination.hasNext)
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

If we navigate to the entry page, the console should log a value of <code class="inline-code-block">true</code>. This makes sense since there is a next page in the <span class="post-term-one">paginated</span> list of pages, i.e., the second page.

If we navigate to the second page, the console should log a value of <code class="inline-code-block">false</code> which makes sense since in our case there is no <span class="post-term-one">pagination</span> page after the second page.

### nextLink

The <code class="inline-code-block">$pagination.nextLink</code> property is a <code class="inline-code-block">string</code> whose value is the path of the next <span class="post-term-one">pagination</span> page if it exists and a value of <code class="inline-code-block">null</code> when the next <span class="post-term-one">pagination</span> page doesn't exist.

Let's add the code to log the <code class="inline-code-block">$pagination.nextLink</code> property in the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.nextLink">
```vue{6}
<template></template>

<script>
export default {
  created() {
    console.log('$pagination.nextLink', this.$pagination.nextLink)
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

If we navigate to the entry page, the console should log a value of <code class="inline-code-block">/posts/page/2/</code>. This makes sense since the entry page is the first <span class="post-term-one">pagination</span> page, and in our case there is a link to the next <span class="post-term-one">pagination</span> page, i.e., the second page.

If we navigate to the second page, the console should log a value of <code class="inline-code-block">null</code>. This makes sense since in our case the second page is the last page in the list of <span class="post-term-one">pagination</span> pages which means there is no link to the next <span class="post-term-one">pagination</span> page.

### getSpecificPageLink()

The <code class="inline-code-block">$pagination.getSpecificPageLink()</code> is a method that accepts a page number and returns the path of a <span class="post-term-one">pagination</span> page. The page numbers start at <code class="inline-code-block">0</code>, so to get the entry page path you need to provide a value of <code class="inline-code-block">0</code>. If an input is provided that is unable to return a path to a <span class="post-term-one">pagination</span> page, then an error is thrown which can be found in the <code class="inline-code-block">Console</code> tab.

Let's add the code to log the output of the <code class="inline-code-block">$pagination.getSpecificPageLink()</code> method in the <code class="inline-code-block">IndexPost.vue</code> file:

<code-group>
<code-block title="Logging $pagination.getSpecificPageLink()">
```vue{6-9}
<template></template>

<script>
export default {
  created() {
    console.log(
      '$pagination.getSpecificPageLink(0)',
      this.$pagination.getSpecificPageLink(0)
    )
  },
}
</script>

<style></style>
```
</code-block>
</code-group>

Since we used a page number of <code class="inline-code-block">0</code> in the code above, the console should log a value of <code class="inline-code-block">/posts/</code>. This makes sense since a value of <code class="inline-code-block">0</code> refers to the entry page which has a path of <code class="inline-code-block">/posts/</code>.

If we want to get the path of the second page, then we can use a value of <code class="inline-code-block">1</code> as the page number, so the console should log a value of <code class="inline-code-block">/posts/page/2/</code>. This makes sense since a value of <code class="inline-code-block">1</code> refers to the second page which has a path of <code class="inline-code-block">/posts/page/2/</code>.

## Next Steps

In the next tutorial we'll begin the development of the <code class="inline-code-block">IndexPost</code> layout component which will involve using the <code class="inline-code-block">$pagination</code> variable provided by the <span class="post-term-one">Client API</span>.
