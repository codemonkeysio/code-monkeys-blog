---
title: VuePress Tutorial 11 - Sticky Footer
date: 2022-09-05T20:04:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to make your footer stick to the bottom of the page, then check out VuePress Tutorial 11 - Sticky Footer! 🍌🐒
cardDescription: We're going to continue styling the blog by making the Footer component we created in VuePress Tutorial 8 - Custom Footer into...
img: vuepress-tutorials/tutorial-11/vuepress-tutorial-11-sticky-footer-post.png
alt: VuePress Tutorial 11 - Sticky Footer Post Picture
linkImg: vuepress-tutorials/tutorial-11/vuepress-tutorial-11-sticky-footer-post-link.png
linkImgAlt: VuePress Tutorial 11 - Sticky Footer Image
canonicalUrl: vuepress-tutorial-11/
---

::: slot header

# VuePress Tutorial 11 - Sticky Footer

:::

## What We're Doing

We're going to continue styling the blog by making the <code class="inline-code-block">Footer</code> component we created in [VuePress Tutorial 8 - Custom Footer](/vuepress-tutorial-8) into a sticky footer. We were going to be adding a highlight effect when hovering over the [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) icons in this tutorial as well, but the process is a little more involved than I remembered. So, we're going to be adding the highlight effect when hovering in the next tutorial.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-11</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-11) repository.

Now let's get started by discussing what a sticky footer is.

## Sticky Footer

A sticky footer adheres or <span class="post-term-one">sticks</span> to the bottom of the browser window assuming there isn't enough content on the page to push the footer lower like on this blog post for example. If the content on the page is short like on the [homepage](/), then the footer will still stick to the bottom of the page instead of appearing directly below the content above it.

There are multiple ways to add a sticky footer to your site, but we're only going to discuss how to use the CSS <code class="inline-code-block">calc()</code> function. If you're interested in learning about the other ways of adding a sticky footer, then check out [Sticky Footer, Five Ways](https://css-tricks.com/couple-takes-sticky-footer/).

Here's what the <code class="inline-code-block">index.styl</code> file looks like after adding the sticky footer styling:

<code-group>
<code-block title="index.styl">
```stylus{5-6}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .theme-container
      min-height: calc(100vh - 10.3125rem)
      .home
        padding: 8rem 0 0
        .hero
          margin-left: 2rem
          margin-right: 2rem
          border: 0.125rem solid $darkBorderColor
          box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
          transition: box-shadow 0.2s
          border-radius: 5.625rem
          margin-bottom: 0.625rem
          background-image: radial-gradient(circle at center center, #2c303a, $backgroundColor)
          padding: 2rem
          img
            transition: transform 0.2s
        .hero:hover
          box-shadow: 0.125rem 0.5rem 1rem 0.125rem #0b0c0f
          img
            transform: scale(1.1)
        .features
          margin-left: 2rem
          margin-right: 2rem
          border-top: 0.125rem solid $borderColor
          border-bottom: 0.125rem solid $borderColor
          .feature
            text-align: center
            h2
              font-size: 1.4rem
````
</code-block>
</code-group>

Here we added <code class="inline-code-block">min-height: calc(100vh - 10.3125rem)</code> to a <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-container</code>.

If you inspect the browser and go to the <code class="inline-code-block">Elements</code> tab, you can see where the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-container</code> is in the HTML of the blog.

<code-group>
<code-block title="HTML Showing the theme-container Class">
```html{4}
<body>
  <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">...</div>
      <footer data-v-60ae214a class="footer">...</footer>
    </div>
    <div class="global-ui"></div>
  </div>
  ...
</body>
```
</code-block>
</code-group>

The <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-container</code> contains all of the content of the blog except for the <code class="inline-code-block">footer</code> tag.

So, here we're using <code class="inline-code-block">min-height: calc(100vh - 10.3125rem)</code> to set the minimum height of the content inside of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-container</code> to be <code class="inline-code-block">100vh</code> minus <code class="inline-code-block">10.3125rem</code> which is the height of the <code class="inline-code-block">Footer</code> component including the top and bottom padding.

The unit of <code class="inline-code-block">vh</code> is relative to 1% of the height of the viewport which is the browser window size, so <code class="inline-code-block">100vh</code> is 100% of the height of the viewport.

So, when we subtract <code class="inline-code-block">10.3125rem</code> from <code class="inline-code-block">100vh</code>, we're subtracting the height of the <code class="inline-code-block">Footer</code> component from 100% of the viewport height.

This means the minimum height of the content inside of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-container</code> will be the entire homepage height minus the height of the <code class="inline-code-block">Footer</code> component.

After setting this style, notice how the <code class="inline-code-block">Footer</code> component is now pushed to the bottom of the page. This is how we get the <code class="inline-code-block">Footer</code> component to stick to the bottom of the page.

Also, since we added this style to the <code class="inline-code-block">index.styl</code> file, this style will be applied globally to the blog which is fine since the <code class="inline-code-block">Footer</code> component will be used on every page in the blog.

:::tip Using a Fixed Footer Size
We're using a fixed size for the height of the <code class="inline-code-block">Footer</code> component which means if we change the height later on we'll have to update this value. In a future tutorial we'll be changing the height, so we'll have to update this value. If you prefer to not update this value whenever you update the height of the <code class="inline-code-block">Footer</code> component, then it may be worth looking into implementing the <code class="inline-code-block">flexbox</code> or <code class="inline-code-block">grid</code> methods for adding a sticky footer which you can find in the [Sticky Footer, Five Ways](https://css-tricks.com/couple-takes-sticky-footer/) post.
:::

If you have questions about the CSS discussed above, then check out these resources:

- <span class="external-link-wrap">[CSS min-height Property](https://www.w3schools.com/cssref/pr_dim_min-height.asp)</span>
- <span class="external-link-wrap">[calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)</span>
- <span class="external-link-wrap">[CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)</span>

## Next Steps

As mentioned in the beginning of this post, in the next tutorial we're going to be adding a highlight effect when hovering over the [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) icons.
