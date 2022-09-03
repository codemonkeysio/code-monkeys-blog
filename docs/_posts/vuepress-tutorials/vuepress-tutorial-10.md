---
title: VuePress Tutorial 10 - Homepage Styling Part 2
date: 2022-09-02T21:56:00.000Z
topic: VuePress
description: Hey fellow Code Monkeys!!! 🐵 Ready to continue the homepage styling for your VuePress site, then check out VuePress Tutorial 10 - Homepage Styling Part 2! 🍌🐒
cardDescription: In the previous tutorial we began the process of styling the homepage. By the end of the tutorial we overrode the global...
img: vuepress-tutorials/tutorial-10/vuepress-tutorial-10-homepage-styling-part-2-post.png
alt: VuePress Tutorial 10 - Homepage Styling Part 2 Post Picture
linkImg: vuepress-tutorials/tutorial-10/vuepress-tutorial-10-homepage-styling-part-2-post-link.png
linkImgAlt: VuePress Tutorial 10 - Homepage Styling Part 2 Image
videoURL: 'https://www.youtube-nocookie.com/embed/yIrI2BC_UVY'
canonicalUrl: vuepress-tutorial-10/
---

::: slot header

# VuePress Tutorial 10 - Homepage Styling Part 2

:::

## Homepage Styling Recap

In the previous tutorial we began the process of styling the homepage. By the end of the tutorial we overrode the global styling variables for the <code class="inline-code-block">&#36;accentColor</code>, <code class="inline-code-block">&#36;textColor</code>, and <code class="inline-code-block">$borderColor</code> in the <code class="inline-code-block">palette.styl</code> file. The colors of these variables then get applied instead of the colors originally set by the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html). These variables can also be used to style other elements of the blog as well.

We also added our own global styling variables to the <code class="inline-code-block">palette.styl</code> file which included the <code class="inline-code-block">&#36;backgroundColor</code> and the <code class="inline-code-block">$darkBorderColor</code>. These variables were then used in the <code class="inline-code-block">index.styl</code> file.

In the <code class="inline-code-block">index.styl</code> file we used some of the global styling variables along with overriding and adding our own global styling to style the <code class="inline-code-block">background-color</code> of the blog, the <code class="inline-code-block">main</code> tag with a class of <code class="inline-code-block">home</code>, the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">hero</code>, and the <code class="inline-code-block">div</code> tag with a class of <code class="inline-code-block">features</code>.

After overriding and adding these styles to the blog, the main card on the homepage was being covered by the navbar, so in this tutorial we'll be fixing this issue. Then we'll be adding some hover effects to the main card logo and to the box shadow around the main card. Finally, we'll be adding a radial gradient background to the main card.

## Homepage Styling Updates

