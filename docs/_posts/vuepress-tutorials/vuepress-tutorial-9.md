---
title: VuePress Tutorial 9 - Styling the Homepage
date: 2022-08-31T01:45:30.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Want to learn how to style the homepage for your VuePress site, then check out VuePress Tutorial 9 - Styling the Homepage! 🍌🐒
cardDescription: The next step we'll be taking in developing the blog is learning how to override the palette.styl and index.styl files...
img: vuepress-tutorials/tutorial-9/vuepress-tutorial-9-styling-the-homepage-post.png
alt: VuePress Tutorial 9 - Styling the Homepage Post Picture
linkImg: vuepress-tutorials/tutorial-9/vuepress-tutorial-9-styling-the-homepage-post-link.png
linkImgAlt: VuePress Tutorial 9 - Styling the Homepage Image
canonicalUrl: vuepress-tutorial-9/
---

::: slot header

# VuePress Tutorial 9 - Styling the Homepage

:::

## Styling Files

The next step we'll be taking in developing the blog is learning how to override the <code class="inline-code-block">palette.styl</code> and <code class="inline-code-block">index.styl</code> files which will allow us to add our own global styling to the blog.

To do this we're going to first discuss what the <code class="inline-code-block">index.styl</code> and <code class="inline-code-block">palette.styl</code> files are used for. Then we'll take a look at the predefined styling files provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html), and we'll discuss the overriding priority of the files. Finally, we'll implement what we leaned about by styling the homepage of the blog.

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

### palette.styl

The <code class="inline-code-block">palette.styl</code> file is used to define global styling variables and override the predefined styling variables which in our case are being provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

Here are some of the predefined styling variables available to use and override in your site:

<code-group>
<code-block title="Predefined palette.styl File">
```stylus
// colors
$accentcolor = #3eaf7c
$textcolor = #2c3e50
$bordercolor = #eaecef
$codebgcolor = #282c34
$arrowbgcolor = #ccc
$badgetipcolor = #42b983
$badgewarningcolor = darken(#ffe564, 35%)
$badgeerrorcolor = #da5961

// layout
$navbarheight = 3.6rem
$sidebarwidth = 20rem
$contentwidth = 740px
$homepagewidth = 960px

// responsive breakpoints
$mqnarrow = 959px
$mqmobile = 719px
$mqmobilenarrow = 419px
```
</code-block>
</code-group>

We'll be using and overriding some of these predefined styling variables as well as defining our own styling variables as we develop the blog.

Here's a link to the full [palette.styl file](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl) if you're interested. You can also view the full file by navigating to <code class="inline-code-block">node_modules/@vuepress/core/lib/client/style/config.styl</code> in your project.

:::danger Only Define Variables in palette.styl
You should ONLY define variables in the <code class="inline-code-block">palette.styl</code> file because it will be imported at the end of the root Stylus config file. This means several files will use it, so once you define your styling variables here they will be duplicated multiple times
:::

### Creating the palette.styl File

Now that we have a good understanding of the <code class="inline-code-block">palette.styl</code> file, we're going to create the file by first creating a <code class="inline-code-block">styles</code> directory in the <code class="inline-code-block">theme</code> directory. The <code class="inline-code-block">docs</code> directory for your site should now look something like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   ├── `theme`
│   │   │   ├── `global-components`
│   │   │   ├── `layouts`
│   │   │   ├── `styles`
│   │   │   └── index.js
│   │   │
│   │   └── config.js
│   │
│   ├── `icons`
│   └── README.md
:::

After creating the <code class="inline-code-block">styles</code> directory, we can now create the <code class="inline-code-block">palette.styl</code> file inside of it like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   ├── `theme`
│   │   │   ├── `global-components`
│   │   │   ├── `layouts`
│   │   │   ├── `styles`
│   │   │   │   └── palette.styl
│   │   │   └── index.js
│   │   │
│   │   └── config.js
│   │
│   ├── `icons`
│   └── README.md
:::

:::tip Alternative Directory Structure
If you recall from the [VuePress Tutorial 4 - Directory Structure](/vuepress-tutorial-4/) post, you also have the option of creating your <code class="inline-code-block">palette.styl</code> file in the following location <code class="inline-code-block">.vuepress/styles/palette.styl</code>.
:::

We'll be updating the <code class="inline-code-block">palette.styl</code> file later on in this post, but first we're going to take a look at the <code class="inline-code-block">index.styl</code> file.

### index.styl

The <code class="inline-code-block">index.styl</code> file is used to add global styles as well as override predefined styles which in our case are being provided by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

