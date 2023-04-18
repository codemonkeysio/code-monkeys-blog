---
title: VuePress Tutorial 14 - Dropdown Menu Styling
date: 2022-09-15T22:17:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to style the dropdown menu for your VuePress site, then check out VuePress Tutorial 14 - Dropdown Menu Styling! 🍌🐒
preview: If you hover over Posts in the navbar, the dropdown menu will appear. You'll notice the dropdown menu needs some styling...
img: vuepress-tutorials/tutorial-14/vuepress-tutorial-14-dropdown-menu-styling-post.png
placeholder: vuepress-tutorials/tutorial-14/vuepress-tutorial-14-dropdown-menu-styling-post-90w.png
alt: VuePress Tutorial 14 - Dropdown Menu Styling Post Picture
linkImg: vuepress-tutorials/tutorial-14/vuepress-tutorial-14-dropdown-menu-styling-post-link.png
linkImgAlt: VuePress Tutorial 14 - Dropdown Menu Styling Image
videoURL: 'https://www.youtube-nocookie.com/embed/FMoBn_QVzlk'
canonicalUrl: vuepress-tutorial-14/
---

::: slot header

# VuePress Tutorial 14 - Dropdown Menu Styling

:::

## What We're Doing

If you hover over Posts in the navbar, the dropdown menu will appear. You'll notice the dropdown menu needs some styling to make it match the rest of the blog. To implement the styling we'll be targeting these CSS classes <code class="inline-code-block">nav-dropdown</code> and <code class="inline-code-block">dropdown-item</code> which are provided by the [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html).

To locate these classes we're going to take a look at the HTML of the blog by inspecting the browser, going to the <code class="inline-code-block">Elements</code> tab, and then selecting an element on the page. After locating the classes, we'll be applying the styling to the <code class="inline-code-block">index.styl</code> file which will globally apply the styles. Finally, we'll be describing the styling in detail.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

When adding the styling updates be sure to add each block of code below one at a time to your project then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-14</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-14) repository.

## Force Dropdown Menu to Hover

Before we start styling the dropdown menu, we're going to force an element state of hover on the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">dropdown-wrapper</code>. This will ensure we can see the changes we're making to the dropdown menu even when we move the cursor away from the <code class="inline-code-block">dropdown-wrapper</code> class.

To do this we need to select the <code class="inline-code-block">dropdown-wrapper</code> class in the <code class="inline-code-block">Elements</code> tab.

Here's the location of the <code class="inline-code-block">dropdown-wrapper</code> class in the HTML:

<code-group>
<code-block title="Locating the dropdown-wrapper Class">
```html{13}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style="max-width: 2337px;">
            <div class="search-box">...</div>
            <nav class="nav-links can-hide">
              <div class="nav-item">...</div>
              <div class="nav-item">
                <div class="dropdown-wrapper">...</div>
              </div>
              <div class="nav-item">...</div>
              <div class="nav-item">...</div>
              <!---->
            </nav>
          </div>
        </header>
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main aria-labelledby="main-title" class="home">...</main>
      </div>
      <footer data-v-60ae214a class="footer">...</footer>
    </div>
    <div class="global-ui"></div>
  </div>
  ...
</body>
```
</code-block>
</code-group>

After selecting the <code class="inline-code-block">dropdown-wrapper</code> class in the <code class="inline-code-block">Elements</code> tab, we need to go to the <code class="inline-code-block">Styles</code> tab, click on the <code class="inline-code-block">:hov</code> tab, then force the element state of hover by checking the <code class="inline-code-block">:hover</code> checkbox.

The dropdown menu should now be shown even when the cursor is moved away from the <code class="inline-code-block">dropdown-wrapper</code> class.

## Nav Dropdown

We're now ready to begin styling the dropdown menu.

### HTML Location

We're going to begin the styling by locating where the <code class="inline-code-block">nav-dropdown</code> class is in the HTML:

