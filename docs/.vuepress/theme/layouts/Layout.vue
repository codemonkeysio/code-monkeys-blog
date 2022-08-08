<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
      v-model="isSidebarOpen"
    />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #post-details>
        <slot name="post-details" />
      </template>
      <template #embedded-video>
        <slot name="embedded-video" />
      </template>
      <template #post-pagination>
        <slot name="post-pagination" />
      </template>
      <template #post-comments>
        <slot name="post-comments" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>
</template>

<script>
import Vue from 'vue'
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import Page from '../components/Page.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  created() {
    if (this.$postPagination === undefined) {
      this.postPagination()
    }

    if (typeof window !== `undefined`) {
      if (!sessionStorage.getItem('allPosts')) {
        sessionStorage.setItem('allPosts', 'false')
      }
    }
  },

  data() {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },

    sortPostsByDate(posts) {
      return posts.sort(
        (post1, post2) => new Date(post2.posted) - new Date(post1.posted)
      )
    },

    prevAndNextLinks(posts) {
      const postsPrevAndNextLinks = {}
      let prevLink
      let nextLink
      posts.forEach((post, index) => {
        if (index !== 0) {
          prevLink = posts[index - 1].path
        } else {
          prevLink = ''
        }

        if (index !== posts.length - 1) {
          nextLink = posts[index + 1].path
        } else {
          nextLink = ''
        }

        postsPrevAndNextLinks[post.key] = {
          prevLink,
          nextLink
        }
      })

      return postsPrevAndNextLinks
    },

    postPagination() {
      Vue.prototype.$postPagination = {}

      const allPosts = []
      let postsByTopic = []

      this.$topics.list.forEach(topic => {
        topic.pages.forEach(page => {
          allPosts.push({
            path: page.path,
            posted: page.frontmatter.date,
            key: page.key
          })
          postsByTopic.push({
            path: page.path,
            posted: page.frontmatter.date,
            key: page.key
          })
        })

        this.$postPagination[topic.name] = this.prevAndNextLinks(
          this.sortPostsByDate(postsByTopic)
        )

        postsByTopic = []
      })

      this.$postPagination.allPosts = this.prevAndNextLinks(
        this.sortPostsByDate(allPosts)
      )
    }
  }
}
</script>