Even though it's a [Stylus](https://stylus-lang.com/) file, you can also use normal <code class="inline-code-block">CSS</code> syntax if you prefer.

We won't discuss the predefined <code class="inline-code-block">index.styl</code> file in detail right now. It's just meant to be a reference in case you want to look for a specific style you want to override, or if you're interested in learning more about the predefined styling.

Here's the predefined <code class="inline-code-block">index.styl</code> which you can override and add your own styles to:

<code-group>
<code-block title="Predefined index.styl File">
```stylus
@require './config'
@require './code'
@require './custom-blocks'
@require './arrow'
@require './wrapper'
@require './toc'

html, body
  padding 0
  margin 0
  background-color #fff

body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 16px
  color $textColor

.page
  padding-left $sidebarWidth

.navbar
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color #fff
  box-sizing border-box
  border-bottom 1px solid $borderColor

.sidebar-mask
  position fixed
  z-index 9
  top 0
  left 0
  width 100vw
  height 100vh
  display none

.sidebar
  font-size 16px
  background-color #fff
  width $sidebarWidth
  position fixed
  z-index 10
  margin 0
  top $navbarHeight
  left 0
  bottom 0
  box-sizing border-box
  border-right 1px solid $borderColor
  overflow-y auto

{$contentClass}:not(.custom)
  @extend $wrapper
  > *:first-child
    margin-top $navbarHeight

  a:hover
    text-decoration underline

  p.demo
    padding 1rem 1.5rem
    border 1px solid #ddd
    border-radius 4px

  img
    max-width 100%

{$contentClass}.custom
  padding 0
  margin 0

  img
    max-width 100%

a
  font-weight 500
  color $accentColor
  text-decoration none

p a code
  font-weight 400
  color $accentColor

kbd
  background #eee
  border solid 0.15rem #ddd
  border-bottom solid 0.25rem #ddd
  border-radius 0.15rem
  padding 0 0.15em

blockquote
  font-size 1rem
  color #999;
  border-left .2rem solid #dfe2e5
  margin 1rem 0
  padding .25rem 0 .25rem 1rem

  & > p
    margin 0

ul, ol
  padding-left 1.2em

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25

  {$contentClass}:not(.custom) > &
    margin-top (0.5rem - $navbarHeight)
    padding-top ($navbarHeight + 1rem)
    margin-bottom 0

    &:first-child
      margin-top -1.5rem
      margin-bottom 1rem

      + p, + pre, + .custom-block
        margin-top 2rem

  &:focus .header-anchor,
  &:hover .header-anchor
    opacity: 1

h1
  font-size 2.2rem

h2
  font-size 1.65rem
  padding-bottom .3rem
  border-bottom 1px solid $borderColor

h3
  font-size 1.35rem

a.header-anchor
  font-size 0.85em
  float left
  margin-left -0.87em
  padding-right 0.23em
  margin-top 0.125em
  opacity 0

  &:focus,
  &:hover
    text-decoration none

code, kbd, .line-number
  font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace

p, ul, ol
  line-height 1.7

hr
  border 0
  border-top 1px solid $borderColor

table
  border-collapse collapse
  margin 1rem 0
  display: block
  overflow-x: auto

tr
  border-top 1px solid #dfe2e5

  &:nth-child(2n)
    background-color #f6f8fa

th, td
  border 1px solid #dfe2e5
  padding .6em 1em

.theme-container
  &.sidebar-open
    .sidebar-mask
      display: block

  &.no-navbar
    {$contentClass}:not(.custom) > h1, h2, h3, h4, h5, h6
      margin-top 1.5rem
      padding-top 0

    .sidebar
      top 0

@media (min-width: ($MQMobile + 1px))
  .theme-container.no-sidebar
    .sidebar
      display none

    .page
      padding-left 0

@require 'mobile.styl'
```
</code-block>
</code-group>

Here's a link to the [index.styl file](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/styles/index.styl) as well and the path to the file in your project <code class="inline-code-block">node_modules/@vuepress/theme-default/styles/index.styl</code>.

As we develop the blog we'll be using and overriding some of these predefined styles as well as defining our own styles.

:::tip Importing and Requiring Stylus and CSS Files
You may have noticed in the <code class="inline-code-block">index.styl</code> file that we're requiring other files, e.g., <code class="inline-code-block">@require './config'</code>. We'll discuss how to import and require <code class="inline-code-block">.styl</code> and <code class="inline-code-block">.css</code> files in a future post.
:::

### Creating the index.styl File

Now that we have a good understanding of the <code class="inline-code-block">index.styl</code> file, we're going to create the file for the blog inside of the <code class="inline-code-block">styles</code> directory that we previously created. The <code class="inline-code-block">docs</code> directory for your site should now look something like this:

