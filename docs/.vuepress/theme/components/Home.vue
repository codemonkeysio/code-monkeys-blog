<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div class="content-wrapper">
      <header class="hero">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        />

        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || 'Hello' }}
        </h1>

        <p v-if="data.tagline !== null" class="description">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <p v-if="data.actionText && data.actionLink" class="action">
          <NavLink class="action-button" :item="actionLink" />
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
    </div>
    <Footer />
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: 'Home',

  components: { NavLink, Footer },

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
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0 auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 17.5rem
      display block
      margin 3rem auto 1.5rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 0.25rem
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 0.063rem solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 0.063rem solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .hero
      img
        width: 44%
        height: auto
        min-width: 9.375rem
    .features
      flex-direction column
      align-items: center
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 13.125rem
        margin 2rem auto 1.2rem
      h1, .description, .action
        margin 1.2rem auto
      .action-button
        padding 0.6rem 1.2rem
</style>