<code-group>
<code-block title="Locating the nav-dropdown Class">
```html{16}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style="max-width: 2337px;">
            <div class="search-box">...</div>
            <nav class="nav-links can-hide">
              <div class="nav-item">...</div>
              <div class="nav-item">
                <div class="dropdown-wrapper">
                  <button type="button" aria-label="Posts" class="dropdown-title">...</button>
                  <button type="button" aria-label="Posts" class="mobile-dropdown-title">...</button>
                  <ul class="nav-dropdown" style="display: none;">...</ul>
                </div>
              </div>
              <div class="nav-item">...</div>
              <div class="nav-item">...</div>
              <!---->
            </nav>
          </div>
        </header>
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main aria-labelledby="main-title" class="home">...</main>
      </div>
      <footer data-v-60ae214a class="footer">...</footer>
    </div>
    <div class="global-ui"></div>
  </div>
  ...
</body>
```
</code-block>
</code-group>

From the HTML above we can see that the <code class="inline-code-block">nav-dropdown</code> class is attached to a <code class="inline-code-block">ul</code> tag and is a child of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">dropdown-wrapper</code> which is a child tag of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">nav-item</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">nav-dropdown</code> class inside of the <code class="inline-code-block">nav-item</code> class and apply the following styles:

<code-group>
<code-block title="Adding the nav-dropdown Class">
```stylus{34-38}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .theme-container
      min-height: calc(100vh - 10.3125rem)
      .navbar
         display: flex
         align-items: center
         height: 4.5rem
         background-color: $backgroundColor
         border-bottom-width: 0.125rem
        .site-name
          font-size: 1.5rem
        .links
          background-color: transparent
          height: 3rem
          align-items: center
          .search-box
            margin-right: 1.5rem
            input
              font-size: 1.125rem
              background-color: transparent
              border-width: 0.125rem
              color: $textColor
          .nav-links
            font-size: 1.25rem
            .nav-item:first-child
              margin-left: 0
            .nav-item
              margin-left: 1.75rem
              .dropdown-title
                font-size: 1.25rem
              .nav-dropdown
                text-align: center
                background-color: $backgroundColor
                border: 0.125rem solid $borderColor
                padding: 0.8rem 0
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
```
</code-block>
</code-group>

- <code class="inline-code-block">text-align: center</code> horizontally aligns the text in the dropdown menu.
- <code class="inline-code-block">background-color: &#36;backgroundColor</code> sets the background color of the dropdown menu to be <code class="inline-code-block">$backgroundColor</code> which is a global styling variable we set in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">border: 0.125rem solid &#36;borderColor</code> adds a border around the dropdown menu with a thickness of <code class="inline-code-block">0.125rem</code>, a style of <code class="inline-code-block">solid</code>, and a color of <code class="inline-code-block">$borderColor</code> which was defined in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">padding: 0.8rem 0</code> adds a padding of <code class="inline-code-block">0.8rem</code> to the top and bottom and <code class="inline-code-block">0</code> to the left and right of the dropdown menu.

## Dropdown Item

We're now ready to style the <code class="inline-code-block">dropdown-item</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">dropdown-item</code> class in the HTML:

<code-group>
<code-block title="Locating the dropdown-item Class">
```html{17-26}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style="max-width: 2337px;">
            <div class="search-box">...</div>
            <nav class="nav-links can-hide">
              <div class="nav-item">...</div>
              <div class="nav-item">
                <div class="dropdown-wrapper">
                  <button type="button" aria-label="Posts" class="dropdown-title">...</button>
                  <button type="button" aria-label="Posts" class="mobile-dropdown-title">...</button>
                  <ul class="nav-dropdown" style="display: none;">
                    <li class="dropdown-item">
                      ::marker
                      <!---->
                      <a href="/posts/" class="nav-link"> All Posts </a>
                    </li>
                    <li class="dropdown-item">
                      ::marker
                      <h4> By Topic </h4>
                      <ul class="dropdown-subitem-wrapper">...</ul>
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
        <div class="sidebar-mask"></div>
        <aside class="sidebar">...</aside>
        <main aria-labelledby="main-title" class="home">...</main>
      </div>
      <footer data-v-60ae214a class="footer">...</footer>
    </div>
    <div class="global-ui"></div>
  </div>
  ...
</body>
```
</code-block>
</code-group>