::: vue
.
├── `docs`
│   ├── `.vuepress`
│   │   ├── `public`
│   │   ├── `theme`
│   │   │   ├── `global-components`
│   │   │   ├── `layouts`
│   │   │   ├── `styles`
│   │   │   │   ├── index.styl
│   │   │   │   └── palette.styl
│   │   │   └── index.js
│   │   │
│   │   └── config.js
│   │
│   ├── `icons`
│   └── README.md
:::

:::tip Alternative Directory Structure
If you recall from the [VuePress Tutorial 4 - Directory Structure](/vuepress-tutorial-4/) post, you also have the option of creating your <code class="inline-code-block">index.styl</code> file in the following location <code class="inline-code-block">.vuepress/styles/index.styl</code>.
:::

We'll be updating the <code class="inline-code-block">index.styl</code> file we just created later on in this post, but first we're going to take a look at the overriding priority.

## Overriding

Both the <code class="inline-code-block">palette.styl</code> and <code class="inline-code-block">index.styl</code> files follow a certain overriding priority.

### palette.styl

The user's <code class="inline-code-block">palette.styl</code> file which is located in <code class="inline-code-block">.vuepress/styles/palette.styl</code> has a higher priority than the theme's <code class="inline-code-block">palette.styl</code> file which is located in <code class="inline-code-block">theme/styles/palette.styl</code>. The theme's <code class="inline-code-block">palette.styl</code> file has a higher priority than any predefined <code class="inline-code-block">palette.styl</code> file which is located in <code class="inline-code-block">node_modules/@vuepress/core/lib/client/style/config.styl</code> in the case of the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

This means a theme can define it's own global styling variables and a user can override them as they see fit.

Here's an example of a global styling variable defined in each type of <code class="inline-code-block">palette.styl</code> file to make this concept clearer:

<code-group>
<code-block title="Predefined Variable">
```stylus
// node_modules/@vuepress/core/lib/client/style/config.styl
$accentcolor = #0099ff
```
</code-block>
</code-group>

<code-group>
<code-block title="Theme Variable">
```stylus
// theme/styles/palette.styl
$accentcolor = #cc99ff
```
</code-block>
</code-group>

<code-group>
<code-block title="User Variable">
```stylus
// .vuepress/styles/palette.styl
$accentcolor = #ccff33
```
</code-block>
</code-group>

Here, the final value for <code class="inline-code-block">$accentColor</code> will be <code class="inline-code-block">#ccff33</code>.

:::tip Absence of User palette.styl File
As we develop the blog we won't be using the user's <code class="inline-code-block">palette.styl</code> file located in <code class="inline-code-block">.vuepress/styles/palette.styl</code> We'll just be using the theme's <code class="inline-code-block">palette.styl</code> file located in <code class="inline-code-block">theme/styles/palette.styl</code> which will allow us to override any predefined variables.
:::

### index.styl

The same overriding priority applies to the <code class="inline-code-block">index.styl</code> file as well. So, a user's <code class="inline-code-block">index.styl</code> file which is located in <code class="inline-code-block">.vuepress/styles/index.styl</code> has a higher priority than the theme's <code class="inline-code-block">index.styl</code> file which is located in <code class="inline-code-block">theme/styles/index.styl</code>. The theme's <code class="inline-code-block">index.styl</code> file has a higher priority than any predefined <code class="inline-code-block">index.styl</code> file which is located in <code class="inline-code-block">node_modules/@vuepress/theme-default/styles/index.styl</code> in the case of the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html).

This means a theme can define it's own global styles and a user can override them as they see fit.

Both the user's <code class="inline-code-block">index.styl</code> file and the theme's <code class="inline-code-block">index.styl</code> file will get generated into the final <code class="inline-code-block">CSS</code> file used in the site, but the user's style gets generated later which is what gives it a higher priority than the theme's style.

Here's an example of a style defined in a user's <code class="inline-code-block">index.styl</code> and a style defined in a theme's <code class="inline-code-block">index.styl</code> file to make this concept clearer:

<code-group>
<code-block title="Theme Style">
```stylus
// theme/styles/index.styl
.example-style
  font-size: 1rem
```
</code-block>
</code-group>

<code-group>
<code-block title="User Style">
```stylus
// .vuepress/styles/index.styl
.example-style
  font-size: 1.25rem
```
</code-block>
</code-group>

Here's the final <code class="inline-code-block">CSS</code> file generated for the site:

<code-group>
<code-block title="Final CSS File">
```stylus
/* theme/styles/index.styl */
.example-style {
  font-size: 1rem;
}

/* .vuepress/styles/index.styl */
.example-style {
  font-size: 1.25rem;
}
```
</code-block>
</code-group>

