<template>
  <Layout>
    <template #page-top>
      <div class="theme-default-content">
        <h1 v-if="!allPosts">
          {{ topicHeaders[$pagination.pages[0].frontmatter.topic].description }}
          <div class="emoji-wrap">
            {{
              topicHeaders[$pagination.pages[0].frontmatter.topic]
                .descriptionEmoji
            }}
          </div>
        </h1>
        <h1 v-else>
          The Scribblings of a
          <div class="emoji-wrap">Monkey!!! 📝🐒</div>
        </h1>
        <div
          class="post-card"
          @click="
            $router.push(`${post.path}`).catch(err => {
              if (
                err.name !== 'NavigationDuplicated' &&
                !err.message.includes(
                  'Avoided redundant navigation to current location'
                )
              ) {
                console.log(err)
              }
            })
          "
          :key="post.key"
          v-for="post in $pagination.pages"
        >
          <div class="post-title-and-summary">
            <div class="title-wrapper">
              <h2 class="title">
                {{ post.title }}
              </h2>
            </div>
            <PostDetails
              :author="post.frontmatter.author"
              :posted="post.frontmatter.date"
              :updated="post.lastUpdated"
              :numberOfCommits="post.numberOfCommits"
            />
            <p class="preview">
              {{ post.frontmatter.preview }}
            </p>
          </div>
          <div class="post-pic">
            <v-lazy-image
              :src="$withBase(`/images/${post.frontmatter.img}`)"
              :alt="post.frontmatter.alt || 'Post Picture'"
            />
          </div>
        </div>
        <div class="pagination">
          <div>
            <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
              <PaginationButtons :prevButton="true" />
            </router-link>
          </div>
          <div>
            <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
              <PaginationButtons />
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout.vue'
import PostDetails from '../components/PostDetails'
import PaginationButtons from '../components/PaginationButtons'
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js'
import byTopicHeaders from '../../data/index-post/by-topic-headers'

export default {
  name: 'IndexPost',

  components: {
    Layout,
    PostDetails,
    PaginationButtons,
    VLazyImage
  },

  data: function() {
    return {
      topicHeaders: byTopicHeaders.topicHeaders
    }
  },

  computed: {
    allPosts() {
      return this.$route.path.includes('/posts/')
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        if (typeof window !== `undefined`) {
          if (this.$route.path.includes('/topics/')) {
            sessionStorage.setItem('allPosts', 'false')
          } else {
            sessionStorage.setItem('allPosts', 'true')
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-default-content
  padding-bottom: 0
  .post-card
    display: flex
    align-items: center
    margin-top: 3.5rem
    padding: 0 2rem
    border: 0.125rem solid $darkBorderColor
    border-radius: 1.875rem
    box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
    transition: 0.2s
    background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColor)
    cursor: pointer
    .post-title-and-summary
      flex: 8.5
      .title-wrapper
        display: flex
        color: $accentColor
        border-bottom: 0.125rem solid $borderColor
        margin: 1.875rem 0 1.5rem 0
        .title
          border-bottom: 0
          margin: 0
        .title:hover
          text-decoration: underline
      .preview
        margin-top: 1rem
    .post-pic
      flex: 1.5
      padding-top: 1.125rem
      padding-left: 1.125rem
      padding-bottom: 1.125rem
      transition: transform 0.2s;
  .post-card:hover
    box-shadow: 0.125rem 0.5rem 1rem 0.125rem $darkBoxShadowColor
    .post-pic
      transform: scale(1.1);

@media (max-width: 54.6875rem)
  .theme-default-content
    .post-card
      flex-direction: column-reverse
      .post-title-and-summary
        .title-wrapper
          justify-content: center
          margin: 0
        .preview
          text-align: center
          margin-top: 0.875rem
          margin-bottom: 1.25rem
      .post-pic
        padding: 1.25rem 0 0.875rem 0
        width: 9.6875rem
</style>
