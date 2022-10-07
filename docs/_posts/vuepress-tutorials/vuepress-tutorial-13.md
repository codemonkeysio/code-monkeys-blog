---
title: VuePress Tutorial 13 - Navbar Styling
date: 2022-09-11T17:11:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to style the navbar for your VuePress site, then check out VuePress Tutorial 13 - Navbar Styling! 🍌🐒
preview: Currently, the navbar is not looking too good, so in this tutorial we're going to begin fixing that by adding some styling...
img: vuepress-tutorials/tutorial-13/vuepress-tutorial-13-navbar-styling-post.png
alt: VuePress Tutorial 13 - Navbar Styling Post Picture
linkImg: vuepress-tutorials/tutorial-13/vuepress-tutorial-13-navbar-styling-post-link.png
linkImgAlt: VuePress Tutorial 13 - Navbar Styling Image
videoURL: 'https://www.youtube-nocookie.com/embed/q4CfOgerFuw'
canonicalUrl: vuepress-tutorial-13/
---

::: slot header

# VuePress Tutorial 13 - Navbar Styling

:::

## What We're Doing

Currently, the navbar is not looking too good, so in this tutorial we're going to begin fixing that by adding some styling. We're going to be targeting these CSS classes provided by the [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html): <code class="inline-code-block">navbar</code>, <code class="inline-code-block">site-name</code>, <code class="inline-code-block">links</code>, <code class="inline-code-block">search-box</code>, <code class="inline-code-block">nav-links</code>, <code class="inline-code-block">nav-item</code>, and <code class="inline-code-block">dropdown-title</code>.

To locate these classes we're going to take a look at the HTML of the blog by inspecting the browser, going to the <code class="inline-code-block">Elements</code> tab, and then selecting an element on the page. After locating the classes, we'll be applying the styling to the <code class="inline-code-block">index.styl</code> file which will globally apply the styles. Finally, we'll be describing the styling in detail.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

When adding the styling updates be sure to add each block of code below one at a time to your project then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-13</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-13) repository.

## Navbar Class

Alright, now we're ready to begin styling the navbar.

### HTML Location

We're going to start by locating where the <code class="inline-code-block">navbar</code> class is in the HTML:

<code-group>
<code-block title="Locating the navbar Class">
```html{5}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">...</header>
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

From the HTML above we can see that the <code class="inline-code-block">navbar</code> class is attached to a <code class="inline-code-block">header</code> tag and is a child of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">theme-container</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">navbar</code> class inside of the <code class="inline-code-block">theme-container</code> class and apply the following styles:

<code-group>
<code-block title="Adding the navbar Class">
```stylus{7-12}
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

- <code class="inline-code-block">display: flex</code> defines a flex container for all of the direct children of the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">navbar</code>.
- <code class="inline-code-block">align-items: center</code> vertically centers the flex items, i.e., the direct children of the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">navbar</code>.
- <code class="inline-code-block">height: 4.5rem</code> sets the height of the navbar to be <code class="inline-code-block">4.5rem</code>.
- <code class="inline-code-block">background-color: &#36;backgroundColor</code> sets the background color of the navbar to be <code class="inline-code-block">$backgroundColor</code> which is a global styling variable we set in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">border-bottom-width: 0.125rem</code> sets the border bottom width of the navbar to be <code class="inline-code-block">0.125rem</code>.

## Site Name Class

After locating and styling the <code class="inline-code-block">navbar</code> class, we're ready to move on to the <code class="inline-code-block">site-name</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">site-name</code> class in the HTML:

<code-group>
<code-block title="Locating the site-name Class">
```html{9}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">
            <img src="/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png" alt="Code Monkeys" class="logo">
            <span class="site-name can-hide">Code Monkeys</span>
          </a>
          <div class="links" style>...</div>
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

From the HTML above we can see that the <code class="inline-code-block">site-name</code> class is attached to a <code class="inline-code-block">span</code> tag and is a child of the <code class="inline-code-block">a</code> tag with a class of <code class="inline-code-block">home-link</code> which is a child of the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">navbar</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">site-name</code> class inside of the <code class="inline-code-block">navbar</code> class and apply the following style:

<code-group>
<code-block title="Adding the site-name Class">
```stylus{13-14}
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