Notice how the user's style comes after the theme's style in the final <code class="inline-code-block">CSS</code> file. This is what gives the user's style a higher priority than the theme's style.

:::tip Absence of User index.styl File
As we develop the blog we won't be using the user's <code class="inline-code-block">index.styl</code> file located in <code class="inline-code-block">.vuepress/styles/index.styl</code>. Instead we'll just be using the theme's <code class="inline-code-block">index.styl</code> file located in <code class="inline-code-block">theme/styles/index.styl</code> which will allow us to override any predefined styles.
:::

Now that we have a good understanding of how overriding works for both the <code class="inline-code-block">palette.styl</code> and <code class="inline-code-block">index.styl</code> files, we're now ready to override some predefined styling and add our own styling to the homepage of the blog.

## Homepage Styles

To start the homepage styling we'll be overriding and adding global styling variables to the <code class="inline-code-block">palette.styl</code> file. These global styling variables will then be used in the <code class="inline-code-block">index.styl</code> file as well as other files as we continue the development of the blog.

When overriding and adding styles to your site you can look at the predefined styling files to determine what properties you need to override. Along with looking at the predefined styling files you can also inspect your browser, go to the <code class="inline-code-block">Elements</code> tab, and then locate a tag or class that you want to override.

Be sure to add each block of code below one at a time to your project then view the changes in the browser to get a better understanding of what each block is responsible for.

If you're developing your own site, then you can check out these useful resources for coming up with color schemes and palettes for your site:

