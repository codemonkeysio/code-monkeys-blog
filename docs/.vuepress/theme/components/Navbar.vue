<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" v-model="value" />

    <RouterLink :to="$localePath" class="home-link">
      <v-lazy-image
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase(`${$site.themeConfig.logo}`)"
        :src-placeholder="
          $withBase(
            '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo-35w.png'
          )
        "
        :alt="`${$siteTitle} Head and Shoulders Logo`"
      />
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </RouterLink>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px'
            }
          : {}
      "
    >
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $site.themeConfig.search !== false &&
            $page.frontmatter.search !== false
        "
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';
import SidebarButton from './SidebarButton.vue';
import NavLinks from './NavLinks.vue';

export default {
  name: 'Navbar',

  components: {
    VLazyImage,
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  props: {
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, 'paddingLeft')) +
      parseInt(css(this.$el, 'paddingRight'));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener('resize', handleLinksWrapWidth, false);
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .v-lazy-image
    filter: blur(0.084375rem)
    will-change: filter
  .v-lazy-image-loaded
    transition: filter 0.7s
    filter: blur(0)
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: 61.25rem)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