- <code class="inline-code-block">font-size: 1.5rem</code> sets the font size of the site name in the navbar, i.e., Code Monkeys to be <code class="inline-code-block">1.5rem</code>.

## Links Class

We're now ready to style the <code class="inline-code-block">links</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">links</code> class in the HTML:

<code-group>
<code-block title="Locating the links Class">
```html{8}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style>...</div>
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

From the HTML above we can see that the <code class="inline-code-block">links</code> class is attached to a <code class="inline-code-block">div</code> tag and is a child of the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">navbar</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">links</code> class inside of the <code class="inline-code-block">navbar</code> class and apply the following styles:

<code-group>
<code-block title="Adding the links Class">
```stylus{15-18}
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

- <code class="inline-code-block">background-color: transparent</code> sets the background color behind the search box and of the links on the right side of the navbar to be <code class="inline-code-block">transparent</code>. This has the effect of showing the background color set in the <code class="inline-code-block">navbar</code> class since it's no longer being covered by the background color set in the <code class="inline-code-block">links</code> class.
- <code class="inline-code-block">height: 3rem</code> sets the height of the <code class="inline-code-block">div</code> tag which contains the search box and the links on the right side of the navbar to be <code class="inline-code-block">3rem</code>.
- <code class="inline-code-block">align-items: center</code> vertically centers the flex items, i.e., the direct children of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">links</code> which was given a style of <code class="inline-code-block">display: flex</code> by the <span class="external-link-wrap">[default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html)</span>.

## Search Box Class

We've finished styling the <code class="inline-code-block">links</code> class, so let's begin the styling of the <code class="inline-code-block">search-box</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">search-box</code> class in the HTML:

<code-group>
<code-block title="Locating the search-box Class">
```html{9}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style>
            <div class="search-box">...</div>
            <nav class="nav-links can-hide">...</nav>
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

From the HTML above we can see that the <code class="inline-code-block">search-box</code> class is attached to a <code class="inline-code-block">div</code> tag and is a child of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">links</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">search-box</code> class inside of the <code class="inline-code-block">links</code> class and apply the following styles:

<code-group>
<code-block title="Adding the search-box Class">
```stylus{19-25}
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

- <code class="inline-code-block">margin-right: 1.5rem</code> adds a margin of <code class="inline-code-block">1.5rem</code> to the right of the search box.
- <code class="inline-code-block">font-size: 1.125rem</code> sets the font size of the text in the <code class="inline-code-block">input</code> tag to be <code class="inline-code-block">1.125rem</code>.
- <code class="inline-code-block">background-color: transparent</code> sets the background color of the <code class="inline-code-block">input</code> tag to be <code class="inline-code-block">transparent</code>. This has the effect of showing the background color set in the <code class="inline-code-block">navbar</code> class since it's no longer being covered by the background color set in the <code class="inline-code-block">input</code> tag.
- <code class="inline-code-block">border-width: 0.125rem</code> sets the width of the border around the <code class="inline-code-block">input</code> tag to be <code class="inline-code-block">0.125rem</code>.
- <code class="inline-code-block">color: &#36;textColor</code> sets the color of the text in the <code class="inline-code-block">input</code> tag to be <code class="inline-code-block">$textColor</code> which is a global styling variable we set in the <code class="inline-code-block">palette.styl</code> file.

:::tip Viewing the font-size and color Styles
To see the <code class="inline-code-block">font-size</code> and <code class="inline-code-block">color</code> styles in action try typing some text in the search box. Once you click in the search box, notice the border gets its color set to the <code class="inline-code-block">$accentColor</code> which is a global styling variable we set in the <code class="inline-code-block">palette.styl</code> file. This effect is provided by the [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html) and uses the <code class="inline-code-block">focus</code> pseudo-class.
:::

## Nav Links Class

Now that we have styled the <code class="inline-code-block">search-box</code> class and its child <code class="inline-code-block">input</code> tag, we're ready to move on to the styling of the <code class="inline-code-block">nav-links</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">nav-links</code> class in the HTML:

<code-group>
<code-block title="Locating the nav-links Class">
```html{10}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style>
            <div class="search-box">...</div>
            <nav class="nav-links can-hide">...</nav>
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

From the HTML above we can see that the <code class="inline-code-block">nav-links</code> class is attached to a <code class="inline-code-block">nav</code> tag and is a child of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">links</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">nav-links</code> class inside of the <code class="inline-code-block">links</code> class and apply the following style:

<code-group>
<code-block title="Adding the nav-links Class">
```stylus{26-27}
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