- <span class="external-link-wrap">[Coolors](https://coolors.co/)</span>
- <span class="external-link-wrap">[Canva Color Palettes](https://www.canva.com/colors/color-palettes/)</span>
- <span class="external-link-wrap">[Colors Tutorial](https://www.w3schools.com/colors/default.asp)</span>
- <span class="external-link-wrap">[HTML Color Picker](https://www.w3schools.com/colors/colors_picker.asp)</span>

If you don't feel comfortable with the CSS discussed below, then here's a good resource to go through [CSS Tutorial](https://www.w3schools.com/css/).

You can also view the <code class="inline-code-block">palette.styl</code> and <code class="inline-code-block">index.styl</code> files in the <code class="inline-code-block">tutorial-9</code> branch of the [code-monkeys-blog-tutorials](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-9) repository.

Now let's override and add some global styling variables to the <code class="inline-code-block">palette.styl</code> file.

### palette.styl

Here's what the <code class="inline-code-block">palette.styl</code> file looks like after overriding some predefined global styling variables and adding our own global styling variables:

<code-group>
<code-block title="palette.styl">
```stylus
$backgroundColor = #1f2229

$accentColor = #eb7132

$textColor = #e6e6e6

$borderColor = #754d34
$darkBorderColor = #16181d
```
</code-block>
</code-group>

- <code class="inline-code-block">$backgroundColor</code> is used as the background color of the homepage as well as the whole blog.
- <code class="inline-code-block">$accentColor</code> is used to color the action button on the homepage and to add styling to internal and external links.
- <code class="inline-code-block">$textColor</code> is used to color the text on the homepage as well as the navbar text and other text throughout the blog.
- <code class="inline-code-block">$borderColor</code> is used to style the border in the features section as well as the border in the navbar and other borders throughout the blog.
- <code class="inline-code-block">$darkBorderColor</code> will be used to style the border and box shadow around the main card on the homepage.

Now let's take a look at overriding and adding some styles to the <code class="inline-code-block">index.styl</code> file.

### index.styl

We're going to start by overriding the <code class="inline-code-block">background-color</code> in the <code class="inline-code-block">html</code> tag:

<code-group>
<code-block title="index.styl">
```stylus
html
  background-color: $backgroundColor
```
</code-block>
</code-group>

- Updates the <code class="inline-code-block">background-color</code> of the content below the <code class="inline-code-block">Footer</code> component to be the color specified by the <code class="inline-code-block">$backgroundColor</code> global styling variable we just added in the <code class="inline-code-block">palette.styl</code> file.

Next we'll override the <code class="inline-code-block">background-color</code> in the <code class="inline-code-block">body</code> tag:

<code-group>
<code-block title="index.styl">
```stylus{3-4}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
```
</code-block>
</code-group>

- Updates the <code class="inline-code-block">background-color</code> of the <code class="inline-code-block">body</code> of the site to be the color specified by the <code class="inline-code-block">$backgroundColor</code> global styling variable.

Now we're going to update the <code class="inline-code-block">padding</code> around the <code class="inline-code-block">main</code> tag which we'll select using the <code class="inline-code-block">home</code> class:

<code-group>
<code-block title="index.styl">
```stylus{5-6}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .home
      padding: 0
```
</code-block>
</code-group>

- Updates the <code class="inline-code-block">padding</code> of the <code class="inline-code-block">main</code> tag with a class of <code class="inline-code-block">home</code> to be zero on all sides.

We're now going to update the styles for the <code class="inline-code-block">hero</code> class which is given to the <code class="inline-code-block">header</code> tag inside of the <code class="inline-code-block">main</code> tag and contains the logo, the title, the description, and the action button.

<code-group>
<code-block title="index.styl">
```stylus{7-14}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .home
      padding: 0
      .hero
        margin-left: 2rem
        margin-right: 2rem
        border: 0.125rem solid $darkBorderColor
        box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
        border-radius: 5.625rem
        margin-bottom: 0.625rem
        padding: 2rem
```
</code-block>
</code-group>

- <code class="inline-code-block">margin-left: 2rem</code> adds a margin of <code class="inline-code-block">2rem</code> to the left of the <code class="inline-code-block">header</code> tag.
- <code class="inline-code-block">margin-right: 2rem</code> adds a margin of <code class="inline-code-block">2rem</code> to the right of the <code class="inline-code-block">header</code> tag.
- <code class="inline-code-block">border: 0.125rem solid &#36;darkBorderColor</code> adds a border around the <code class="inline-code-block">header</code> tag with a thickness of <code class="inline-code-block">0.125rem</code>, with a style of <code class="inline-code-block">solid</code>, and has a color of <code class="inline-code-block">$darkBorderColor</code> which was defined in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">box-shadow: 0 0.5rem 1rem 0 $darkBorderColor</code> adds a box shadow around the <code class="inline-code-block">header</code> tag.
- <code class="inline-code-block">border-radius: 5.625rem</code> adds a border radius to the <code class="inline-code-block">header</code> tag border.
- <code class="inline-code-block">margin-bottom: 0.625rem</code> adds a margin of <code class="inline-code-block">0.625rem</code> to the bottom of the <code class="inline-code-block">header</code> tag.
- <code class="inline-code-block">padding: 2rem</code> adds padding of <code class="inline-code-block">2rem</code> around the <code class="inline-code-block">header</code> tag.

Here's a resource for the [CSS box-shadow Property](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp) if you are interested in learning more about how it works.

Finally, we're going to update the styles for the <code class="inline-code-block">features</code> class which is given to the <code class="inline-code-block">div</code> tag inside of the <code class="inline-code-block">header</code> tag and contains the Learn, Code, and Crush text.

<code-group>
<code-block title="index.styl">
```stylus{15-23}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .home
      padding: 0
      .hero
        margin-left: 2rem
        margin-right: 2rem
        border: 0.125rem solid $darkBorderColor
        box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
        border-radius: 5.625rem
        margin-bottom: 0.625rem
        padding: 2rem
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

- <code class="inline-code-block">margin-left: 2rem</code> adds a margin of <code class="inline-code-block">2rem</code> to the left of the <code class="inline-code-block">div</code> tag.
- <code class="inline-code-block">margin-right: 2rem</code> adds a margin of <code class="inline-code-block">2rem</code> to the right of the <code class="inline-code-block">div</code> tag.
- <code class="inline-code-block">border-top: 0.125rem solid &#36;borderColor</code> adds a border to the top of the <code class="inline-code-block">div</code> tag with a thickness of <code class="inline-code-block">0.125rem</code>, with a style of <code class="inline-code-block">solid</code>, and has a color of <code class="inline-code-block">$borderColor</code> which was defined in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">border-bottom: 0.125rem solid &#36;borderColor</code> adds a border to the bottom of the <code class="inline-code-block">div</code> tag with a thickness of <code class="inline-code-block">0.125rem</code>, with a style of <code class="inline-code-block">solid</code>, and has a color of <code class="inline-code-block">$borderColor</code> which was defined in the <code class="inline-code-block">palette.styl</code> file.
- <code class="inline-code-block">text-align: center</code> horizontally aligns the text in each <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">feature</code> that are inside of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">features</code>.
- <code class="inline-code-block">font-size: 1.4rem</code> sets a font size of <code class="inline-code-block">1.4rem</code> for the <code class="inline-code-block">h2</code> tags that are inside of the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">feature</code>.

## Next Steps

You may have noticed the main card on the homepage is being covered by the navbar. In the next tutorial we'll be fixing this issue as well as applying some hover effects to the logo and to the box shadow around the main card on the homepage.
