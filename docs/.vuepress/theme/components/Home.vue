<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero" @click="$router.push(`${data.actionLink}`)">
      <div class="logo-wrapper">
        <v-lazy-image
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          src-placeholder="/images/code-monkeys-logos/code-monkeys-full-logo-150w.png"
          :alt="data.heroAlt || 'hero'"
        />
      </div>
      <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p v-if="data.tagline !== null" class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p v-if="data.actionText && data.actionLink" class="action">
        <span class="nav-link action-button">{{ data.actionText }}</span>
      </p>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />
  </main>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';
import NavLink from './NavLink.vue';

export default {
  name: 'Home',

  components: { VLazyImage, NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
.home
  padding: $navbarHeight 2rem 0
  max-width: $homePageWidth
  margin: 0 auto
  display: block
  .hero
    text-align: center
    cursor: pointer
    .logo-wrapper
      margin: 3rem auto 1.5rem
      .v-lazy-image
        filter: blur(0.625rem)
        will-change: filter
        width: 100%
      .v-lazy-image-loaded
        filter: blur(0)
      img
        display: block
    h1, .description, .action
      margin: 1.8rem auto
    .description
      max-width: 35rem
      line-height: 1.3
      color: lighten($textColor, 40%)
    .action-button
      display: inline-block
      color: $textColorTwo
      background-color: $accentColor
      padding: 0.8rem 1.6rem
      border-radius: 0.25rem
      transition: background-color .1s ease
      box-sizing: border-box
      border-bottom: 0.063rem solid darken($accentColor, 10%)
      font-weight: 500
      &:hover
        background-color: lighten($accentColor, 10%)
  .features
    border-top: 0.063rem solid $borderColor
    padding: 1.2rem 0
    margin-top: 2.5rem
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    align-content: stretch
    justify-content: space-between
  .feature
    flex-grow: 1
    flex-basis: 30%
    max-width: 30%
    h2
      font-weight: 500
      border-bottom: none
      padding-bottom: 0
      color: lighten($textColor, 10%)
    p
      color: lighten($textColor, 25%)

@media (max-width: 44.9375rem)
  .home
    .hero
      .logo-wrapper
        margin-top: 1.8rem
    .features
      flex-direction: column
      align-items: center
    .feature
      max-width: 100%
      padding: 0 2.5rem

@media (max-width: 32.5rem)
  .home
    .hero
      .logo-wrapper
        margin-top: 1.5rem
      h1, .description, .action
        margin: 1.5rem auto

@media (max-width: 26.1875rem)
  .home
    .hero
      .logo-wrapper
        margin-top: 1.2rem
        margin-bottom: 1.2rem
      h1, .description, .action
        margin: 1.2rem auto
      .action-button
        max-width: 14.0625rem
        padding: 0.5rem 0.5rem

@media (max-width: 19.375rem)
  .home
    .hero
      .logo-wrapper
        width: 95%
        min-width: 9.375rem

@media (min-width: 19.4375rem)
  .home
    .hero
      .logo-wrapper
        width: 10.625rem

@media (min-width: 32.5625rem)
  .home
    .hero
      .logo-wrapper
        width: 44.2%

@media (min-width: 45rem)
  .home
    .hero
      .logo-wrapper
        width: 16.25rem
</style>