From the HTML above we can see that there are two <code class="inline-code-block">dropdown-item</code> classes. Each one is attached to an <code class="inline-code-block">li</code> tag and is a child of the <code class="inline-code-block">ul</code> tag with a class of <code class="inline-code-block">nav-dropdown</code>.

Also, notice the <code class="inline-code-block">h4</code> tag which is a child of the <code class="inline-code-block">li</code> tag with a class of <code class="inline-code-block">dropdown-item</code>. We'll be styling this <code class="inline-code-block">h4</code> tag as well.

### Styling

In the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">dropdown-item</code> class inside of the <code class="inline-code-block">nav-dropdown</code> class as well as nest the <code class="inline-code-block">h4</code> tag inside of the <code class="inline-code-block">dropdown-item</code> class and apply the following styles:

<code-group>
<code-block title="Adding the dropdown-item Class">
```stylus{39-44}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .theme-container
      min-height: calc(100vh - 10.3125rem)
      .navbar
         display: flex
         align-items: center
         height: 4.5rem
         background-color: $backgroundColor
         border-bottom-width: 0.125rem
        .site-name
          font-size: 1.5rem
        .links
          background-color: transparent
          height: 3rem
          align-items: center
          .search-box
            margin-right: 1.5rem
            input
              font-size: 1.125rem
              background-color: transparent
              border-width: 0.125rem
              color: $textColor
          .nav-links
            font-size: 1.25rem
            .nav-item:first-child
              margin-left: 0
            .nav-item
              margin-left: 1.75rem
              .dropdown-title
                font-size: 1.25rem
              .nav-dropdown
                text-align: center
                background-color: $backgroundColor
                border: 0.125rem solid $borderColor
                padding: 0.8rem 0
                .dropdown-item
                  padding-bottom: 0.4rem
                  h4
                    border-top: 0.0625rem solid $borderColor
                    cursor: text
                    margin: 0.45rem 0.375rem 0
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
```
</code-block>
</code-group>

- <code class="inline-code-block">padding-bottom: 0.4rem</code> adds a padding of <code class="inline-code-block">0.4rem</code> to the bottom of each of the dropdown items.
- <code class="inline-code-block">border-top: 0.0625rem solid &#36;borderColor</code> adds a border to the top of the <code class="inline-code-block">h4</code> tag, i.e., the By Topics text with a thickness of <code class="inline-code-block">0.0625rem</code>, a style of <code class="inline-code-block">solid</code>, and a color of <code class="inline-code-block">$borderColor</code> which was defined in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">cursor: text</code> sets the cursor when pointing over the <code class="inline-code-block">h4</code> tag, i.e., the By Topics text to be the text cursor which indicates the text can be selected and is typically in the shape of an I-beam.
- <code class="inline-code-block">margin: 0.45rem 0.375rem 0</code> adds a margin of <code class="inline-code-block">0.45rem</code> to the top, <code class="inline-code-block">0.375rem</code> to the left and right, and <code class="inline-code-block">0</code> to the bottom of the <code class="inline-code-block">h4</code> tag, i.e., the By Topics text.

If you have questions about the CSS discussed above, then check out these resources:

- <span class="external-link-wrap">[CSS Tutorial](https://www.w3schools.com/css/default.asp)</span>
- <span class="external-link-wrap">[cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)</span>

## Next Steps

In the next tutorial we'll be installing and beginning the process of configuring the [@vuepress/plugin-blog](https://vuepress-plugin-blog.billyyyyy3320.com/).