- <code class="inline-code-block">font-size: 1.25rem</code> sets the font size of the nav links on the right side of the navbar to be <code class="inline-code-block">1.25rem</code>.

## Nav Item Class

We're now ready to style the <code class="inline-code-block">nav-item</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">nav-item</code> class in the HTML:

<code-group>
<code-block title="Locating the nav-item Class">
```html{11-14}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style>
            <div class="search-box">...</div>
            <nav class="nav-links can-hide">
              <div class="nav-item">...</div>
              <div class="nav-item">...</div>
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

From the HTML above we can see that there are four <code class="inline-code-block">nav-item</code> classes. Each one is attached to a <code class="inline-code-block">div</code> tag and is a child of the <code class="inline-code-block">nav</code> tag with a class of <code class="inline-code-block">nav-links</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">nav-item</code> class inside of the <code class="inline-code-block">nav-links</code> class and apply the following styles:

<code-group>
<code-block title="Adding the nav-item Class">
```stylus{28-31}
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

- <code class="inline-code-block">.nav-item:first-child</code> applies the <code class="inline-code-block">first-child</code> pseudo-class to the <code class="inline-code-block">.nav-item</code> selector. The <code class="inline-code-block">first-child</code> pseudo-class applies the styles defined inside of it to the first element among a group of sibling elements which in our case is the first <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">nav-item</code> in the group of sibling <code class="inline-code-block">div</code> tags that have the class of <code class="inline-code-block">nav-item</code>.
- <code class="inline-code-block">margin-left: 0</code> adds a margin of <code class="inline-code-block">0</code> to the left of the first <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">nav-item</code> within the group of sibling <code class="inline-code-block">div</code> tags that have a class of <code class="inline-code-block">nav-item</code>.
- <code class="inline-code-block">margin-left: 1.75rem</code> adds a margin of <code class="inline-code-block">1.75rem</code> to the left of all of the <code class="inline-code-block">div</code> tags that have a class of <code class="inline-code-block">nav-item</code> except for the first one since that is being styled by the <code class="inline-code-block">first-child</code> pseudo-class.

## Dropdown Title Class

After finishing the styling for the <code class="inline-code-block">nav-item</code> class, we're now ready to move on to the styling of the <code class="inline-code-block">dropdown-title</code> class.

### HTML Location

Here's the location of the <code class="inline-code-block">dropdown-title</code> class in the HTML:

<code-group>
<code-block title="Locating the dropdown-title Class">
```html{14}
<body>
 <div id="app">
    <div id="global-layout">
      <div class="theme-container no-sidebar">
        <header class="navbar">
          <div class="sidebar-button">...</div>
          <a href="/" aria-current="page" class="home-link router-link-exact-active router-link-active">...</a>
          <div class="links" style>
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

From the HTML above we can see that the <code class="inline-code-block">dropdown-title</code> class is attached to a <code class="inline-code-block">button</code> tag and is a child of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">dropdown-wrapper</code> which is a child tag of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">nav-item</code>.

### Styling

This means in the <code class="inline-code-block">index.styl</code> file we can nest the <code class="inline-code-block">dropdown-title</code> class inside of the <code class="inline-code-block">nav-item</code> class and apply the following style:

<code-group>
<code-block title="Adding the nav-item Class">
```stylus{32-33}
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

- <code class="inline-code-block">font-size: 1.25rem</code> sets the font size of the dropdown title, i.e., Posts to be <code class="inline-code-block">1.25rem</code>.

If you have questions about the CSS discussed above, then check out these resources:

- <span class="external-link-wrap">[CSS Tutorial](https://www.w3schools.com/css/default.asp)</span>
- <span class="external-link-wrap">[Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)</span>
- <span class="external-link-wrap">[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)</span>
- <span class="external-link-wrap">[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)</span>
- <span class="external-link-wrap">[:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)</span>
- <span class="external-link-wrap">[:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)</span>

## Next Steps

In the next tutorial we'll be styling the dropdown menu in the navbar by updating the background color, border, padding, etc. 