Make sure you start the local development server which should be running at [http://localhost:8080/](http://localhost:8080/) to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.

When adding the styling updates be sure to add each block of code below one at a time to your project then view the changes in the browser to get a better understanding of what each block is responsible for.

You can view all of the code in this tutorial by going to the <code class="inline-code-block">tutorial-10</code> branch of the [code-monkeys-blog-repository](https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-10)

### Fixing the Main Card Placement

We'll start by fixing the issue of the main card being covered by the navbar. To fix this issue we just need to update the <code class="inline-code-block">padding</code> in the <code class="inline-code-block">home</code> class:

<code-group>
<code-block title="index.styl">
```stylus{6}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .home
      padding: 8rem 0 0
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

- <code class="inline-code-block">padding: 8rem 0 0</code> adds a padding of <code class="inline-code-block">8rem</code> to the top and a padding of <code class="inline-code-block">0</code> to the left, right, and bottom of the main card. This pushes the main card down, so it is no longer being covered by the navbar.

:::tip Why not Start with this Padding?
In the previous tutorial we used <code class="inline-code-block">padding: 0</code> to style the <code class="inline-code-block">home</code> class since that code was based off of a more complicated way of styling the <code class="inline-code-block">Footer</code> component which has now been simplified. We'll be going over this simplified <code class="inline-code-block">Footer</code> component styling in the next tutorial.
:::


Now that we've fixed the placement of the main card, let's add the hover effects to the main card logo and to the box shadow around the main card.

### Adding Hover Effects

To implement the hover effects we'll be adding a <span class="post-term-one">CSS pseudo-class</span> of <code class="inline-code-block">hover</code> to the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">hero</code> which we'll use along with the <code class="inline-code-block">transition</code> property to smoothly apply the hover effects to the main card logo and to the box shadow around the main card.

First, let's add the <code class="inline-code-block">hover</code> pseudo-class:

<code-group>
<code-block title="index.styl">
```stylus{15-18}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
    .home
      padding: 8rem 0 0
      .hero
        margin-left: 2rem
        margin-right: 2rem
        border: 0.125rem solid $darkBorderColor
        box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
        border-radius: 5.625rem
        margin-bottom: 0.625rem
        padding: 2rem
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

- <code class="inline-code-block">.hero: hover</code> applies the <code class="inline-code-block">hover</code> pseudo-class to the <code class="inline-code-block">.hero</code> selector which will apply the styles defined inside of it when the user hovers their pointer over the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">hero</code>.
- <code class="inline-code-block">box-shadow: 0.125rem 0.5rem 1rem 0.125rem #0b0c0f</code> changes the box shadow style defined in the <code class="inline-code-block">hero</code> class.
- <code class="inline-code-block">transform: scale(1.1)</code> applies the <code class="inline-code-block">scale()</code> method to the <code class="inline-code-block">transform</code> property to increase the size of the <code class="inline-code-block">img</code> tag to be <code class="inline-code-block">1.1</code> times the original width and height.

If you have questions about the CSS discussed above, then check out these resources:

- <span class="external-link-wrap">[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)</span>
- <span class="external-link-wrap">[:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)</span>
- <span class="external-link-wrap">[CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)</span>
- <span class="external-link-wrap">[CSS box-shadow Property](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp)</span>

When you hover your pointer over the main card, you should see the logo increase in width and height and the box shadow around the main card should now be more prevalent.

The hover effects are working, but they aren't that smooth. To make them smoother we're going to use the <code class="inline-code-block">transition</code> property.

The <code class="inline-code-block">transition</code> property allows you to change CSS property values smoothly over a specified duration. To create a transition you need to specify two values:
- The CSS property you want to add the transition to
- The duration of the transition

Here's what the <code class="inline-code-block">index.styl</code> file looks like after adding our <code class="inline-code-block">transition</code> properties:

<code-group>
<code-block title="index.styl">
```stylus{12,16-17}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
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

- <code class="inline-code-block">transition: box-shadow 0.2s</code> adds the transition effect to the <code class="inline-code-block">box-shadow</code> property with a specified duration of <code class="inline-code-block">0.2s</code>.
- <code class="inline-code-block">transition: transform 0.2s</code> adds the transition effect to the <code class="inline-code-block">transform</code> property used by the <code class="inline-code-block">img</code> tag with a specified duration of <code class="inline-code-block">0.2s</code>.

When you hover your pointer over the main card, the hover effects should look much smoother.

If you want to learn more about the <code class="inline-code-block">transition</code> property, then check out [CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp).

Now that we have added our hover effects, let's add the radial gradient background to the main card.

### Adding Gradient Background

CSS gradients allow you to display smooth transitions between two or more specified colors.
You can control numerous aspects of the transitions between the colors including the direction, shape, number of colors, etc.

We'll be adding a circular radial gradient background to the center of the <code class="inline-code-block">header</code> tag with a class of <code class="inline-code-block">hero</code>:

<code-group>
<code-block title="index.styl">
```stylus{15}
html
  background-color: $backgroundColor
  body
    background-color: $backgroundColor
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

- <code class="inline-code-block">background-image: radial-gradient(circle at center center, #2c303a, &#36;backgroundColor)</code> adds a radial gradient with a circular shape to the center of the element starting with a color of <code class="inline-code-block">#2c303a</code> which transitions to the <code class="inline-code-block">$backgroundColor</code> variable that is defined in the <code class="inline-code-block">palette.styl</code> file.

If you want to learn more about CSS gradients, then check out these resources:

- <span class="external-link-wrap">[CSS Gradients](https://www.w3schools.com/css/css3_gradients.asp)</span>
- <span class="external-link-wrap">[A Complete Guide to CSS Gradients](https://css-tricks.com/a-complete-guide-to-css-gradients/#top-of-site)</span>
- <span class="external-link-wrap">[radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)</span>
- <span class="external-link-wrap">[A Practical Guide on Radial Gradient - CSS](https://dev.to/obinnaogbonnajoseph/a-practical-guide-on-radial-gradient-css-2383)</span>

You can also check out [Gradient Magic](https://www.gradientmagic.com/) which is a gallery of CSS gradients that you can freely use in your own projects.

The background of the main card should now be a radial gradient that starts at the center of the card with a color of <code class="inline-code-block">#2c303a</code> that circularly transitions to the <code class="inline-code-block">$backgroundColor</code>.

## Next Steps

In the next tutorial we'll add styling to make the <code class="inline-code-block">Footer</code> component stick to the bottom of the page, and we'll add a highlight effect to the SVG icons.
